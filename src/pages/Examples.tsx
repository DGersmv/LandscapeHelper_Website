import { Link } from 'react-router-dom'
import VideoCard from '../components/VideoCard'

function Examples() {
  const examples = [
    {
      title: 'Таблица выделения',
      description: 'Просмотр выбранных элементов: показывает тип, ID, слой и количество выделенных объектов',
      videoPath: '/media/Selection/View-selected-elements/preview.mp4',
      linkTo: '/help/selection'
    },
    {
      title: 'Изменение ID',
      description: 'Массовая установка ID: позволяет присвоить одинаковый ID всем выбранным элементам',
      videoPath: '/media/ID/Set_ID/preview.mp4',
      linkTo: '/help/change-id'
    },
    {
      title: 'Распределение',
      description: 'Автоматическое размещение объектов вдоль кривых с заданным шагом или количеством',
      videoPath: '/media/Distribution/Distribute-along-curve/preview.mp4',
      linkTo: '/help/distribution'
    },
    {
      title: 'Ориентация',
      description: 'Поворот, выравнивание и умная ориентация объектов относительно рельефа и других элементов',
      videoPath: '/media/Orientation/Rotate-by-angle/preview.mp4',
      linkTo: '/help/orientation'
    },
    {
      title: 'Приземление',
      description: 'Размещение объектов на поверхности рельефа с учетом уклона и смещение по Z',
      videoPath: '/media/Ground/Land-on-mesh/preview.mp4',
      linkTo: '/help/ground'
    },
    {
      title: 'Разметка',
      description: 'Автоматическая простановка размеров с шагом, размеры к линии, между объектами и к точке',
      videoPath: '/media/Dimensions/Dimensions-by-direction/preview.mp4',
      linkTo: '/help/dimensions'
    },
    {
      title: 'Контуры',
      description: 'Создание контурных линий из базовой линии с заданными параметрами ширины и шага',
      videoPath: '/media/Shell/Contours-from-line/preview.mp4',
      linkTo: '/help/shell'
    },
    {
      title: 'Сетка',
      description: 'Создание элемента Сетка из базовой линии с опциональной привязкой к поверхности рельефа',
      videoPath: '/media/Mesh/Mesh-from-line/preview.mp4',
      linkTo: '/help/mesh'
    },
    {
      title: 'Слои',
      description: 'Создание папок слоев и новых слоев, перемещение выбранных элементов с возможностью выбора из существующих',
      videoPath: '/media/Layers/Create-layers/preview.mp4',
      linkTo: '/help/layers'
    },
    {
      title: 'Ориентация балок',
      description: 'Ориентация балок по поверхности 3D сетки и поворот балок на заданное значение в градусах',
      videoPath: '/media/Beams/Orient-to-surface/preview.mp4',
      linkTo: '/help/columns'
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

      <div style={{ textAlign: 'center', marginTop: '48px' }}>
        <Link to="/download" className="btn btn-primary">
          Скачать и попробовать
        </Link>
      </div>
    </div>
  )
}

export default Examples
