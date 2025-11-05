# Настройка кастомного домена для API

## Проблема

API работает на `landscape-helper-website.vercel.app`, но не работает на `landscape.227.info`.

## Решение

### Вариант 1: Настройка домена напрямую в Vercel (рекомендуется)

1. Перейдите в **Vercel Dashboard** → ваш проект → **Settings** → **Domains**
2. Убедитесь, что `landscape.227.info` добавлен и верифицирован
3. Проверьте, что DNS записи настроены правильно:
   - **A запись** или **CNAME** должна указывать на Vercel
   - Для Vercel обычно: `cname.vercel-dns.com` или IP адреса Vercel

### Вариант 2: Если домен проксируется через другой сервер

Если `landscape.227.info` проксируется через nginx или другой сервер (судя по файлу `nginx.conf`), нужно настроить проксирование для API routes:

**Для nginx:**
```nginx
# API routes - проксируем на Vercel
location /api/ {
    proxy_pass https://landscape-helper-website.vercel.app;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}

# Остальные маршруты - статический контент
location / {
    try_files $uri $uri/ /index.html;
}
```

### Вариант 3: Использовать поддомен для API

Если основное доменное имя используется для статики, можно настроить поддомен для API:
- `api.landscape.227.info` → указывает напрямую на Vercel
- `landscape.227.info` → статический контент

## Проверка

После настройки проверьте:
1. `https://landscape.227.info/api/test-db` - должен вернуть JSON
2. `https://landscape-helper-website.vercel.app/api/test-db` - должен продолжать работать

## Текущий статус

✅ **Работает:** `landscape-helper-website.vercel.app/api/test-db`  
❌ **Не работает:** `landscape.227.info/api/test-db`

## Рекомендация

Лучше всего настроить домен `landscape.227.info` напрямую в Vercel Dashboard, чтобы все запросы (включая API) обрабатывались Vercel Serverless Functions.

