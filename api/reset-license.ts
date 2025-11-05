/**
 * API endpoint для сброса лицензии (admin)
 * POST /api/reset-license
 */

import { VercelRequest, VercelResponse } from '@vercel/node';
import { resetLicense } from '../lib/db';
import { validateLicenseKeyFormat } from '../lib/license-utils';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Только POST запросы
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { admin_token, license_key } = req.body;

    // 1. Проверка админ токена
    const adminToken = process.env.ADMIN_TOKEN;
    if (!adminToken || admin_token !== adminToken) {
      return res.status(401).json({
        success: false,
        error: 'Unauthorized. Invalid admin token'
      });
    }

    // 2. Валидация входных данных
    if (!license_key) {
      return res.status(400).json({
        success: false,
        error: 'Missing license_key'
      });
    }

    // 3. Валидация формата ключа
    if (!validateLicenseKeyFormat(license_key)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid license key format'
      });
    }

    // 4. Сброс лицензии
    const success = await resetLicense(license_key);

    if (!success) {
      return res.status(404).json({
        success: false,
        error: 'License not found or reset failed'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'License reset successfully'
    });

  } catch (error) {
    console.error('Reset license error:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
}

