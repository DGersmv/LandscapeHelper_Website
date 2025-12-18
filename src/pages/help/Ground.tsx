
import PartnerLogo from '../../components/PartnerLogo'

function HelpGround() {
  return (
    <div>
      <h1>Приземление на рельеф</h1>

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
          <source src="/media/Ground/Land-on-mesh/preview.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>

        <div style={{ marginTop: '12px', fontSize: '0.9rem', color: '#666' }}>
          <p style={{ margin: '0 0 8px 0' }}>Видео не загружается? Откройте в Chrome, Firefox или Edge</p>
          <button
            onClick={() => {
              const videoUrl = window.location.origin + '/media/Ground/Land-on-mesh/preview.mp4';
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
      <p>Раздел «Приземление» помогает быстро расположить объекты на поверхности рельефа или сместить их по высоте. Можно сместить выделенные элементы на фиксированное значение по оси Z или автоматически привязать их к выбранной Mesh.</p>

      <h2>🚀 Быстрый старт</h2>

      <div className="step">
        <h4>Смещение по Z</h4>
        <p>Выберите элементы, введите смещение в миллиметрах и нажмите «Применить». Положительные значения поднимают объекты, отрицательные — опускают.</p>
      </div>

      <div className="step">
        <h4>Привязка к Mesh</h4>
        <p>Выделите Mesh и элементы, нажмите «Приземлить». Плагин определит высоту каждого объекта с учётом рельефа.</p>
      </div>

      <div className="step">
        <h4>Комбинирование</h4>
        <p>Можно сначала привязать элементы к Mesh, а затем дотянуть их по высоте с помощью смещения.</p>
      </div>

      <h2>⚙️ Поддерживаемые элементы</h2>
      <ul>
        <li>Объекты</li>
        <li>Лампы</li>
        <li>Колонны</li>
        <li>Балки</li>
      </ul>

      <h2>💡 Советы</h2>
      <ul>
        <li>Перед привязкой к Mesh проверьте, что сетка рельефа имеет корректные уровни.</li>
        <li>Для групп объектов применяйте смещение по Z — изменения будут одинаковыми для всех элементов.</li>
        <li>После привязки можно переключиться на распределение и ориентацию для точной раскладки.</li>
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

export default HelpGround
