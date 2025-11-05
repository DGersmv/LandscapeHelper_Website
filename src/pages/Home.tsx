import { Link } from 'react-router-dom'
import FunctionSection from '../components/FunctionSection'
import PartnerLogo from '../components/PartnerLogo'

function Home() {
  const functionSections = [
    {
      title: 'Таблица выделения',
      icon: '/content/to_web/net.png',
      color: '#795548',
      functions: [
        {
          title: 'Просмотр выбранных элементов',
          description: 'Показывает тип, ID, слой и количество выделенных объектов. Помогает проверить правильность выделения перед выполнением операций.',
          videoPath: '/media/Selection/View-selected-elements/preview.mp4',
          linkTo: '/help/selection'
        }
      ]
    },
    {
      title: 'Изменение ID',
      icon: '/content/to_web/id.png',
      color: '#795548',
      functions: [
        {
          title: 'Массовая установка ID',
          description: 'Позволяет массово присвоить одинаковый ID всем выбранным элементам. Введите базовое имя и все объекты получат новый ID.',
          videoPath: '/media/Selection/View-selected-elements/preview.mp4',
          linkTo: '/help/selection'
        }
      ]
    },
    {
      title: 'Распределение',
      icon: '/content/to_web/distribution.png',
      color: '#4CAF50',
      functions: [
        {
          title: 'Распределение с шагом',
          description: 'Размещает копии выбранного объекта вдоль линии, дуги или сплайна с заданным интервалом между объектами.',
          videoPath: '/media/Distribution/Distribute-along-curve/preview.mp4',
          linkTo: '/help/distribution'
        },
        {
          title: 'Распределение по количеству',
          description: 'Размещает заданное количество копий объекта равномерно вдоль выбранной траектории.',
          videoPath: '/media/Distribution/Distribute-by-count/preview.mp4',
          linkTo: '/help/distribution'
        }
      ]
    },
    {
      title: 'Ориентация',
      icon: '/content/to_web/orientation.png',
      color: '#2196F3',
      functions: [
        {
          title: 'Поворот на угол',
          description: 'Поворачивает выделенные элементы на заданное значение в градусах.',
          videoPath: '/media/Orientation/Rotate-by-angle/preview.mp4',
          linkTo: '/help/orientation'
        },
        {
          title: 'Выровнять по оси X',
          description: 'Выставляет все элементы под углом 0° к глобальной оси X.',
          videoPath: '/media/Orientation/Align-to-X-axis/preview.mp4',
          linkTo: '/help/orientation'
        },
        {
          title: 'Случайная ориентация',
          description: 'Задаёт каждому элементу случайный угол 0–360° для естественного разброса.',
          videoPath: '/media/Orientation/Random-orientation/preview.mp4',
          linkTo: '/help/orientation'
        },
        {
          title: 'Ориентация на точку',
          description: 'Разворачивает элементы в сторону выбранной на плане точки.',
          videoPath: '/media/Orientation/Orient-to-point/preview.mp4',
          linkTo: '/help/orientation'
        }
      ]
    },
    {
      title: 'Приземление',
      icon: '/content/to_web/land_to_mesh.png',
      color: '#FF9800',
      functions: [
        {
          title: 'Смещение по Z (Применить)',
          description: 'Поднимает/опускает выделенные элементы на указанное значение (мм).',
          videoPath: '/media/Ground/Z-offset/preview.mp4',
          linkTo: '/help/ground'
        },
        {
          title: 'Посадка на Mesh (Приземлить)',
          description: 'Подбирает высоту каждого объекта по выбранной 3D-сети (рельеф).',
          videoPath: '/media/Ground/Land-on-mesh/preview.mp4',
          linkTo: '/help/ground'
        }
      ]
    },
    {
      title: 'Разметка',
      icon: '/content/to_web/dimension.png',
      color: '#9C27B0',
      functions: [
        {
          title: 'Размеры по направлению с шагом',
          description: 'Ставит цепочку размеров строго по заданному шагу перпендикулярно направлению.',
          videoPath: '/media/Dimensions/Dimensions-by-direction/preview.mp4',
          linkTo: '/help/dimensions'
        },
        {
          title: 'Размеры от объектов до линии',
          description: 'Проставляет размеры от точек привязки выбранных объектов до заданной линии.',
          videoPath: '/media/Dimensions/Dimensions-to-line/preview.mp4',
          linkTo: '/help/dimensions'
        },
        {
          title: 'Размеры между объектами',
          description: 'Проставляет размеры между выбранными объектами автоматически.',
          videoPath: '/media/Dimensions/Dimensions-to-line/preview.mp4',
          linkTo: '/help/dimensions'
        },
        {
          title: 'Размеры к точке',
          description: 'Проставляет размеры от объектов до заданной точки на плане.',
          videoPath: '/media/Dimensions/Dimensions-to-line/preview.mp4',
          linkTo: '/help/dimensions'
        }
      ]
    },
    {
      title: 'Контуры',
      icon: '/content/to_web/contour.png',
      color: '#607D8B',
      functions: [
        {
          title: 'Создание контуров из линии',
          description: 'Создает контурные линии из базовой линии с заданными параметрами ширины и шага.',
          videoPath: '/media/Shell/Contours-from-line/preview.mp4',
          linkTo: '/help/shell'
        }
      ]
    },
    {
      title: 'Сетка',
      icon: '/content/to_web/mesh.png',
      color: '#00BCD4',
      functions: [
        {
          title: 'Создание сетки из линии',
          description: 'Создает элемент Сетка из базовой линии с опциональной привязкой к поверхности рельефа.',
          videoPath: '/media/Mesh/Mesh-from-line/preview.mp4',
          linkTo: '/help/mesh'
        }
      ]
    },
    {
      title: 'Слои',
      icon: '/content/to_web/layers.png',
      color: '#795548',
      functions: [
        {
          title: 'Создание папок/слоев и перемещение элементов',
          description: 'Создает папки слоев и новые слои, перемещает выбранные элементы с возможностью выбора из существующих.',
          videoPath: '/media/Layers/Create-layers/preview.mp4',
          linkTo: '/help/layers'
        }
      ]
    },
    {
      title: 'Ориентация балок',
      icon: '/content/to_web/turn_to_mesh.png',
      color: '#FF5722',
      functions: [
        {
          title: 'Ориентация балок по поверхности 3D сетки',
          description: 'Выравнивает балки по поверхности 3D сетки с сохранением длины.',
          videoPath: '/media/Beams/Orient-to-surface/preview.mp4',
          linkTo: '/help/columns'
        },
        {
          title: 'Поворот балок на заданное значение',
          description: 'Поворачивает выбранные балки на указанный угол в градусах.',
          videoPath: '/media/Beams/Rotate-beams/preview.mp4',
          linkTo: '/help/columns'
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
          <p style={{ fontSize: '1rem', marginBottom: '32px', opacity: '0.8', fontStyle: 'italic' }}>
            Создан архитектором для архитекторов
          </p>
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
            tashi-ani.ru
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '16px', opacity: '0.9', fontWeight: '600' }}>
            Если вы хотите перейти от модели к реальному объекту — мы возьмём на себя реализацию.
          </p>
          <p style={{ fontSize: '1.1rem', marginBottom: '32px', opacity: '0.9' }}>
            Более 15 лет опыта в ландшафтном строительстве
          </p>
          <p style={{ 
            fontSize: '1.1rem', 
            marginBottom: '24px', 
            opacity: '0.95',
            maxWidth: '800px',
            margin: '0 auto 24px auto',
            lineHeight: '1.6'
          }}>
            Мы — единственная ландшафтная компания, где каждый заказчик получает личный кабинет и мобильное приложение для контроля строительства. Процесс прозрачен на каждом этапе — от проекта до сдачи объекта.
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



