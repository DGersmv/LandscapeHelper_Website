import PartnerLogo from '../../components/PartnerLogo'

function HelpSelection() {
  return (
    <div>
      <h1>📋 Таблица выделения</h1>
      
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
          <source src="/media/Selection/View-selected-elements/preview.mp4" type="video/mp4" />
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
              const videoUrl = window.location.origin + '/media/Selection/View-selected-elements/preview.mp4';
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
      <p>Инструмент для контроля и проверки выделенных элементов перед выполнением операций. Показывает тип, ID и количество выбранных объектов, а также позволяет массово изменять их идентификаторы.</p>
      
      <h2>🚀 Быстрый старт</h2>
      
      <div className="step">
        <h4>Просмотр выбранных элементов</h4>
        <p>Таблица выделения всегда отображается наверху плагина. Выделите объекты в проекте и вы увидите:</p>
        <ul>
          <li>Тип каждого объекта</li>
          <li>Текущий ID объекта</li>
          <li>Общее количество выделенных элементов</li>
        </ul>
        <p>Это помогает проверить правильность выделения перед выполнением операций.</p>
      </div>
      
      <div className="step">
        <h4>Изменение ID выделенных объектов</h4>
        <p>Мощная функция для массового переименования ID всех выделенных объектов:</p>
        <ol>
          <li>Выделите объекты, которые нужно переименовать</li>
          <li>В поле "Новый ID" введите желаемое название (например, "Сосна обыкновенная")</li>
          <li>Нажмите "Изменить ID"</li>
        </ol>
        <p>Плагин автоматически переименует все объекты по схеме:</p>
        <ul>
          <li>Сосна обыкновенная - 01</li>
          <li>Сосна обыкновенная - 02</li>
          <li>Сосна обыкновенная - 03</li>
          <li>И так далее...</li>
        </ul>
      </div>

      <h2>💡 Практические примеры</h2>
      
      <div className="step">
        <h4>Пример 1: Переименование деревьев</h4>
        <p>Выделите все деревья одного типа и переименуйте их в "Дуб черешчатый". Все деревья получат ID: "Дуб черешчатый - 01", "Дуб черешчатый - 02" и т.д.</p>
      </div>
      
      <div className="step">
        <h4>Пример 2: Группировка светильников</h4>
        <p>Выделите все уличные фонари и переименуйте их в "Фонарь уличный". Получите упорядоченные ID: "Фонарь уличный - 01", "Фонарь уличный - 02" и т.д.</p>
      </div>
      
      <div className="step">
        <h4>Пример 3: Организация колонн</h4>
        <p>Выделите все колонны и переименуйте их в "Колонна декоративная". Все колонны получат последовательные номера.</p>
      </div>

      <h2>⚙️ Поддерживаемые типы объектов</h2>
      <ul>
        <li>Объекты (Objects)</li>
        <li>Лампы (Lamps)</li>
        <li>Колонны (Columns)</li>
        <li>Библиотечные элементы</li>
      </ul>

      <h2>💡 Советы</h2>
      <ul>
        <li>Используйте осмысленные названия для ID - это упростит работу с проектом</li>
        <li>Проверяйте выделение перед массовыми операциями</li>
        <li>Функция изменения ID работает только с выделенными объектами</li>
        <li>Нумерация начинается с 01 и идет по порядку выделения</li>
      </ul>

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

export default HelpSelection
