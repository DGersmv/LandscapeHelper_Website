# Инструкция по настройке системы лицензирования

## Обзор

Система лицензирования для LandscapeHelper включает:
- Генерацию лицензионных ключей
- Активацию лицензий на машинах пользователей
- Отправку email с ключами
- Проверку статуса лицензий

## Настройка базы данных

### 1. Создание базы данных PostgreSQL

#### Вариант A: Vercel Postgres
1. Перейдите в [Vercel Dashboard](https://vercel.com/dashboard)
2. Выберите проект
3. Перейдите в раздел "Storage"
4. Создайте новую базу данных PostgreSQL
5. Скопируйте строку подключения `DATABASE_URL`

#### Вариант B: Supabase
1. Создайте проект на [Supabase](https://supabase.com)
2. Перейдите в раздел "Settings" → "Database"
3. Скопируйте Connection String (URI)

#### Вариант C: Neon (рекомендуется для начала)
1. Создайте проект на [Neon](https://neon.tech)
2. Скопируйте Connection String из Dashboard
3. Формат: `postgresql://user:password@host/database?sslmode=require`

### 2. Создание таблицы

#### Вариант A: Через API endpoint (рекомендуется)

1. Добавьте `DATABASE_URL` в переменные окружения Vercel
2. Выполните запрос к API для инициализации:

```bash
curl -X POST https://your-domain.vercel.app/api/init-db
```

Или откройте в браузере после деплоя:
```
https://your-domain.vercel.app/api/init-db
```

#### Вариант B: Вручную через SQL

Выполните SQL скрипт из файла `database-init.sql` в вашей базе данных (через Neon Dashboard → SQL Editor):

```sql
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

CREATE INDEX IF NOT EXISTS idx_license_key ON licenses(license_key);
CREATE INDEX IF NOT EXISTS idx_status ON licenses(status);
CREATE INDEX IF NOT EXISTS idx_machine_id ON licenses(machine_id);
```

### 3. Тестирование подключения к БД

Проверьте подключение к базе данных:

```bash
curl https://your-domain.vercel.app/api/test-db
```

Или откройте в браузере:
```
https://your-domain.vercel.app/api/test-db
```

Должен вернуться ответ с текущим временем БД и версией PostgreSQL.

## Настройка переменных окружения

Добавьте следующие переменные в Vercel Dashboard → Settings → Environment Variables:

### Обязательные переменные:

```env
# База данных
DATABASE_URL=postgresql://user:password@host:5432/database

# Админ токен для генерации лицензий
ADMIN_TOKEN=your-secret-admin-token-here
```

### Для отправки email (SMTP):

```env
# SMTP настройки для mail.227.info
SMTP_HOST=mail.227.info
SMTP_PORT=465
SMTP_USER=admin@227.info
SMTP_PASS=Gdv2210974!!!
EMAIL_FROM=LandscapeHelper <admin@227.info>
```

**Варианты портов:**
- Порт `465` - SSL/TLS (secure: true) - рекомендуется
- Порт `587` - STARTTLS (secure: false)
- Порт `25` - обычно только для внутренних сетей

### Настройка SMTP для mail.227.info:

Используйте порт 465 с SSL/TLS для безопасного подключения. Если порт 465 не работает, попробуйте 587 с STARTTLS.

## Использование

### Генерация лицензионного ключа

1. Откройте страницу `/payment`
2. Нажмите "Показать админ-панель"
3. Введите админ токен
4. Выберите срок действия (6 или 12 месяцев)
5. (Опционально) Укажите email для отправки ключа
6. Нажмите "Сгенерировать лицензию"

### API Endpoints

#### POST /api/activate-license
Активация лицензии на машине пользователя.

**Request:**
```json
{
  "license_key": "BRPL-2024-ABCD-EFGH-IJKL-MNOP",
  "machine_id": "AA:BB:CC:DD:EE:FF"
}
```

**Response (success):**
```json
{
  "success": true,
  "data": {
    "months": 6,
    "expiry_date": 1704067200,
    "machine_id": "AA:BB:CC:DD:EE:FF",
    "status": "used"
  }
}
```

#### GET /api/license-status/:license_key
Проверка статуса лицензии.

**Response:**
```json
{
  "success": true,
  "data": {
    "license_key": "BRPL-2024-ABCD-EFGH-IJKL-MNOP",
    "months": 6,
    "status": "active",
    "machine_id": null,
    "purchase_date": "2024-01-01T00:00:00.000Z",
    "expiry_date": "2024-07-01T00:00:00.000Z",
    "is_expired": false
  }
}
```

#### POST /api/generate-license (admin)
Генерация нового лицензионного ключа.

**Request:**
```json
{
  "admin_token": "your-admin-token",
  "months": 6,
  "email": "user@example.com"
}
```

#### POST /api/reset-license (admin)
Сброс лицензии (отвязка от машины).

**Request:**
```json
{
  "admin_token": "your-admin-token",
  "license_key": "BRPL-2024-ABCD-EFGH-IJKL-MNOP"
}
```

## Формат лицензионного ключа

Лицензионные ключи имеют формат:
```
BRPL-YYYY-XXXX-XXXX-XXXX-XXXX-XXXX
```

Где:
- `BRPL` - префикс
- `YYYY` - год генерации (например, 2024)
- `XXXX-XXXX-XXXX-XXXX-XXXX` - случайная часть (20 символов)

Пример: `BRPL-2024-A1B2-C3D4-E5F6-G7H8-I9J0`

## Безопасность

1. **Админ токен**: Храните в переменных окружения, не коммитьте в репозиторий
2. **HTTPS**: Все запросы должны проходить по HTTPS (Vercel обеспечивает это автоматически)
3. **Валидация**: Все входные данные проверяются на стороне сервера
4. **Rate limiting**: Рекомендуется добавить rate limiting для API endpoints

## Тестирование

### Локальное тестирование

1. Установите зависимости:
```bash
npm install
```

2. Настройте переменные окружения в `.env.local`

3. Запустите dev-сервер:
```bash
npm run dev
```

4. Тестируйте API endpoints через Postman или curl

### Примеры тестирования

```bash
# Генерация лицензии
curl -X POST http://localhost:3000/api/generate-license \
  -H "Content-Type: application/json" \
  -d '{"admin_token":"your-token","months":6,"email":"test@example.com"}'

# Активация лицензии
curl -X POST http://localhost:3000/api/activate-license \
  -H "Content-Type: application/json" \
  -d '{"license_key":"BRPL-2024-XXXX-XXXX-XXXX-XXXX","machine_id":"AA:BB:CC:DD:EE:FF"}'

# Проверка статуса
curl http://localhost:3000/api/license-status/BRPL-2024-XXXX-XXXX-XXXX-XXXX
```

## Troubleshooting

### Ошибка подключения к БД
- Проверьте правильность `DATABASE_URL`
- Убедитесь, что база данных доступна из интернета
- Проверьте права доступа пользователя БД

### Email не отправляется
- Проверьте SMTP настройки
- Для Gmail используйте пароль приложения, а не обычный пароль
- Проверьте логи в Vercel Dashboard → Functions

### Лицензия не активируется
- Проверьте формат ключа
- Проверьте формат machine_id (должен быть MAC-адрес)
- Проверьте статус лицензии в БД

## Дополнительные функции

Для расширения функциональности можно добавить:
- Rate limiting (через Vercel Edge Config или middleware)
- Логирование всех операций
- Админ-панель для управления лицензиями
- Экспорт/импорт лицензий
- Статистика использования

