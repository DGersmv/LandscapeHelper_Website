/**
 * Подключение к базе данных PostgreSQL
 */

import { sql } from '@vercel/postgres';

export interface License {
  id: number;
  license_key: string;
  months: number;
  purchase_date: Date;
  expiry_date: Date;
  machine_id: string | null;
  status: 'active' | 'used' | 'expired';
  created_at: Date;
}

/**
 * Инициализация таблицы licenses (выполнить один раз)
 */
export async function initDatabase() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS licenses (
        id SERIAL PRIMARY KEY,
        license_key VARCHAR(50) UNIQUE NOT NULL,
        months INT NOT NULL,
        purchase_date TIMESTAMP NOT NULL,
        expiry_date TIMESTAMP NOT NULL,
        machine_id VARCHAR(50) NULL,
        status VARCHAR(20) DEFAULT 'active',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    
    // Создаем индексы
    await sql`CREATE INDEX IF NOT EXISTS idx_license_key ON licenses(license_key);`;
    await sql`CREATE INDEX IF NOT EXISTS idx_status ON licenses(status);`;
    await sql`CREATE INDEX IF NOT EXISTS idx_machine_id ON licenses(machine_id);`;
    
    return { success: true };
  } catch (error) {
    console.error('Database initialization error:', error);
    return { success: false, error: String(error) };
  }
}

/**
 * Поиск лицензии по ключу
 */
export async function findLicenseByKey(licenseKey: string): Promise<License | null> {
  try {
    const result = await sql`
      SELECT * FROM licenses 
      WHERE license_key = ${licenseKey}
      LIMIT 1
    `;
    
    if (result.rows.length === 0) {
      return null;
    }
    
    const row = result.rows[0];
    return {
      id: row.id,
      license_key: row.license_key,
      months: row.months,
      purchase_date: new Date(row.purchase_date),
      expiry_date: new Date(row.expiry_date),
      machine_id: row.machine_id,
      status: row.status as 'active' | 'used' | 'expired',
      created_at: new Date(row.created_at)
    };
  } catch (error) {
    console.error('Error finding license:', error);
    return null;
  }
}

/**
 * Создание новой лицензии
 */
export async function createLicense(
  licenseKey: string,
  months: number,
  purchaseDate: Date,
  expiryDate: Date
): Promise<License | null> {
  try {
    const result = await sql`
      INSERT INTO licenses (license_key, months, purchase_date, expiry_date, status)
      VALUES (${licenseKey}, ${months}, ${purchaseDate.toISOString()}, ${expiryDate.toISOString()}, 'active')
      RETURNING *
    `;
    
    if (result.rows.length === 0) {
      return null;
    }
    
    const row = result.rows[0];
    return {
      id: row.id,
      license_key: row.license_key,
      months: row.months,
      purchase_date: new Date(row.purchase_date),
      expiry_date: new Date(row.expiry_date),
      machine_id: row.machine_id,
      status: row.status as 'active' | 'used' | 'expired',
      created_at: new Date(row.created_at)
    };
  } catch (error) {
    console.error('Error creating license:', error);
    return null;
  }
}

/**
 * Активация лицензии (привязка к машине)
 */
export async function activateLicense(
  licenseKey: string,
  machineId: string
): Promise<License | null> {
  try {
    const result = await sql`
      UPDATE licenses 
      SET machine_id = ${machineId}, 
          status = 'used'
      WHERE license_key = ${licenseKey}
        AND status = 'active'
      RETURNING *
    `;
    
    if (result.rows.length === 0) {
      return null;
    }
    
    const row = result.rows[0];
    return {
      id: row.id,
      license_key: row.license_key,
      months: row.months,
      purchase_date: new Date(row.purchase_date),
      expiry_date: new Date(row.expiry_date),
      machine_id: row.machine_id,
      status: row.status as 'active' | 'used' | 'expired',
      created_at: new Date(row.created_at)
    };
  } catch (error) {
    console.error('Error activating license:', error);
    return null;
  }
}

/**
 * Сброс лицензии (для админа)
 */
export async function resetLicense(licenseKey: string): Promise<boolean> {
  try {
    const result = await sql`
      UPDATE licenses 
      SET machine_id = NULL, 
          status = 'active'
      WHERE license_key = ${licenseKey}
      RETURNING id
    `;
    
    return result.rows.length > 0;
  } catch (error) {
    console.error('Error resetting license:', error);
    return false;
  }
}

