/**
 * Утилиты для работы с лицензионными ключами
 */

export interface LicenseKeyParts {
  prefix: string;
  year: string;
  randomPart: string;
}

/**
 * Генерирует случайную строку из букв и цифр
 */
function generateRandomString(length: number): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Генерирует уникальный лицензионный ключ
 * Формат: BRPL-YYYY-XXXX-XXXX-XXXX-XXXX-XXXX
 */
export function generateLicenseKey(): string {
  const year = new Date().getFullYear().toString();
  const randomPart = generateRandomString(20);
  
  // Форматируем: BRPL-YYYY-XXXX-XXXX-XXXX-XXXX-XXXX
  const formatted = [
    randomPart.substring(0, 4),
    randomPart.substring(4, 8),
    randomPart.substring(8, 12),
    randomPart.substring(12, 16),
    randomPart.substring(16, 20)
  ].join('-');
  
  return `BRPL-${year}-${formatted}`;
}

/**
 * Парсит лицензионный ключ и возвращает его части
 */
export function parseLicenseKey(licenseKey: string): LicenseKeyParts | null {
  const pattern = /^BRPL-(\d{4})-([A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4})$/;
  const match = licenseKey.match(pattern);
  
  if (!match) {
    return null;
  }
  
  return {
    prefix: 'BRPL',
    year: match[1],
    randomPart: match[2]
  };
}

/**
 * Валидирует формат лицензионного ключа
 */
export function validateLicenseKeyFormat(licenseKey: string): boolean {
  return parseLicenseKey(licenseKey) !== null;
}

/**
 * Валидирует формат MAC-адреса (machine_id)
 */
export function validateMachineId(machineId: string): boolean {
  // Формат: XX:XX:XX:XX:XX:XX или XX-XX-XX-XX-XX-XX
  const pattern = /^([0-9A-Fa-f]{2}[:\-]){5}([0-9A-Fa-f]{2})$/;
  return pattern.test(machineId);
}

/**
 * Вычисляет дату окончания лицензии
 */
export function calculateExpiryDate(months: number): Date {
  const date = new Date();
  date.setMonth(date.getMonth() + months);
  return date;
}

