/**
 * API endpoint для проверки статуса лицензии
 * GET /api/license-status/:license_key
 */

import { VercelRequest, VercelResponse } from '@vercel/node';
import { findLicenseByKey } from '../lib/db';
import { validateLicenseKeyFormat } from '../lib/license-utils';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Только GET запросы
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { license_key } = req.query;

    // 1. Валидация входных данных
    if (!license_key || typeof license_key !== 'string') {
      return res.status(400).json({
        success: false,
        error: 'Missing license_key parameter'
      });
    }

    // 2. Валидация формата ключа
    if (!validateLicenseKeyFormat(license_key)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid license key format'
      });
    }

    // 3. Поиск лицензии в БД
    const license = await findLicenseByKey(license_key);
    
    if (!license) {
      return res.status(404).json({
        success: false,
        error: 'License not found'
      });
    }

    // 4. Проверка статуса (expired если дата прошла)
    let status = license.status;
    const now = new Date();
    if (license.expiry_date < now && status !== 'expired') {
      status = 'expired';
    }

    // 5. Возврат информации о лицензии
    return res.status(200).json({
      success: true,
      data: {
        license_key: license.license_key,
        months: license.months,
        status: status,
        machine_id: license.machine_id,
        purchase_date: license.purchase_date.toISOString(),
        expiry_date: license.expiry_date.toISOString(),
        created_at: license.created_at.toISOString(),
        is_expired: license.expiry_date < now
      }
    });

  } catch (error) {
    console.error('License status error:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
}

