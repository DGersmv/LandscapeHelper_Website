/**
 * API endpoint для тестирования подключения к БД
 * GET /api/test-db
 */

import { VercelRequest, VercelResponse } from '@vercel/node';
import { sql } from '@vercel/postgres';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    // Простой тест подключения
    const result = await sql`SELECT NOW() as current_time, version() as pg_version`;
    
    return res.status(200).json({
      success: true,
      message: 'Database connection successful',
      data: {
        current_time: result.rows[0].current_time,
        pg_version: result.rows[0].pg_version.split(' ')[0] + ' ' + result.rows[0].pg_version.split(' ')[1]
      }
    });
  } catch (error) {
    console.error('Database test error:', error);
    return res.status(500).json({
      success: false,
      error: 'Database connection failed: ' + String(error),
      hint: 'Check your DATABASE_URL environment variable'
    });
  }
}

