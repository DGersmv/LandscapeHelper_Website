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
            Простое руководство по установке LandscapeHelper в Archicad
          </p>
          <a href="#installation" className="btn btn-secondary">
            Читать
          </a>
        </div>
        
        <div className="card">
          <h3 style={{ color: 'var(--primary-green)', marginBottom: '16px' }}>Быстрый старт</h3>
          <p style={{ marginBottom: '16px' }}>
            Начните работу с плагином за 5 минут
          </p>
          <a href="#quick-start" className="btn btn-secondary">
            Читать
          </a>
        </div>
        
        <div className="card">
          <h3 style={{ color: 'var(--primary-green)', marginBottom: '16px' }}>Основные функции</h3>
          <p style={{ marginBottom: '16px' }}>
            Описание всех инструментов LandscapeHelper
          </p>
          <a href="#functions" className="btn btn-secondary">
            Читать
          </a>
        </div>
        
        <div className="card">
          <h3 style={{ color: 'var(--primary-green)', marginBottom: '16px' }}>FAQ</h3>
          <p style={{ marginBottom: '16px' }}>
            Часто задаваемые вопросы и ответы
          </p>
          <a href="#faq" className="btn btn-secondary">
            Читать
          </a>
        </div>
      </div>

      <div className="card">
        <h2 id="installation" style={{ color: 'var(--primary-green)', marginBottom: '24px' }}>Установка LandscapeHelper</h2>
        
        <p style={{ marginBottom: '24px', fontSize: '1.1rem' }}>
          Установка дополнения LandscapeHelper очень простая и занимает всего несколько минут. 
          Есть два способа установки:
        </p>

        <h3>🔧 Способ 1: Автоматическая установка (Рекомендуется)</h3>
        <div className="step">
          <h4>Шаг 1: Скачайте дополнение</h4>
          <p>Перейдите на страницу <Link to="/download" style={{ color: 'var(--primary-green)' }}>Скачать</Link> и скачайте файл LandscapeHelper_AC27.apx</p>
        </div>
        
        <div className="step">
          <h4>Шаг 2: Откройте Archicad 27</h4>
          <p>Запустите Archicad 27 и дождитесь полной загрузки программы.</p>
        </div>
        
        <div className="step">
          <h4>Шаг 3: Откройте Менеджер расширений</h4>
          <p>Перейдите в меню <strong>Параметры → Менеджер расширений</strong></p>
        </div>
        
        <div className="step">
          <h4>Шаг 4: Добавьте расширение</h4>
          <p>В секции "Редактирование списка имеющихся расширений" нажмите кнопку <strong>"Добавить"</strong></p>
          <p>Укажите путь к скачанному файлу LandscapeHelper_AC27.apx</p>
        </div>
        
        <div className="step">
          <h4>Шаг 5: Перезапустите Archicad</h4>
          <p>Закройте и снова откройте Archicad. Плагин LandscapeHelper появится в меню "Дополнения".</p>
        </div>

        <h3>📁 Способ 2: Ручная установка</h3>
        <div className="step">
          <h4>Шаг 1: Скачайте дополнение</h4>
          <p>Скачайте файл LandscapeHelper_AC27.apx со страницы <Link to="/download" style={{ color: 'var(--primary-green)' }}>Скачать</Link></p>
        </div>
        
        <div className="step">
          <h4>Шаг 2: Скопируйте файл</h4>
          <p>Скопируйте файл LandscapeHelper_AC27.apx в папку:</p>
          <code style={{ 
            display: 'block', 
            background: '#f5f5f5', 
            padding: '12px', 
            borderRadius: '4px', 
            margin: '8px 0',
            fontFamily: 'monospace'
          }}>
            C:\Program Files\Graphisoft\Archicad 27\Расширения Archicad
          </code>
        </div>
        
        <div className="step">
          <h4>Шаг 3: Перезапустите Archicad</h4>
          <p>Закройте и снова откройте Archicad. Плагин LandscapeHelper появится в меню "Дополнения".</p>
        </div>
      </div>

      <div className="card">
        <h2 id="quick-start" style={{ color: 'var(--primary-green)', marginBottom: '24px' }}>Быстрый старт</h2>
        
        <p style={{ marginBottom: '24px' }}>
          После установки LandscapeHelper готов к использованию! Вот как начать работу:
        </p>
        
        <div className="step">
          <h4>1. Найдите вкладку "Ландшафт"</h4>
          <p>После установки в меню Archicad появится новая вкладка <strong>"Ландшафт"</strong></p>
        </div>
        
        <div className="step">
          <h4>2. Откройте Smart-панель</h4>
          <p>Под вкладкой "Ландшафт" появится <strong>Smart-панель</strong> с доступом к инструментам</p>
        </div>
        
        <div className="step">
          <h4>3. Запустите "Помощник ландшафтного архитектора"</h4>
          <p>В Smart-панели найдите ссылку на <strong>"Помощник ландшафтного архитектора"</strong> - это и есть LandscapeHelper</p>
        </div>
        
        <div className="step">
          <h4>4. Выберите инструмент</h4>
          <p>В палитре LandscapeHelper доступны все основные функции:</p>
          <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
            <li><strong>Таблица выделения</strong> - просмотр и изменение ID объектов</li>
            <li><strong>Распределение</strong> - размещение объектов вдоль линий</li>
            <li><strong>Приземление</strong> - выравнивание объектов по рельефу</li>
            <li><strong>Поворот</strong> - ориентация объектов</li>
          </ul>
        </div>
        
        <div className="step">
          <h4>5. Начните с простого</h4>
          <p>Попробуйте сначала <strong>Таблицу выделения</strong> - выделите несколько объектов и посмотрите, как отображается информация о них.</p>
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
        <Link to="/help/selection" className="btn btn-outline" style={{ marginTop: '8px' }}>
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
        
        <h3>🏔️ Приземление на рельеф</h3>
        <p>Автоматическое выравнивание объектов по поверхности Mesh с учётом рельефа местности.</p>
        <ul style={{ marginBottom: '16px', paddingLeft: '20px' }}>
          <li><strong>Приземление объектов</strong> - автоматическое размещение на поверхности</li>
          <li><strong>Смещение по высоте</strong> - точная настройка высоты объектов</li>
        </ul>
        <Link to="/help/ground" className="btn btn-outline" style={{ marginTop: '8px' }}>
          Подробнее
        </Link>
        
        <h3>🔄 Поворот и ориентация</h3>
        <p>Управление ориентацией объектов: поворот, выравнивание, случайная ориентация.</p>
        <ul style={{ marginBottom: '16px', paddingLeft: '20px' }}>
          <li><strong>Поворот на угол</strong> - задание точного угла поворота</li>
          <li><strong>Случайный поворот</strong> - естественная ориентация для растений</li>
          <li><strong>Ориентация на точку</strong> - направление объектов к заданной точке</li>
        </ul>
        <Link to="/help/orientation" className="btn btn-outline" style={{ marginTop: '8px' }}>
          Подробнее
        </Link>
        
      </div>

      <div className="card">
        <h2 id="faq" style={{ color: 'var(--primary-green)', marginBottom: '24px' }}>Часто задаваемые вопросы</h2>
        
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>Q: Совместим ли LandscapeHelper с другими версиями Archicad?</h4>
          <p>LandscapeHelper разработан для Archicad 27. Для других версий Archicad (25, 26) совместимость не гарантируется.</p>
        </div>
        
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>Q: Можно ли использовать плагин на macOS?</h4>
          <p>Версия для macOS находится в разработке. Следите за обновлениями на сайте.</p>
        </div>
        
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>Q: Что делать, если плагин не появляется в меню?</h4>
          <p>Убедитесь, что файл скопирован в правильную папку и перезапустите Archicad. Проверьте, что файл не поврежден.</p>
        </div>
        
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>Q: Можно ли удалить плагин?</h4>
          <p>Да, просто удалите файл LandscapeHelper_AC27.apx из папки расширений и перезапустите Archicad.</p>
        </div>
        
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>Q: Плагин замедляет работу Archicad?</h4>
          <p>LandscapeHelper оптимизирован для быстрой работы и не должен влиять на производительность Archicad.</p>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '48px' }}>
        <Link to="/download" className="btn btn-primary" style={{ marginRight: '16px' }}>
          Скачать LandscapeHelper
        </Link>
        <Link to="/examples" className="btn btn-secondary">
          Примеры использования
        </Link>
      </div>
    </div>
  )
}

export default Docs