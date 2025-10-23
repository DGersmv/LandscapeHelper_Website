import { Link } from 'react-router-dom'

function Docs() {
  return (
    <div className="container" style={{ padding: '80px 0' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '48px', fontSize: '2.5rem', color: 'var(--primary-green)' }}>
        Документация
      </h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '48px' }}>
        <div className="card">
          <h3 style={{ color: 'var(--primary-green)', marginBottom: '16px' }}>Установка</h3>
          <p style={{ marginBottom: '16px' }}>
            Подробное руководство по установке LandscapeHelper в Archicad
          </p>
          <Link to="/docs#installation" className="btn btn-secondary">
            Читать
          </Link>
        </div>
        
        <div className="card">
          <h3 style={{ color: 'var(--primary-green)', marginBottom: '16px' }}>Быстрый старт</h3>
          <p style={{ marginBottom: '16px' }}>
            Начните работу с плагином за 5 минут
          </p>
          <Link to="/docs#quick-start" className="btn btn-secondary">
            Читать
          </Link>
        </div>
        
        <div className="card">
          <h3 style={{ color: 'var(--primary-green)', marginBottom: '16px' }}>Основные функции</h3>
          <p style={{ marginBottom: '16px' }}>
            Описание всех инструментов LandscapeHelper
          </p>
          <Link to="/docs#functions" className="btn btn-secondary">
            Читать
          </Link>
        </div>
        
        <div className="card">
          <h3 style={{ color: 'var(--primary-green)', marginBottom: '16px' }}>FAQ</h3>
          <p style={{ marginBottom: '16px' }}>
            Часто задаваемые вопросы и решения проблем
          </p>
          <Link to="/docs#faq" className="btn btn-secondary">
            Читать
          </Link>
        </div>
      </div>

      <div className="card">
        <h2 id="installation" style={{ color: 'var(--primary-green)', marginBottom: '24px' }}>Установка</h2>
        <div className="step">
          <h4>Шаг 1: Скачайте установщик</h4>
          <p>Перейдите на страницу <Link to="/download">скачивания</Link> и выберите версию для вашей операционной системы.</p>
        </div>
        
        <div className="step">
          <h4>Шаг 2: Закройте Archicad</h4>
          <p>Убедитесь, что Archicad полностью закрыт перед установкой плагина.</p>
        </div>
        
        <div className="step">
          <h4>Шаг 3: Запустите установщик</h4>
          <p>Запустите скачанный файл установки и следуйте инструкциям мастера установки.</p>
        </div>
        
        <div className="step">
          <h4>Шаг 4: Перезапустите Archicad</h4>
          <p>Откройте Archicad. Плагин LandscapeHelper должен появиться в меню "Дополнения".</p>
        </div>
      </div>

      <div className="card">
        <h2 id="functions" style={{ color: 'var(--primary-green)', marginBottom: '24px' }}>Основные функции</h2>
        
        <h3>📋 Таблица выделения</h3>
        <p>Контроль и проверка выделенных элементов перед выполнением операций. Показывает тип, ID и количество выбранных объектов.</p>
        <ul style={{ marginBottom: '16px', paddingLeft: '20px' }}>
          <li><strong>Просмотр выбранных элементов</strong> - показывает тип, ID и количество; помогает проверить выделение</li>
          <li><strong>Изменение ID выделенных объектов</strong> - массовое переименование ID всех выделенных объектов по схеме: "НовыйID - 01", "НовыйID - 02" и т.д.</li>
        </ul>
        <Link to="/help/distribution" className="btn btn-outline" style={{ marginTop: '8px' }}>
          Подробнее
        </Link>
        
        <h3>🌱 Распределение</h3>
        <p>Автоматическое размещение выбранного объекта вдоль выбранных кривых. Поддерживает два режима: с заданным шагом или с заданным количеством объектов.</p>
        <ul style={{ marginBottom: '16px', paddingLeft: '20px' }}>
          <li><strong>Распределение с шагом</strong> - размещает объекты с заданным интервалом между ними</li>
          <li><strong>Распределение по количеству</strong> - размещает заданное количество объектов равномерно вдоль траектории</li>
        </ul>
        <Link to="/help/distribution" className="btn btn-outline" style={{ marginTop: '8px' }}>
          Подробнее
        </Link>
        
        <h3>🧭 Ориентация</h3>
        <p>Выполняет поворот, выравнивание или случайную ориентацию выделенных объектов, ламп и колонн. Доступны команды поворота, выравнивания по оси X, случайного поворота и ориентации на точку.</p>
        <ul style={{ marginBottom: '16px', paddingLeft: '20px' }}>
          <li><strong>Поворот на угол</strong> - поворачивает элементы на заданное значение в градусах</li>
          <li><strong>Выровнять по оси X</strong> - выставляет все элементы под углом 0° к глобальной оси X</li>
          <li><strong>Случайная ориентация</strong> - задаёт каждому элементу случайный угол 0–360°</li>
          <li><strong>Ориентация на точку</strong> - разворачивает элементы в сторону выбранной точки</li>
        </ul>
        <Link to="/help/orientation" className="btn btn-outline" style={{ marginTop: '8px' }}>
          Подробнее
        </Link>
        
        <h3>🏔️ Приземление</h3>
        <p>Выравнивает выбранные объекты по поверхности Mesh, автоматически определяя высоту каждой точки с учётом рельефа. Поддерживает объекты, лампы и колонны.</p>
        <ul style={{ marginBottom: '16px', paddingLeft: '20px' }}>
          <li><strong>Смещение по Z (Применить)</strong> - поднимает/опускает элементы на указанное значение</li>
          <li><strong>Посадка на Mesh (Приземлить)</strong> - подбирает высоту каждого объекта по выбранной 3D-сети</li>
        </ul>
        <Link to="/help/ground" className="btn btn-outline" style={{ marginTop: '8px' }}>
          Подробнее
        </Link>
        
        <h3>📏 Разметка</h3>
        <p>Автоматическая простановка размеров для точного проектирования. Поддерживает различные режимы разметки с заданным шагом и направлением.</p>
        <ul style={{ marginBottom: '16px', paddingLeft: '20px' }}>
          <li><strong>Размеры по направлению с шагом</strong> - ставит цепочку размеров строго по заданному шагу</li>
          <li><strong>Размеры от объектов до линии</strong> - проставляет размеры от точек привязки до заданной линии</li>
        </ul>
        <Link to="/help/dimensions" className="btn btn-outline" style={{ marginTop: '8px' }}>
          Подробнее
        </Link>
        
        <h3>⚙️ GDL</h3>
        <p>Преобразует выбранные 2D-элементы (линии, дуги, полилинии, штриховки) в готовый GDL-код для вставки в редактор объекта. Поддерживает автоматическое масштабирование через MUL2.</p>
        <ul style={{ marginBottom: '16px', paddingLeft: '20px' }}>
          <li><strong>GDL из выделения 2D</strong> - формирует GDL-код из выбранных 2D-элементов</li>
        </ul>
        <Link to="/help/gdl" className="btn btn-outline" style={{ marginTop: '8px' }}>
          Подробнее
        </Link>
      </div>

      <div className="card">
        <h2 id="quick-start" style={{ color: 'var(--primary-green)', marginBottom: '24px' }}>Быстрый старт</h2>
        <h3>Открытие палитры</h3>
        <p>После установки плагина откройте палитру LandscapeHelper через меню:</p>
        <div className="code-block">
          Дополнения → LandscapeHelper → Открыть палитру
        </div>
        
        <h3>Горячие клавиши</h3>
        <ul>
          <li><strong>Ctrl+Shift+L</strong> - Открыть палитру LandscapeHelper</li>
          <li><strong>F1</strong> - Справка по текущей вкладке</li>
          <li><strong>Esc</strong> - Закрыть палитру</li>
        </ul>
        
        <h3>Первые шаги</h3>
        <ol>
          <li>Откройте проект с рельефом и объектами</li>
          <li>Проверьте выделение с помощью <strong>"Просмотр выбранных элементов"</strong></li>
          <li>Используйте <strong>"Распределение"</strong> для размещения элементов вдоль линий (с шагом или по количеству)</li>
          <li>Примените <strong>"Поворот на угол"</strong> или <strong>"Случайную ориентацию"</strong> для настройки направления объектов</li>
          <li>Используйте <strong>"Посадка на Mesh"</strong> для выравнивания по поверхности рельефа</li>
          <li>Примените <strong>"Размеры по направлению с шагом"</strong> для автоматической разметки</li>
          <li>Генерируйте GDL-код из 2D-элементов с помощью <strong>"GDL из выделения 2D"</strong></li>
          <li>Проверяйте выделение с помощью <strong>"Просмотр выбранных элементов"</strong></li>
        </ol>
      </div>

      <div className="card">
        <h2 id="faq" style={{ color: 'var(--primary-green)', marginBottom: '24px' }}>Часто задаваемые вопросы</h2>
        
        <h3>Плагин не появляется в меню Archicad</h3>
        <p>Убедитесь, что:</p>
        <ul>
          <li>Archicad полностью закрыт во время установки</li>
          <li>У вас есть права администратора</li>
          <li>Версия Archicad поддерживается (25-27)</li>
        </ul>
        
        <h3>Ошибка "Плагин не загружен"</h3>
        <p>Попробуйте:</p>
        <ul>
          <li>Перезапустить Archicad</li>
          <li>Проверить антивирус (добавить исключение)</li>
          <li>Переустановить плагин</li>
        </ul>
        
        <h3>Плагин работает медленно</h3>
        <p>Для улучшения производительности:</p>
        <ul>
          <li>Уменьшите количество объектов в сцене</li>
          <li>Используйте упрощенные модели растений</li>
          <li>Закройте другие приложения</li>
        </ul>
        
        <h3>Как обновить плагин?</h3>
        <p>Скачайте новую версию с сайта и запустите установщик. Старая версия будет автоматически заменена.</p>
      </div>

      <div className="card">
        <h2 style={{ color: 'var(--primary-green)', marginBottom: '24px' }}>Команды ACAPI</h2>
        <p>LandscapeHelper использует следующие команды Archicad API:</p>
        <div className="code-block">
          // Основные команды
          ACAPI_Element_GetElementType
          ACAPI_Element_GetElementInfo
          ACAPI_Element_ChangeElement
          ACAPI_Element_CreateElement
          
          // Работа с рельефом
          ACAPI_Element_GetMorphInfo
          ACAPI_Element_ChangeMorph
          
          // Параметры объектов
          ACAPI_Element_GetParams
          ACAPI_Element_SetParams
        </div>
        <p>Полный список команд доступен в <Link to="/docs#api-reference">справочнике API</Link>.</p>
      </div>

      <div style={{ textAlign: 'center', marginTop: '48px' }}>
        <Link to="/examples" className="btn btn-primary">
          Получить помощь
        </Link>
      </div>
    </div>
  )
}

export default Docs
