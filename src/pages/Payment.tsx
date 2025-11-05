import { Link } from 'react-router-dom'
import PartnerLogo from '../components/PartnerLogo'

function Payment() {
  return (
    <div className="container" style={{ padding: '80px 0' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '48px', fontSize: '2.5rem', color: 'var(--primary-green)' }}>
        Поддержка проекта
      </h1>
      
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <div style={{ 
          background: 'linear-gradient(135deg, var(--primary-green), #2E7D32)', 
          color: 'white', 
          padding: '32px', 
          borderRadius: '16px', 
          marginBottom: '32px',
          boxShadow: '0 8px 32px rgba(76, 175, 80, 0.3)'
        }}>
          <h2 style={{ marginBottom: '16px', fontSize: '2rem' }}>🎉 LandscapeHelper - БЕСПЛАТНО!</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '24px', opacity: '0.9' }}>
            Полнофункциональный плагин для ландшафтного проектирования в Archicad
          </p>
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.2)', 
            padding: '16px', 
            borderRadius: '8px',
            marginBottom: '24px'
          }}>
            <p style={{ fontSize: '1.1rem', margin: '0' }}>
              <strong>✅ Все функции доступны бесплатно</strong><br />
              <strong>✅ Без ограничений по количеству объектов</strong><br />
              <strong>✅ Без рекламы и водяных знаков</strong>
            </p>
          </div>
          <Link to="/download" className="btn" style={{ 
            background: 'white', 
            color: 'var(--primary-green)', 
            padding: '16px 32px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            textDecoration: 'none',
            borderRadius: '8px',
            display: 'inline-block'
          }}>
            📥 Скачать бесплатно
          </Link>
        </div>
      </div>

      <div className="card">
        <h2 style={{ color: 'var(--primary-green)', marginBottom: '24px', textAlign: 'center' }}>
          💝 Поддержите автора
        </h2>
        <p style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '32px', color: 'var(--text-secondary)' }}>
          Если LandscapeHelper помог вам в работе, рассмотрите возможность поддержать проект. 
          Это поможет в развитии и добавлении новых функций.
        </p>
        
      </div>

      <div className="card">
        <h2 style={{ color: 'var(--primary-green)', marginBottom: '24px', textAlign: 'center' }}>
          🎯 На что пойдут средства
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          <div style={{ textAlign: 'center', padding: '20px', background: 'var(--surface)', borderRadius: '8px' }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🛠️</div>
            <h4 style={{ marginBottom: '8px' }}>Разработка</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Новые функции и улучшения
            </p>
          </div>
          
          <div style={{ textAlign: 'center', padding: '20px', background: 'var(--surface)', borderRadius: '8px' }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>📚</div>
            <h4 style={{ marginBottom: '8px' }}>Документация</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Обучающие материалы и видео
            </p>
          </div>
          
          <div style={{ textAlign: 'center', padding: '20px', background: 'var(--surface)', borderRadius: '8px' }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🌐</div>
            <h4 style={{ marginBottom: '8px' }}>Хостинг</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Сайт и серверы для проекта
            </p>
          </div>
          
          <div style={{ textAlign: 'center', padding: '20px', background: 'var(--surface)', borderRadius: '8px' }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>💬</div>
            <h4 style={{ marginBottom: '8px' }}>Поддержка</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Помощь пользователям
            </p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 style={{ color: 'var(--primary-green)', marginBottom: '24px', textAlign: 'center' }}>
          💳 Способы поддержки
        </h2>
        
        <div style={{ 
          background: 'linear-gradient(135deg, var(--primary-green), #2E7D32)', 
          color: 'white', 
          padding: '24px', 
          borderRadius: '12px',
          marginBottom: '24px',
          textAlign: 'center'
        }}>
          <h3 style={{ marginBottom: '16px', fontSize: '1.3rem' }}>
            LandscapeHelper — плагин для автоматизации ландшафтного проектирования в ArchiCAD
          </h3>
          <p style={{ margin: '0 0 20px 0', fontSize: '1rem', opacity: '0.9' }}>
            Ваша поддержка поможет развивать плагин и добавлять новые функции
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(255,255,255,0.2)', padding: '10px 16px', borderRadius: '20px', fontSize: '14px', fontWeight: 'bold' }}>
              💰 ЮMoney: 2204120104235425
            </span>
            <span style={{ background: 'rgba(255,255,255,0.2)', padding: '10px 16px', borderRadius: '20px', fontSize: '14px', fontWeight: 'bold' }}>
              💳 Сбер: 2202 2061 3405 0090
            </span>
            <span style={{ background: 'rgba(255,255,255,0.2)', padding: '10px 16px', borderRadius: '20px', fontSize: '14px', fontWeight: 'bold' }}>
              🏦 Альфа: 2200 1539 7984 4579
            </span>
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          <div style={{ textAlign: 'center', padding: '20px', background: 'var(--surface)', borderRadius: '8px' }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>💳</div>
            <h4 style={{ marginBottom: '8px' }}>Банковские карты</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Сбербанк, Альфа-Банк, ЮMoney</p>
          </div>
          
          <div style={{ textAlign: 'center', padding: '20px', background: 'var(--surface)', borderRadius: '8px' }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>📱</div>
            <h4 style={{ marginBottom: '8px' }}>СБП</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Система быстрых платежей</p>
          </div>
          
          <div style={{ textAlign: 'center', padding: '20px', background: 'var(--surface)', borderRadius: '8px' }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🏦</div>
            <h4 style={{ marginBottom: '8px' }}>Банковский перевод</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Прямой перевод на карту</p>
          </div>
          
          <div style={{ textAlign: 'center', padding: '20px', background: 'var(--surface)', borderRadius: '8px' }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>💰</div>
            <h4 style={{ marginBottom: '8px' }}>Криптовалюта</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Bitcoin, Ethereum</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 style={{ color: 'var(--primary-green)', marginBottom: '24px', textAlign: 'center' }}>
          🤝 Рекомендуем партнера
        </h2>
        <div style={{ 
          background: 'linear-gradient(135deg, #4CAF50, #2E7D32)', 
          color: 'white',
          padding: '24px', 
          borderRadius: '12px',
          textAlign: 'center',
          marginBottom: '24px'
        }}>
          <h3 style={{ marginBottom: '16px', fontSize: '1.4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <PartnerLogo size={32} />
            Tashi-Ani.ru
          </h3>
          <p style={{ fontSize: '1.1rem', marginBottom: '20px', opacity: '0.9' }}>
            Более 15 лет опыта в ландшафтном строительстве
          </p>
          <div style={{ 
            background: 'rgba(255,255,255,0.2)', 
            padding: '16px', 
            borderRadius: '8px',
            marginBottom: '20px'
          }}>
            <p style={{ margin: '0 0 12px 0', fontSize: '1rem' }}>
              <strong>🌱 90% клиентов по рекомендациям</strong><br />
              <strong>🏗️ Решаем сложные задачи: перепады высот, затопление</strong><br />
              <strong>💼 Личный онлайн-кабинет заказчика</strong><br />
              <strong>🎯 От первого выезда до сдачи и сервиса</strong>
            </p>
          </div>
          <a href="https://tashi-ani.ru" target="_blank" rel="noopener noreferrer" style={{
            background: 'white',
            color: 'var(--primary-green)',
            padding: '12px 24px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            display: 'inline-block'
          }}>
            🌐 Посетить сайт tashi-ani.ru
          </a>
        </div>
      </div>

      <div className="card">
        <h2 style={{ color: 'var(--primary-green)', marginBottom: '24px', textAlign: 'center' }}>
          🙏 Спасибо за поддержку!
        </h2>
        <div style={{ 
          background: 'linear-gradient(135deg, #E8F5E8, #F1F8E9)', 
          padding: '24px', 
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '16px', color: 'var(--text-primary)' }}>
            Каждая поддержка, даже самая небольшая, помогает развивать проект и делать его лучше для всех пользователей.
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', margin: '0' }}>
            <strong>Спасибо, что делаете ландшафтное проектирование доступнее и удобнее! 🌱</strong>
          </p>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '48px' }}>
        <Link to="/download" className="btn btn-primary" style={{ marginRight: '16px' }}>
          📥 Скачать бесплатно
        </Link>
        <Link to="/docs" className="btn btn-secondary">
          📚 Документация
        </Link>
      </div>
    </div>
  )
}

export default Payment