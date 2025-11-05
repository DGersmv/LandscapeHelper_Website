-- SQL скрипт для создания таблицы licenses
-- Выполнить один раз при настройке базы данных

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

-- Создание индексов для оптимизации запросов
CREATE INDEX IF NOT EXISTS idx_license_key ON licenses(license_key);
CREATE INDEX IF NOT EXISTS idx_status ON licenses(status);
CREATE INDEX IF NOT EXISTS idx_machine_id ON licenses(machine_id);

-- Комментарии к таблице
COMMENT ON TABLE licenses IS 'Таблица для хранения лицензионных ключей';
COMMENT ON COLUMN licenses.license_key IS 'Уникальный лицензионный ключ формата BRPL-YYYY-XXXX-XXXX-XXXX-XXXX';
COMMENT ON COLUMN licenses.months IS 'Срок действия лицензии в месяцах (6 или 12)';
COMMENT ON COLUMN licenses.purchase_date IS 'Дата покупки лицензии';
COMMENT ON COLUMN licenses.expiry_date IS 'Дата окончания лицензии';
COMMENT ON COLUMN licenses.machine_id IS 'MAC-адрес машины, на которой активирована лицензия';
COMMENT ON COLUMN licenses.status IS 'Статус лицензии: active, used, expired';

