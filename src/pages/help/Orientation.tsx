
function HelpOrientation() {
  return (
    <div>
      <h1>Поворот и ориентация</h1>
      
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
          <span style={{ background: 'rgba(255,255,255,0.2)', padding: '8px 15px', borderRadius: '20px', fontSize: '14px' }}>
            📱 Телефон: +7 911 1260757
          </span>
        </div>
      </div>
    </div>
  )
}

export default HelpOrientation
