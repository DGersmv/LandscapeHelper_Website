
function HelpDistribution() {
  return (
    <div>
      <h1>🌿 Распределение объектов вдоль линий</h1>
      
      <h2>Описание</h2>
      <p>Инструмент автоматически размещает выбранный объект (например, дерево, фонарь или колонну) вдоль выбранных кривых — линий, дуг, полилиний или сплайнов.</p>
      <p>Распределение выполняется с учётом длины пути и заданного шага или количества элементов.</p>
      
      <h2>🚀 Быстрый старт</h2>
      
      <div className="step">
        <h4>Выберите путь</h4>
        <p>Выделите одну или несколько линий, полилиний, дуг или сплайнов, вдоль которых нужно выполнить размещение.</p>
        <p>Нажмите «Задать линию распределения».</p>
      </div>
      
      <div className="step">
        <h4>Выберите объект-прототип</h4>
        <p>Выделите любой объект, который будет использоваться для копирования (дерево, скамейка, светильник и т.п.).</p>
        <p>Нажмите «Задать объект распределения».</p>
      </div>
      
      <div className="step">
        <h4>Настройте параметры</h4>
        <p>В палитре LandscapeHelper задайте:</p>
        <ul>
          <li><strong>Шаг (в миллиметрах)</strong> — расстояние между копиями</li>
          <li><strong>или Количество</strong> — число экземпляров по всей длине пути</li>
        </ul>
      </div>
      
      <div className="step">
        <h4>Примените команду</h4>
        <p>Нажмите «ОК», чтобы создать копии вдоль всех выбранных путей.</p>
        <p>Поворот и ориентация объектов автоматически совпадает с направлением кривой.</p>
      </div>

      <h2>⚙️ Поддерживаемые типы путей</h2>
      <ul>
        <li>Прямая линия</li>
        <li>Дуга</li>
        <li>Круг</li>
        <li>Полилиния</li>
        <li>Сплайн (Bezier)</li>
      </ul>

      <h2>💡 Советы</h2>
      <ul>
        <li>Используйте сплайны для плавных аллей и дорожек.</li>
        <li>При слишком коротких отрезках лучше указывать количество, а не шаг.</li>
        <li>Один объект-прототип можно распределять сразу по нескольким линиям.</li>
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
          <span style={{ background: 'rgba(255,255,255,0.2)', padding: '8px 15px', borderRadius: '20px', fontSize: '14px' }}>
            📱 Телефон: +7 911 1260757
          </span>
        </div>
      </div>
    </div>
  )
}

export default HelpDistribution
