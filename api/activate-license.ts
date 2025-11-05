/**
 * API endpoint для активации лицензии
 * POST /api/activate-license
 */

import { VercelRequest, VercelResponse } from '@vercel/node';
import { findLicenseByKey, activateLicense } from '../lib/db';
import { validateLicenseKeyFormat, validateMachineId } from '../lib/license-utils';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Только POST запросы
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { license_key, machine_id } = req.body;

    // 1. Валидация входных данных
    if (!license_key || !machine_id) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: license_key and machine_id are required'
      });
    }

    // 2. Валидация формата ключа
    if (!validateLicenseKeyFormat(license_key)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid license key format. Expected format: BRPL-YYYY-XXXX-XXXX-XXXX-XXXX'
      });
    }

    // 3. Валидация формата machine_id
    if (!validateMachineId(machine_id)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid machine_id format. Expected MAC address format: XX:XX:XX:XX:XX:XX'
      });
    }

    // 4. Поиск лицензии в БД
    const license = await findLicenseByKey(license_key);
    if (!license) {
      return res.status(404).json({
        success: false,
        error: 'License key not found'
      });
    }

    // 5. Проверка статуса лицензии
    if (license.status === 'expired') {
      return res.status(400).json({
        success: false,
        error: 'License has expired'
      });
    }

    // Проверка даты окончания
    const now = new Date();
    if (license.expiry_date < now) {
      return res.status(400).json({
        success: false,
        error: 'License has expired'
      });
    }

    // 6. Проверка привязки к машине
    if (license.machine_id) {
      if (license.machine_id === machine_id) {
        // Та же машина - возвращаем данные (можно повторно активировать)
        return res.status(200).json({
          success: true,
          data: {
            months: license.months,
            expiry_date: Math.floor(license.expiry_date.getTime() / 1000),
            machine_id: license.machine_id,
            status: license.status
          }
        });
      } else {
        // Другая машина - ошибка
        return res.status(403).json({
          success: false,
          error: 'License already activated on another machine'
        });
      }
    }

    // 7. Активация лицензии (если статус 'active')
    if (license.status === 'active') {
      const activatedLicense = await activateLicense(license_key, machine_id);
      
      if (!activatedLicense) {
        return res.status(500).json({
          success: false,
          error: 'Failed to activate license'
        });
      }

      return res.status(200).json({
        success: true,
        data: {
          months: activatedLicense.months,
          expiry_date: Math.floor(activatedLicense.expiry_date.getTime() / 1000),
          machine_id: activatedLicense.machine_id,
          status: activatedLicense.status
        }
      });
    }

    return res.status(400).json({
      success: false,
      error: 'License is not active'
    });

  } catch (error) {
    console.error('Activate license error:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
}

