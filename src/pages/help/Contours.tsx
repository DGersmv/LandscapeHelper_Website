import PartnerLogo from '../../components/PartnerLogo'

function HelpContours() {
  return (
    <div>
      <h1>Контуры из линии</h1>

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
          <source src="/media/Contours/Create-contours/preview.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>

        <div style={{ marginTop: '12px', fontSize: '0.9rem', color: '#666' }}>
          <p style={{ margin: '0 0 8px 0' }}>Видео не загружается? Откройте в Chrome, Firefox или Edge</p>
          <button
            onClick={() => {
              const videoUrl = window.location.origin + '/media/Contours/Create-contours/preview.mp4';
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
      <p>Инструмент строит два параллельных контура по выбранной линии. Для сплайнов учитывается заданный шаг, для остальных геометрий — только ширина. Контуры автоматически замыкаются, поэтому можно работать как с открытыми, так и с замкнутыми траекториями.</p>

      <h2>🚀 Быстрый старт</h2>

      <div className="step">
        <h4>1. Выберите базовую линию</h4>
        <p>Нажмите «Выбрать линию» и отметьте на плане сплайн, полилинию, дугу или прямую.</p>
      </div>

      <div className="step">
        <h4>2. Задайте параметры</h4>
        <p>Введите ширину (расстояние от базовой линии до контуров). Для сплайнов также задайте шаг — интервал выборки точек.</p>
      </div>

      <div className="step">
        <h4>3. Создайте контуры</h4>
        <p>Нажмите «Создать контуры». Плагин построит левый и правый контур, а для открытых линий автоматически добавит замыкание.</p>
      </div>

      <h2>💡 Советы</h2>
      <ul>
        <li>Для плавных дорожек используйте сплайны со шагом 200–500 мм.</li>
        <li>Для прямых отрезков достаточно полилинии с только шириной.</li>
        <li>Контуры формируются из сплайнов — их легко редактировать после построения.</li>
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

export default HelpContours
