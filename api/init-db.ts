/**
 * API endpoint для инициализации базы данных
 * POST /api/init-db
 * Выполнить один раз при первом запуске
 */

import { VercelRequest, VercelResponse } from '@vercel/node';
import { initDatabase } from '../lib/db';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Только POST запросы
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    // Инициализация БД
    const result = await initDatabase();

    if (result.success) {
      return res.status(200).json({
        success: true,
        message: 'Database initialized successfully. Table "licenses" created with indexes.'
      });
    } else {
      return res.status(500).json({
        success: false,
        error: result.error || 'Failed to initialize database'
      });
    }
  } catch (error) {
    console.error('Init database error:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error: ' + String(error)
    });
  }
}

