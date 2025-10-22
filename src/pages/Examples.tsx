import { Link } from 'react-router-dom'
import VideoCard from '../components/VideoCard'

function Examples() {
  const examples = [
    {
      title: 'Просмотр выбранных элементов',
      description: 'Контроль выделения и проверка типов объектов перед операциями',
      videoPath: '/media/Таблица выделения/Просмотр выбранных элементов/preview.mp4',
      linkTo: '/help/distribution'
    },
    {
      title: 'Распределение с шагом',
      description: 'Автоматическое размещение объектов с заданным интервалом между ними',
      videoPath: '/media/Распределение/Распределение объектов вдоль кривой/preview.mp4',
      linkTo: '/help/distribution'
    },
    {
      title: 'Распределение по количеству',
      description: 'Размещение заданного количества объектов равномерно вдоль траектории',
      videoPath: '/media/Распределение/Шаг (мм) — Количество/preview.mp4',
      linkTo: '/help/distribution'
    },
    {
      title: 'Поворот на угол',
      description: 'Умная ориентация скамеек, фонарей и других элементов относительно рельефа',
      videoPath: '/media/Ориентация/Поворот на угол/preview.mp4',
      linkTo: '/help/orientation'
    },
    {
      title: 'Случайная ориентация',
      description: 'Естественный разброс объектов для создания реалистичных ландшафтов',
      videoPath: '/media/Ориентация/Случайная ориентация/preview.mp4',
      linkTo: '/help/orientation'
    },
    {
      title: 'Посадка на Mesh (Приземлить)',
      description: 'Автоматическое размещение элементов на поверхности рельефа',
      videoPath: '/media/Приземление/Посадка на Mesh — Приземлить/preview.mp4',
      linkTo: '/help/ground'
    },
    {
      title: 'Размеры по направлению с шагом',
      description: 'Автоматическая разметка с заданным шагом для точного проектирования',
      videoPath: '/media/Разметка/Размеры по направлению с шагом/preview.mp4',
      linkTo: '/help/buildshell'
    },
    {
      title: 'GDL из выделения 2D',
      description: 'Работа с GDL объектами и параметрическими элементами',
      videoPath: '/media/GDL/GDL из выделения 2D/preview.mp4',
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
