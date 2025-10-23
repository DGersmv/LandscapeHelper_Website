import { Link } from 'react-router-dom'
import VideoCard from '../components/VideoCard'

function Examples() {
  const examples = [
    {
      title: 'Распределение',
      description: 'Автоматическое размещение объектов вдоль кривых с заданным шагом или количеством',
      videoPath: '/media/Distribution/Distribute-along-curve/preview.mp4',
      linkTo: '/help/distribution'
    },
    {
      title: 'Ориентация',
      description: 'Умная ориентация объектов относительно рельефа и других элементов',
      videoPath: '/media/Orientation/Rotate-by-angle/preview.mp4',
      linkTo: '/help/orientation'
    },
    {
      title: 'Приземление',
      description: 'Размещение объектов на поверхности рельефа с учетом уклона',
      videoPath: '/media/Ground/Land-on-mesh/preview.mp4',
      linkTo: '/help/ground'
    },
    {
      title: 'Разметка',
      description: 'Автоматическая простановка размеров и создание размерных цепочек',
      videoPath: '/media/Dimensions/Dimensions-by-direction/preview.mp4',
      linkTo: '/help/dimensions'
    },
    {
      title: 'GDL',
      description: 'Генерация GDL-кода из 2D-элементов для создания параметрических объектов',
      videoPath: '/media/GDL/GDL-from-2D/preview.mp4',
      linkTo: '/help/gdl'
    }
  ]

  return (
    <div className="container" style={{ padding: '80px 0' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '48px', fontSize: '2.5rem', color: 'var(--primary-green)' }}>
        Помощь
      </h1>
      
      <div className="functions-grid" style={{ marginBottom: '48px' }}>
        {examples.map((example, index) => (
          <VideoCard
            key={index}
            title={example.title}
            description={example.description}
            videoPath={example.videoPath}
            linkTo={example.linkTo}
          />
        ))}
      </div>

      <div className="card">
        <h2 style={{ color: 'var(--primary-green)', marginBottom: '24px' }}>Видео-уроки</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <div>
            <h4 style={{ marginBottom: '12px' }}>Базовый курс</h4>
            <div style={{ 
              background: 'var(--surface)', 
              height: '150px', 
              borderRadius: '8px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginBottom: '12px',
              color: 'var(--text-secondary)'
            }}>
              [Видео: Основы работы с плагином]
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>15 минут</p>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '12px' }}>Продвинутые техники</h4>
            <div style={{ 
              background: 'var(--surface)', 
              height: '150px', 
              borderRadius: '8px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginBottom: '12px',
              color: 'var(--text-secondary)'
            }}>
              [Видео: Сложные сценарии использования]
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>25 минут</p>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '12px' }}>Интеграция с GDL</h4>
            <div style={{ 
              background: 'var(--surface)', 
              height: '150px', 
              borderRadius: '8px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginBottom: '12px',
              color: 'var(--text-secondary)'
            }}>
              [Видео: Работа с GDL объектами]
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>20 минут</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 style={{ color: 'var(--primary-green)', marginBottom: '24px' }}>Практические сценарии</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <div>
            <h4 style={{ marginBottom: '12px', color: 'var(--primary-green)' }}>🌳 Ландшафтный дизайн</h4>
            <p style={{ marginBottom: '12px' }}>
              Создание естественных посадок деревьев и кустарников с учетом рельефа и зон
            </p>
            <ul style={{ paddingLeft: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li>Распределение по кривым</li>
              <li>Случайная ориентация</li>
              <li>Приземление на рельеф</li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '12px', color: 'var(--primary-green)' }}>🏛️ Городское планирование</h4>
            <p style={{ marginBottom: '12px' }}>
              Размещение уличной мебели, фонарей и элементов благоустройства
            </p>
            <ul style={{ paddingLeft: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li>Ориентация на точку</li>
              <li>Выравнивание по оси</li>
              <li>Автоматическая разметка</li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '12px', color: 'var(--primary-green)' }}>⚙️ Параметрическое моделирование</h4>
            <p style={{ marginBottom: '12px' }}>
              Создание GDL объектов и параметрических элементов
            </p>
            <ul style={{ paddingLeft: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li>GDL из 2D элементов</li>
              <li>Автоматическое масштабирование</li>
              <li>Параметрические объекты</li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '48px' }}>
        <Link to="/download" className="btn btn-primary">
          Скачать и попробовать
        </Link>
      </div>
    </div>
  )
}

export default Examples
