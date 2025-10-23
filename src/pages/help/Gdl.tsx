
function HelpGdl() {
  return (
    <div>
      <h1>Генерация GDL-кода</h1>
      
      <h2>Описание</h2>
      <p>Инструмент преобразует выбранные 2D-элементы (линии, дуги, полилинии, штриховки) в готовый GDL-код, который можно вставить в редактор объекта.</p>
      
      <h2>🚀 Быстрый старт</h2>
      
      <div className="step">
        <h4>Выделите элементы</h4>
        <p>Отметьте линии, дуги, полилинии, сплайны или штриховки.</p>
      </div>
      
      <div className="step">
        <h4>Сгенерируйте код</h4>
        <p>Нажмите «Создать GDL из выделения» — плагин создаст текст GDL-скрипта с координатами и размерами элементов.</p>
      </div>
      
      <div className="step">
        <h4>Скопируйте результат</h4>
        <p>Вставьте код в 2D-скрипт вашего GDL-объекта. Масштабирование выполняется автоматически по параметрам A и B.</p>
      </div>

      <h2>⚙️ Поддерживаемые элементы</h2>
      <ul>
        <li>Линии</li>
        <li>Дуги</li>
        <li>Круги</li>
        <li>Полилинии</li>
        <li>Сплайны</li>
        <li>Штриховки</li>
      </ul>

      <h2>💡 Советы</h2>
      <ul>
        <li>Центр выделения становится точкой (0, 0) в GDL-объекте.</li>
        <li>Поддерживается автоматическое масштабирование через MUL2.</li>
        <li>Используйте этот инструмент для быстрого создания 2D-символов объектов.</li>
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

export default HelpGdl
