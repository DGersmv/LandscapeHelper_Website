# Настройка переменных окружения в Vercel

## Переменные для добавления

Добавьте следующие переменные в **Vercel Dashboard → Settings → Environment Variables**:

### 1. DATABASE_URL
```
Name: DATABASE_URL
Value: postgresql://neondb_owner:npg_3QPdCOmfDK2e@ep-silent-bar-a10loy9g-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require
Environment: Production, Preview, Development (выберите все)
```

### 2. ADMIN_TOKEN
```
Name: ADMIN_TOKEN
Value: [придумайте сложный токен, например: lkJh3k9mP2qR5tW8xY1zA4bC6dE7fG]
Environment: Production, Preview, Development (выберите все)
```

### 3. SMTP_HOST
```
Name: SMTP_HOST
Value: mail.227.info
Environment: Production, Preview, Development (выберите все)
```

### 4. SMTP_PORT
```
Name: SMTP_PORT
Value: 465
Environment: Production, Preview, Development (выберите все)
```

**Примечание**: Если порт 465 не работает, попробуйте 587

### 5. SMTP_USER
```
Name: SMTP_USER
Value: admin@227.info
Environment: Production, Preview, Development (выберите все)
```

### 6. SMTP_PASS
```
Name: SMTP_PASS
Value: Gdv2210974!!!
Environment: Production, Preview, Development (выберите все)
```

### 7. EMAIL_FROM
```
Name: EMAIL_FROM
Value: LandscapeHelper <admin@227.info>
Environment: Production, Preview, Development (выберите все)
```

## Как добавить переменные

1. Перейдите в [Vercel Dashboard](https://vercel.com/dashboard)
2. Выберите проект **LanscapeHelper** (или ваш проект)
3. Перейдите в **Settings** → **Environment Variables**
4. Нажмите **Add New**
5. Введите Name и Value
6. Выберите все окружения (Production, Preview, Development)
7. Нажмите **Save**
8. Повторите для каждой переменной

## Важно

- После добавления переменных нужно **передеплоить проект** или дождаться автоматического деплоя
- Переменные доступны только после деплоя
- Проверьте, что все переменные добавлены для всех окружений

## Проверка

После деплоя проверьте:
1. Подключение к БД: `https://landscape.227.info/api/test-db`
2. Инициализацию БД: `https://landscape.227.info/api/init-db`
3. Генерацию лицензии через админ-панель на странице `https://landscape.227.info/payment`

