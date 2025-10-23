import { Link } from 'react-router-dom'

function Download() {
  return (
    <div className="container" style={{ padding: '80px 0' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '48px', fontSize: '2.5rem', color: 'var(--primary-green)' }}>
        Скачать LandscapeHelper
      </h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '48px' }}>
        <div className="card" style={{ border: '2px solid var(--primary-green)' }}>
          <div style={{ background: 'var(--primary-green)', color: 'white', padding: '8px 12px', borderRadius: '4px', marginBottom: '16px', textAlign: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>
            ✅ ГОТОВО К СКАЧИВАНИЮ
          </div>
          <h3 style={{ color: 'var(--primary-green)', marginBottom: '16px' }}>Windows (Русская версия)</h3>
          <p style={{ marginBottom: '24px', color: 'var(--text-secondary)' }}>
            Файл дополнения для Archicad 27 на Windows 10/11
          </p>
          <div style={{ marginBottom: '16px' }}>
            <strong>Тип:</strong> Файл дополнения (.apx)<br />
            <strong>Размер:</strong> 15.2 MB<br />
            <strong>Версия:</strong> 1.0.0 (RUS)<br />
            <strong>Дата:</strong> 22.10.2025<br />
            <strong>Язык:</strong> Русский<br />
            <strong>Archicad:</strong> 27
          </div>
          <a href="/download/LandscapeHelper_AC27.apx" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
            📥 Скачать дополнение
          </a>
        </div>
        
        <div className="card">
          <h3 style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>macOS</h3>
          <p style={{ marginBottom: '24px', color: 'var(--text-secondary)' }}>
            Версия для macOS 11+, совместимая с Archicad 25-27
          </p>
          <div style={{ marginBottom: '16px' }}>
            <strong>Размер:</strong> 18.7 MB<br />
            <strong>Версия:</strong> 1.0.0<br />
            <strong>Дата:</strong> 22.10.2025<br />
            <strong>Статус:</strong> В разработке
          </div>
          <button className="btn btn-secondary" style={{ width: '100%', textAlign: 'center', opacity: '0.6', cursor: 'not-allowed' }}>
            Скоро будет доступно
          </button>
        </div>
      </div>

      <div className="card">
        <h2 style={{ color: 'var(--primary-green)', marginBottom: '24px' }}>Системные требования</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          <div>
            <h4 style={{ marginBottom: '12px' }}>Windows</h4>
            <ul style={{ paddingLeft: '20px' }}>
              <li>Windows 10/11 (64-bit)</li>
              <li>Archicad 25, 26 или 27</li>
              <li>4 GB RAM (рекомендуется 8 GB)</li>
              <li>500 MB свободного места</li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '12px' }}>macOS</h4>
            <ul style={{ paddingLeft: '20px' }}>
              <li>macOS 11.0 или новее</li>
              <li>Archicad 25, 26 или 27</li>
              <li>4 GB RAM (рекомендуется 8 GB)</li>
              <li>500 MB свободного места</li>
            </ul>
          </div>
        </div>
      </div>


      <div className="card">
        <h2 style={{ color: 'var(--primary-green)', marginBottom: '24px' }}>Инструкция по установке</h2>
        
        <h3>👤 Инструкция по установке:</h3>
        <ol style={{ paddingLeft: '20px' }}>
          <li style={{ marginBottom: '12px' }}>Скачайте файл дополнения (.apx)</li>
          <li style={{ marginBottom: '12px' }}>Откройте Archicad 27</li>
          <li style={{ marginBottom: '12px' }}>Перейдите в меню <strong>Дополнения → Управление дополнениями</strong></li>
          <li style={{ marginBottom: '12px' }}>Нажмите <strong>"Установить дополнение"</strong></li>
          <li style={{ marginBottom: '12px' }}>Выберите скачанный файл .apx</li>
          <li>Перезапустите Archicad</li>
        </ol>
      </div>

      <div className="card">
        <h2 style={{ color: 'var(--primary-green)', marginBottom: '24px' }}>История изменений</h2>
        <div style={{ marginBottom: '16px' }}>
          <h4 style={{ color: 'var(--text-primary)' }}>Версия 1.0.0 (22.10.2025)</h4>
          <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
            <li>Первоначальный релиз</li>
            <li>Автоматическое распределение растений</li>
            <li>Поворот и ориентация объектов по рельефу</li>
            <li>Приземление элементов на поверхность</li>
            <li>GDL интеграция и параметрические объекты</li>
          </ul>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '48px' }}>
        <Link to="/docs" className="btn btn-secondary">
          Документация по установке
        </Link>
      </div>
    </div>
  )
}

export default Download
