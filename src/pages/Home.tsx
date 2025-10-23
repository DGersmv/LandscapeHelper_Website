import { Link } from 'react-router-dom'
import FunctionSection from '../components/FunctionSection'
import PartnerLogo from '../components/PartnerLogo'

function Home() {
  const functionSections = [
    {
      title: 'Таблица выделения',
      icon: '📋',
      color: '#795548',
      functions: [
        {
          title: 'Просмотр выбранных элементов и изменение ID',
          description: 'Показывает тип, ID и количество выделенных объектов. Позволяет массово переименовывать ID по схеме: "НовыйID - 01", "НовыйID - 02" и т.д.',
          videoPath: '/media/Таблица выделения/Просмотр выбранных элементов/preview.mp4',
          linkTo: '/help/selection'
        }
      ]
    },
    {
      title: 'Распределение',
      icon: '🌱',
      color: '#4CAF50',
      functions: [
        {
          title: 'Распределение с шагом',
          description: 'Размещает копии выбранного объекта вдоль линии, дуги или сплайна с заданным интервалом между объектами.',
          videoPath: '/media/Распределение/Распределение объектов вдоль кривой/preview.mp4',
          linkTo: '/help/distribution'
        },
        {
          title: 'Распределение по количеству',
          description: 'Размещает заданное количество копий объекта равномерно вдоль выбранной траектории.',
          videoPath: '/media/Распределение/Шаг (мм) — Количество/preview.mp4',
          linkTo: '/help/distribution'
        }
      ]
    },
    {
      title: 'Ориентация',
      icon: '🧭',
      color: '#2196F3',
      functions: [
        {
          title: 'Поворот на угол',
          description: 'Поворачивает выделенные элементы на заданное значение в градусах.',
          videoPath: '/media/Ориентация/Поворот на угол/preview.mp4',
          linkTo: '/help/orientation'
        },
        {
          title: 'Выровнять по оси X',
          description: 'Выставляет все элементы под углом 0° к глобальной оси X.',
          videoPath: '/media/Ориентация/Выровнять по оси X/preview.mp4',
          linkTo: '/help/orientation'
        },
        {
          title: 'Случайная ориентация',
          description: 'Задаёт каждому элементу случайный угол 0–360° для естественного разброса.',
          videoPath: '/media/Ориентация/Случайная ориентация/preview.mp4',
          linkTo: '/help/orientation'
        },
        {
          title: 'Ориентация на точку',
          description: 'Разворачивает элементы в сторону выбранной на плане точки.',
          videoPath: '/media/Ориентация/Ориентация на точку/preview.mp4',
          linkTo: '/help/orientation'
        }
      ]
    },
    {
      title: 'Приземление',
      icon: '🏔️',
      color: '#FF9800',
      functions: [
        {
          title: 'Смещение по Z (Применить)',
          description: 'Поднимает/опускает выделенные элементы на указанное значение (мм).',
          videoPath: '/media/Приземление/Смещение по Z — Применить/preview.mp4',
          linkTo: '/help/ground'
        },
        {
          title: 'Посадка на Mesh (Приземлить)',
          description: 'Подбирает высоту каждого объекта по выбранной 3D-сети (рельеф).',
          videoPath: '/media/Приземление/Посадка на Mesh — Приземлить/preview.mp4',
          linkTo: '/help/ground'
        }
      ]
    },
    {
      title: 'Разметка',
      icon: '📏',
      color: '#9C27B0',
      functions: [
        {
          title: 'Размеры по направлению с шагом',
          description: 'Ставит цепочку размеров строго по заданному шагу перпендикулярно направлению.',
          videoPath: '/media/Разметка/Размеры по направлению с шагом/preview.mp4',
          linkTo: '/help/dimensions'
        },
        {
          title: 'Размеры от объектов до линии',
          description: 'Проставляет размеры от точек привязки выбранных объектов до заданной линии.',
          videoPath: '/media/Разметка/Размеры от объектов до линии/preview.mp4',
          linkTo: '/help/dimensions'
        }
      ]
    },
    {
      title: 'GDL',
      icon: '⚙️',
      color: '#607D8B',
      functions: [
        {
          title: 'GDL из выделения 2D',
          description: 'Формирует GDL-код из выбранных 2D-элементов, готовый к вставке в редактор объекта.',
          videoPath: '/media/GDL/GDL из выделения 2D/preview.mp4',
          linkTo: '/help/gdl'
        }
      ]
    }
  ]

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>LandscapeHelper</h1>
          <p>Автоматизация ландшафтного проектирования в Archicad</p>
          <div className="cta-buttons">
            <Link to="/download" className="btn btn-primary">
              Скачать бесплатно
            </Link>
            <Link to="/docs" className="btn btn-secondary">
              Документация
            </Link>
          </div>
        </div>
      </section>

      {/* Блок о партнере */}
      <section style={{ 
        background: 'linear-gradient(135deg, #4CAF50, #2E7D32)', 
        color: 'white', 
        padding: '80px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ 
            marginBottom: '16px', 
            fontSize: '3rem',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px'
          }}>
            <PartnerLogo size={48} />
            Tashi-Ani.ru
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '32px', opacity: '0.9' }}>
            Более 15 лет опыта в ландшафтном проектировании
          </p>
          <div style={{ 
            background: 'rgba(255,255,255,0.2)', 
            padding: '20px', 
            borderRadius: '12px',
            marginBottom: '24px',
            maxWidth: '600px',
            margin: '0 auto 24px auto'
          }}>
            <p style={{ margin: '0', fontSize: '1.1rem' }}>
              <strong>🌱 90% клиентов по рекомендациям</strong><br />
              <strong>🏗️ Решаем сложные задачи: перепады высот, затопление</strong><br />
              <strong>💼 Личный онлайн-кабинет заказчика</strong><br />
              <strong>🎯 От первого выезда до сдачи и сервиса</strong>
            </p>
          </div>
          <div className="cta-buttons">
            <a href="https://tashi-ani.ru" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{
              background: 'white',
              color: 'var(--primary-green)',
              border: 'none'
            }}>
              🌐 Посетить tashi-ani.ru
            </a>
          </div>
        </div>
      </section>

      {functionSections.map((section, index) => (
        <FunctionSection
          key={index}
          title={section.title}
          icon={section.icon}
          color={section.color}
          functions={section.functions}
        />
      ))}

      <section className="cta-section">
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--primary-green)' }}>
            Готовы начать?
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '32px' }}>
            Скачайте LandscapeHelper и начните создавать потрясающие ландшафтные проекты уже сегодня
          </p>
          <div className="cta-buttons">
            <Link to="/download" className="btn btn-primary">
              Скачать для ArchiCAD 27
            </Link>
            <Link to="/download" className="btn btn-primary">
              Скачать для macOS
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home



