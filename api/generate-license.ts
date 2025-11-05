/**
 * API endpoint для генерации лицензионного ключа (admin)
 * POST /api/generate-license
 */

import { VercelRequest, VercelResponse } from '@vercel/node';
import { createLicense } from '../lib/db';
import { generateLicenseKey, calculateExpiryDate } from '../lib/license-utils';
import { sendLicenseKey } from '../lib/email';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Только POST запросы
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { admin_token, months, email } = req.body;

    // 1. Проверка админ токена
    const adminToken = process.env.ADMIN_TOKEN;
    if (!adminToken || admin_token !== adminToken) {
      return res.status(401).json({
        success: false,
        error: 'Unauthorized. Invalid admin token'
      });
    }

    // 2. Валидация входных данных
    if (!months || (months !== 6 && months !== 12)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid months value. Must be 6 or 12'
      });
    }

    // 3. Генерация уникального ключа
    let licenseKey = generateLicenseKey();
    let attempts = 0;
    const maxAttempts = 10;

    // Проверяем уникальность ключа
    while (attempts < maxAttempts) {
      const { findLicenseByKey } = await import('../lib/db');
      const existing = await findLicenseByKey(licenseKey);
      
      if (!existing) {
        break; // Ключ уникален
      }
      
      licenseKey = generateLicenseKey();
      attempts++;
    }

    if (attempts >= maxAttempts) {
      return res.status(500).json({
        success: false,
        error: 'Failed to generate unique license key'
      });
    }

    // 4. Вычисление дат
    const purchaseDate = new Date();
    const expiryDate = calculateExpiryDate(months);

    // 5. Сохранение в БД
    const license = await createLicense(
      licenseKey,
      months,
      purchaseDate,
      expiryDate
    );

    if (!license) {
      return res.status(500).json({
        success: false,
        error: 'Failed to create license in database'
      });
    }

    // 6. Отправка email (если указан)
    if (email) {
      const emailSent = await sendLicenseKey(
        email,
        licenseKey,
        months,
        expiryDate
      );

      if (!emailSent) {
        console.warn('Failed to send email, but license was created');
      }
    }

    // 7. Возврат результата
    return res.status(200).json({
      success: true,
      data: {
        license_key: licenseKey,
        months: months,
        purchase_date: Math.floor(purchaseDate.getTime() / 1000),
        expiry_date: Math.floor(expiryDate.getTime() / 1000),
        email_sent: email ? true : false
      }
    });

  } catch (error) {
    console.error('Generate license error:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
}

