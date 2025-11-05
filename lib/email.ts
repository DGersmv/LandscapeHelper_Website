/**
 * Отправка email через SMTP
 */

import nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

/**
 * Создает transporter для отправки email
 */
function createTransporter() {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = parseInt(process.env.SMTP_PORT || '587');
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  
  if (!smtpHost || !smtpUser || !smtpPass) {
    throw new Error('SMTP configuration is missing');
  }
  
  return nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass
    }
  });
}

/**
 * Отправляет email
 */
export async function sendEmail(options: EmailOptions): Promise<boolean> {
  try {
    const transporter = createTransporter();
    const from = process.env.EMAIL_FROM || 'LandscapeHelper <noreply@landscapehelper.com>';
    
    await transporter.sendMail({
      from,
      to: options.to,
      subject: options.subject,
      html: options.html
    });
    
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

/**
 * Отправляет лицензионный ключ пользователю
 */
export async function sendLicenseKey(
  email: string,
  licenseKey: string,
  months: number,
  expiryDate: Date
): Promise<boolean> {
  const subject = 'Ваш лицензионный ключ LandscapeHelper';
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #4CAF50, #2E7D32); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
        .license-key { background: white; padding: 20px; border-radius: 8px; font-family: monospace; font-size: 18px; font-weight: bold; text-align: center; color: #4CAF50; margin: 20px 0; border: 2px dashed #4CAF50; }
        .info { background: white; padding: 15px; border-radius: 8px; margin: 15px 0; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🌱 LandscapeHelper</h1>
          <p>Ваш лицензионный ключ готов!</p>
        </div>
        <div class="content">
          <p>Спасибо за поддержку проекта LandscapeHelper!</p>
          <p>Ваш лицензионный ключ:</p>
          <div class="license-key">${licenseKey}</div>
          <div class="info">
            <p><strong>Срок действия:</strong> ${months} месяцев</p>
            <p><strong>Действителен до:</strong> ${expiryDate.toLocaleDateString('ru-RU')}</p>
          </div>
          <p>Для активации лицензии:</p>
          <ol>
            <li>Откройте ArchiCAD</li>
            <li>Перейдите в меню дополнений LandscapeHelper</li>
            <li>Введите ваш лицензионный ключ</li>
            <li>Нажмите "Активировать"</li>
          </ol>
          <p>Если у вас возникнут вопросы, пожалуйста, свяжитесь с нами.</p>
        </div>
        <div class="footer">
          <p>LandscapeHelper - Автоматизация ландшафтного проектирования в Archicad</p>
        </div>
      </div>
    </body>
    </html>
  `;
  
  return sendEmail({ to: email, subject, html });
}

