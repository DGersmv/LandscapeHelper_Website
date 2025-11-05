
import PartnerLogo from '../../components/PartnerLogo'

function HelpOrientation() {
  return (
    <div>
      <h1>Поворот и ориентация</h1>
      
      <div style={{ 
        marginTop: '16px',
        marginBottom: '32px',
        textAlign: 'center'
      }}>
        <video
          controls
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            maxWidth: '800px',
            height: 'auto',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
          }}
        >
          <source src="/media/Orientation/Rotate-by-angle/preview.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
        
        <div style={{ 
          marginTop: '12px',
          fontSize: '0.9rem',
          color: '#666'
        }}>
          <p style={{ margin: '0 0 8px 0' }}>
            Видео не загружается? Откройте в Chrome, Firefox или Edge
          </p>
          <button 
            onClick={() => {
              const videoUrl = window.location.origin + '/media/Orientation/Rotate-by-angle/preview.mp4';
              navigator.clipboard.writeText(videoUrl).then(() => {
                alert('Ссылка на видео скопирована!');
              });
            }}
            style={{
              background: 'var(--primary-green)',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: 'bold'
            }}
          >
            📋 Скопировать ссылку на видео
          </button>
        </div>
      </div>
      
      <h2>Описание</h2>
      <p>Инструмент выполняет поворот, выравнивание или случайную ориентацию выделенных объектов, ламп и колонн.</p>
      
      <h2>🚀 Быстрый старт</h2>
      
      <div className="step">
        <h4>Выберите элементы</h4>
        <p>Отметьте объекты, которые нужно повернуть или выровнять.</p>
      </div>
      
      <div className="step">
        <h4>Выберите действие</h4>
        <p>В палитре RotateHelper доступны команды:</p>
        <ul>
          <li><strong>Повернуть</strong> — задать угол в градусах</li>
          <li><strong>Выравнять по оси X</strong> — сбросить угол к нулю</li>
          <li><strong>Случайный поворот</strong> — задать случайную ориентацию для каждого объекта</li>
          <li><strong>Ориентировать на точку</strong> — выбрать точку, на которую будут «смотреть» все объекты</li>
        </ul>
      </div>

      <h2>⚙️ Поддерживаемые типы</h2>
      <ul>
        <li>Объекты</li>
        <li>Лампы</li>
        <li>Колонны</li>
      </ul>

      <h2>💡 Советы</h2>
      <ul>
        <li>Команда «Ориентировать на точку» удобна для расстановки светильников или камер вдоль дорожек.</li>
        <li>Для деревьев и растений используйте «Случайный поворот» для более естественного вида.</li>
      </ul>

      <div style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
        color: 'white', 
        padding: '20px', 
        borderRadius: '10px', 
        marginTop: '30px',
        textAlign: 'center'
      }}>
        <h3 style={{ margin: '0 0 15px 0', color: 'white' }}>💝 Поддержите автора!</h3>
        <p style={{ margin: '0 0 15px 0', fontSize: '16px' }}>
          LandscapeHelper — плагин для автоматизации ландшафтного проектирования в ArchiCAD
        </p>
        <p style={{ margin: '0 0 15px 0', fontSize: '14px', opacity: '0.9' }}>
          Ваша поддержка поможет развивать плагин и добавлять новые функции
        </p>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <span style={{ background: 'rgba(255,255,255,0.2)', padding: '8px 15px', borderRadius: '20px', fontSize: '14px' }}>
            💰 ЮMoney: 2204120104235425
          </span>
          <span style={{ background: 'rgba(255,255,255,0.2)', padding: '8px 15px', borderRadius: '20px', fontSize: '14px' }}>
            💳 Сбер: 2202 2061 3405 0090
          </span>
          <span style={{ background: 'rgba(255,255,255,0.2)', padding: '8px 15px', borderRadius: '20px', fontSize: '14px' }}>
            🏦 Альфа: 2200 1539 7984 4579
          </span>
        </div>
      </div>

      <div style={{ 
        background: 'linear-gradient(135deg, #4CAF50, #2E7D32)', 
        color: 'white', 
        padding: '20px', 
        borderRadius: '12px',
        marginTop: '32px',
        textAlign: 'center'
      }}>
        <h3 style={{ marginBottom: '12px', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <PartnerLogo size={20} />
          Нужен ландшафтный проект?
        </h3>
        <p style={{ marginBottom: '16px', fontSize: '1rem', opacity: '0.9' }}>
          Более 15 лет опыта в ландшафтном строительстве
        </p>
        <div style={{ 
          background: 'rgba(255,255,255,0.2)', 
          padding: '12px', 
          borderRadius: '8px',
          marginBottom: '16px'
        }}>
          <p style={{ margin: '0', fontSize: '0.95rem' }}>
            <strong>🌱 90% клиентов по рекомендациям</strong><br />
            <strong>🏗️ Решаем сложные задачи: перепады высот, затопление</strong><br />
            <strong>💼 Личный онлайн-кабинет заказчика</strong>
          </p>
        </div>
        <a href="https://tashi-ani.ru" target="_blank" rel="noopener noreferrer" style={{
          background: 'white',
          color: 'var(--primary-green)',
          padding: '10px 20px',
          borderRadius: '6px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '0.95rem',
          display: 'inline-block'
        }}>
          🌐 Посетить tashi-ani.ru
        </a>
      </div>
    </div>
  )
}

export default HelpOrientation
