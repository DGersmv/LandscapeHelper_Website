
import PartnerLogo from '../../components/PartnerLogo'

function HelpGround() {
  return (
    <div>
      <h1>Приземление на рельеф</h1>
      
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
          <source src="/media/Ground/Land-on-mesh/preview.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
      </div>
      
      <h2>Описание</h2>
      <p>Инструмент выравнивает выбранные объекты по поверхности Mesh, автоматически определяя высоту каждой точки с учётом рельефа.</p>
      
      <h2>🚀 Быстрый старт</h2>
      
      <div className="step">
        <h4>Выберите 3D сетку и объекты</h4>
        <p>Выделите вместе 3D сетку (Mesh) и объекты, которые нужно разместить на рельефе (объекты, лампы, колонны).</p>
        <p>Можно выбрать несколько объектов одновременно.</p>
      </div>
      
      <div className="step">
        <h4>Примените приземление</h4>
        <p>Нажмите «Приземлить» — объекты автоматически установятся на поверхность сетки.</p>
        <p>Плагин сам определит высоту каждой точки с учётом рельефа.</p>
      </div>

      <h3>Смещение объектов</h3>
      <p>Дополнительная функция для точной настройки высоты объектов.</p>
      
      <div className="step">
        <h4>Выберите объекты для смещения</h4>
        <p>Выделите колонны, источники света или библиотечные объекты, которые нужно сместить по высоте.</p>
        <p>Можно выбрать несколько объектов одновременно.</p>
      </div>
      
      <div className="step">
        <h4>Задайте смещение</h4>
        <p>Введите значение смещения в миллиметрах (например, 500 — поднять на 50 см, -200 — опустить на 20 см).</p>
        <p>Положительное значение поднимает объекты, отрицательное — опускает.</p>
      </div>
      
      <div className="step">
        <h4>Примените смещение</h4>
        <p>Нажмите «Применить» — объекты изменят свою координату по Z на заданное количество миллиметров.</p>
      </div>

      <h2>⚙️ Поддерживаемые типы элементов</h2>
      <ul>
        <li><strong>Для приземления:</strong> Объекты, лампы, колонны</li>
        <li><strong>Для смещения:</strong> Колонны, источники света, библиотечные объекты</li>
      </ul>

      <h2>💡 Советы</h2>
      <ul>
        <li>Убедитесь, что 3D сетка имеет корректные уровни и полигоны.</li>
        <li>Можно выбрать множество объектов одновременно — они все приземлятся на сетку.</li>
        <li>Объекты автоматически выравниваются по поверхности с учётом рельефа.</li>
        <li>Поддерживается работа с различными типами объектов и светильников.</li>
        <li><strong>Для смещения:</strong> используйте положительные значения для подъема, отрицательные для опускания.</li>
        <li><strong>Точная настройка:</strong> смещение работает в миллиметрах для максимальной точности.</li>
        <li><strong>Групповое смещение:</strong> можно сместить множество объектов на одинаковую высоту.</li>
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
          Более 15 лет опыта в ландшафтном проектировании
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

export default HelpGround
