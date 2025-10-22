import { Link } from 'react-router-dom'

function Payment() {
  return (
    <div className="container" style={{ padding: '80px 0' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '48px', fontSize: '2.5rem', color: 'var(--primary-green)' }}>
        Оплата
      </h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px', marginBottom: '48px' }}>
        <div className="card" style={{ border: '2px solid var(--primary-green)' }}>
          <div style={{ background: 'var(--primary-green)', color: 'white', padding: '8px 12px', borderRadius: '4px', marginBottom: '16px', textAlign: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>
            💳 ОПЛАТА
          </div>
          <h3 style={{ color: 'var(--primary-green)', marginBottom: '16px' }}>LandscapeHelper Pro</h3>
          <p style={{ marginBottom: '24px', color: 'var(--text-secondary)' }}>
            Полная версия плагина с расширенными возможностями
          </p>
          <div style={{ marginBottom: '16px' }}>
            <strong>Цена:</strong> 2,990 ₽<br />
            <strong>Лицензия:</strong> Бессрочная<br />
            <strong>Обновления:</strong> Бесплатные<br />
            <strong>Поддержка:</strong> Включена<br />
            <strong>Совместимость:</strong> ArchiCAD 25-27
          </div>
          <button className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
            💳 Купить за 2,990 ₽
          </button>
        </div>
        
        <div className="card">
          <h3 style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>LandscapeHelper Free</h3>
          <p style={{ marginBottom: '24px', color: 'var(--text-secondary)' }}>
            Базовая версия с ограниченным функционалом
          </p>
          <div style={{ marginBottom: '16px' }}>
            <strong>Цена:</strong> Бесплатно<br />
            <strong>Лицензия:</strong> Бессрочная<br />
            <strong>Ограничения:</strong> До 10 объектов<br />
            <strong>Поддержка:</strong> Сообщество<br />
            <strong>Совместимость:</strong> ArchiCAD 25-27
          </div>
          <Link to="/download" className="btn btn-secondary" style={{ width: '100%', textAlign: 'center' }}>
            📥 Скачать бесплатно
          </Link>
        </div>
      </div>

      <div className="card">
        <h2 style={{ color: 'var(--primary-green)', marginBottom: '24px' }}>Способы оплаты</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          <div style={{ textAlign: 'center', padding: '20px', background: 'var(--surface)', borderRadius: '8px' }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>💳</div>
            <h4 style={{ marginBottom: '8px' }}>Банковская карта</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Visa, MasterCard, МИР</p>
          </div>
          
          <div style={{ textAlign: 'center', padding: '20px', background: 'var(--surface)', borderRadius: '8px' }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🏦</div>
            <h4 style={{ marginBottom: '8px' }}>Банковский перевод</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>СБП, Яндекс.Деньги</p>
          </div>
          
          <div style={{ textAlign: 'center', padding: '20px', background: 'var(--surface)', borderRadius: '8px' }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>📱</div>
            <h4 style={{ marginBottom: '8px' }}>Мобильные платежи</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Apple Pay, Google Pay</p>
          </div>
          
          <div style={{ textAlign: 'center', padding: '20px', background: 'var(--surface)', borderRadius: '8px' }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>💼</div>
            <h4 style={{ marginBottom: '8px' }}>Корпоративная оплата</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Счет для организаций</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 style={{ color: 'var(--primary-green)', marginBottom: '24px' }}>Что входит в Pro версию</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <div>
            <h4 style={{ marginBottom: '12px', color: 'var(--primary-green)' }}>🚀 Расширенные функции</h4>
            <ul style={{ paddingLeft: '20px', fontSize: '0.95rem' }}>
              <li>Неограниченное количество объектов</li>
              <li>Пакетная обработка</li>
              <li>Автоматическое сохранение настроек</li>
              <li>Расширенные фильтры</li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '12px', color: 'var(--primary-green)' }}>🛠️ Дополнительные инструменты</h4>
            <ul style={{ paddingLeft: '20px', fontSize: '0.95rem' }}>
              <li>Массовое редактирование</li>
              <li>Импорт/экспорт конфигураций</li>
              <li>Пользовательские шаблоны</li>
              <li>API для интеграции</li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '12px', color: 'var(--primary-green)' }}>📞 Приоритетная поддержка</h4>
            <ul style={{ paddingLeft: '20px', fontSize: '0.95rem' }}>
              <li>Техническая поддержка 24/7</li>
              <li>Персональный менеджер</li>
              <li>Удаленная помощь</li>
              <li>Обучение и консультации</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 style={{ color: 'var(--primary-green)', marginBottom: '24px' }}>Гарантии</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🔒</div>
            <h4 style={{ marginBottom: '8px' }}>Безопасность</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>SSL-шифрование всех платежей</p>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>↩️</div>
            <h4 style={{ marginBottom: '8px' }}>Возврат средств</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>30 дней на возврат без вопросов</p>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🔄</div>
            <h4 style={{ marginBottom: '8px' }}>Обновления</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Бесплатные обновления навсегда</p>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>📄</div>
            <h4 style={{ marginBottom: '8px' }}>Лицензия</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Официальная лицензия</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 style={{ color: 'var(--primary-green)', marginBottom: '24px' }}>Часто задаваемые вопросы</h2>
        
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ marginBottom: '8px' }}>Можно ли использовать Pro версию на нескольких компьютерах?</h4>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
            Да, лицензия позволяет использовать плагин на 3 компьютерах одновременно.
          </p>
        </div>
        
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ marginBottom: '8px' }}>Что происходит при обновлении ArchiCAD?</h4>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
            Мы обновляем плагин для новых версий ArchiCAD бесплатно в течение 2 лет.
          </p>
        </div>
        
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ marginBottom: '8px' }}>Есть ли скидки для студентов или образовательных учреждений?</h4>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
            Да, мы предоставляем скидку 50% для студентов и образовательных учреждений.
          </p>
        </div>
        
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ marginBottom: '8px' }}>Можно ли получить пробную версию?</h4>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
            Да, доступна 14-дневная пробная версия Pro с полным функционалом.
          </p>
        </div>
      </div>

      <div className="card">
        <h2 style={{ color: 'var(--primary-green)', marginBottom: '24px' }}>Правовая информация</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <div>
            <h4 style={{ marginBottom: '12px', color: 'var(--primary-green)' }}>📄 Пользовательское соглашение</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>
              Условия использования программного обеспечения и предоставления услуг
            </p>
            <a href="/legal/terms" className="btn btn-outline" style={{ fontSize: '0.9rem', padding: '8px 16px' }}>
              Читать
            </a>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '12px', color: 'var(--primary-green)' }}>🔒 Политика конфиденциальности</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>
              Обработка персональных данных и защита информации пользователей
            </p>
            <a href="/legal/privacy" className="btn btn-outline" style={{ fontSize: '0.9rem', padding: '8px 16px' }}>
              Читать
            </a>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '12px', color: 'var(--primary-green)' }}>📋 Публичная оферта</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>
              Условия продажи программного обеспечения и оказания услуг
            </p>
            <a href="/legal/offer" className="btn btn-outline" style={{ fontSize: '0.9rem', padding: '8px 16px' }}>
              Читать
            </a>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '12px', color: 'var(--primary-green)' }}>⚖️ Правовая информация</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>
              Информация о продавце, лицензировании и налогообложении
            </p>
            <a href="/legal/info" className="btn btn-outline" style={{ fontSize: '0.9rem', padding: '8px 16px' }}>
              Читать
            </a>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 style={{ color: 'var(--primary-green)', marginBottom: '24px' }}>Информация о продавце</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          <div>
            <h4 style={{ marginBottom: '8px' }}>Организация</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              ИП [ФИО]<br />
              ОГРНИП: [номер]<br />
              ИНН: [номер]
            </p>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '8px' }}>Юридический адрес</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              [Адрес регистрации]
            </p>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '8px' }}>Контактная информация</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Email: support@landscapehelper.ru<br />
              Телефон: +7 (XXX) XXX-XX-XX
            </p>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '8px' }}>Налогообложение</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              НДС не облагается<br />
              (УСН 6%)
            </p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 style={{ color: 'var(--primary-green)', marginBottom: '24px' }}>Возврат и обмен</h2>
        
        <div style={{ background: 'var(--surface)', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
          <h4 style={{ marginBottom: '12px', color: 'var(--primary-green)' }}>🔄 Политика возврата</h4>
          <ul style={{ paddingLeft: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <li>Возврат средств в течение 14 дней с момента покупки</li>
            <li>Возврат возможен при технических проблемах с программным обеспечением</li>
            <li>Возврат не производится при нарушении лицензионного соглашения</li>
            <li>Возврат осуществляется на тот же способ оплаты, которым была произведена покупка</li>
          </ul>
        </div>
        
        <div style={{ background: 'var(--surface)', padding: '20px', borderRadius: '8px' }}>
          <h4 style={{ marginBottom: '12px', color: 'var(--primary-green)' }}>📞 Процедура возврата</h4>
          <ol style={{ paddingLeft: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <li>Обратитесь в службу поддержки с заявлением о возврате</li>
            <li>Укажите причину возврата и номер заказа</li>
            <li>Приложите скриншоты или описание технических проблем (если применимо)</li>
            <li>Возврат будет обработан в течение 5 рабочих дней</li>
          </ol>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '48px' }}>
        <Link to="/download" className="btn btn-primary" style={{ marginRight: '16px' }}>
          Попробовать бесплатно
        </Link>
        <Link to="/docs" className="btn btn-secondary">
          Документация
        </Link>
      </div>
    </div>
  )
}

export default Payment
