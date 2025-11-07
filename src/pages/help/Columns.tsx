import PartnerLogo from '../../components/PartnerLogo'

function HelpColumns() {
  return (
    <div>
      <h1>Ориентация балок</h1>

      <div style={{ marginTop: '16px', marginBottom: '32px', textAlign: 'center' }}>
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
          <source src="/media/Beams/Orient-to-surface/preview.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>

        <div style={{ marginTop: '12px', fontSize: '0.9rem', color: '#666' }}>
          <p style={{ margin: '0 0 8px 0' }}>Видео не загружается? Откройте в Chrome, Firefox или Edge</p>
          <button
            onClick={() => {
              const videoUrl = window.location.origin + '/media/Beams/Orient-to-surface/preview.mp4';
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
      <p>Раздел «Ориентация балок» включает два инструмента: выравнивание балок по поверхности 3D-сетки и поворот на заданный угол. Поддерживаются только элементы типа «Балка».</p>

      <h2>🚀 Быстрый старт</h2>

      <div className="step">
        <h4>1. Ориентация по поверхности</h4>
        <p>Выделите балки, нажмите «Установить балки». Затем выделите Mesh рельефа и нажмите «Установить сетку». Кнопка «Ориентировать к поверхности» приведёт балки к касательной плоскости.</p>
      </div>

      <div className="step">
        <h4>2. Поворот на угол</h4>
        <p>Выделите балки, укажите угол в градусах (положительный — по часовой стрелке, отрицательный — против) и нажмите «Повернуть».</p>
      </div>

      <h2>💡 Советы</h2>
      <ul>
        <li>Комбинируйте ориентацию по Mesh и последующий поворот для тонкой настройки.</li>
        <li>Используйте дробные значения (например, 12.5°) для точного угла.</li>
        <li>Все операции поддерживают Undo/Redo — при необходимости отмените действие.</li>
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
          Если вы хотите перейти от модели к реальному объекту — мы возьмём на себя реализацию.
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
            <strong>🎯 От первого выезда до сдачи и сервиса</strong>
          </p>
        </div>
        <a
          href="https://tashi-ani.ru"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: 'white',
            color: 'var(--primary-green)',
            padding: '10px 20px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '0.95rem',
            display: 'inline-block'
          }}
        >
          🌐 Посетить tashi-ani.ru
        </a>
      </div>
    </div>
  )
}

export default HelpColumns

