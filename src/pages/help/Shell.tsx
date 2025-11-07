import PartnerLogo from '../../components/PartnerLogo'

function HelpShell() {
  return (
    <div>
      <h1>Контуры: оболочка по линии</h1>

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
          <source src="/media/Shell/Contours-from-line/preview.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>

        <div style={{ marginTop: '12px', fontSize: '0.9rem', color: '#666' }}>
          <p style={{ margin: '0 0 8px 0' }}>Видео не загружается? Откройте в Chrome, Firefox или Edge</p>
          <button
            onClick={() => {
              const videoUrl = window.location.origin + '/media/Shell/Contours-from-line/preview.mp4';
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
      <p>Функция строит оболочку (Shell) на основе базовой линии. Можно задать ширину и шаг для формирования боковых контуров, а также указать смещение по высоте.</p>

      <h2>🚀 Быстрый старт</h2>

      <div className="step">
        <h4>1. Выберите линию</h4>
        <p>Отметьте сплайн, полилинию, дугу или прямую и нажмите «Выбрать линию».</p>
      </div>

      <div className="step">
        <h4>2. Настройте параметры</h4>
        <p>Введите ширину и шаг (для сплайнов). При необходимости задайте смещение по Z.</p>
      </div>

      <div className="step">
        <h4>3. Создайте оболочку</h4>
        <p>Нажмите «Создать оболочку». Плагин построит Shell с боковыми контурами и применит смещение.</p>
      </div>

      <h2>💡 Советы</h2>
      <ul>
        <li>Используйте для создания бордюров и дорожек со сложной геометрией.</li>
        <li>После построения можно редактировать оболочку стандартными инструментами Archicad.</li>
        <li>Если нужна только линия — используйте раздел «Контуры».</li>
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

export default HelpShell

