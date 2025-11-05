import VideoCard from './VideoCard'
import Icon from './Icon'
import { FaTable, FaVectorSquare, FaFolder, FaSeedling, FaCompass, FaMountain, FaRuler } from 'react-icons/fa'

interface Function {
  title: string
  description: string
  videoPath: string
  linkTo?: string
}

interface FunctionSectionProps {
  title: string
  icon: string
  functions: Function[]
  color: string
}

const getIcon = (iconName: string, size: number, color: string) => {
  const iconProps = { size, color };
  
  switch (iconName) {
    case 'table': return <FaTable {...iconProps} />;
    case 'vector-square': return <FaVectorSquare {...iconProps} />;
    case 'folder': return <FaFolder {...iconProps} />;
    case 'seedling': return <FaSeedling {...iconProps} />;
    case 'compass': return <FaCompass {...iconProps} />;
    case 'mountain': return <FaMountain {...iconProps} />;
    case 'ruler': return <FaRuler {...iconProps} />;
    default: return <span style={{ color: 'red' }}>❌ {iconName}</span>;
  }
};

function FunctionSection({ title, icon, functions, color }: FunctionSectionProps) {
  return (
    <section className="function-section" style={{ '--section-color': color } as React.CSSProperties}>
      <div className="container">
        <div className="section-header">
          <div className="section-icon">
            {getIcon(icon, 64, color)}
          </div>
          <h2 className="section-title">{title}</h2>
        </div>
        
        <div className="functions-grid">
          {functions.map((func, index) => (
            <VideoCard
              key={index}
              title={func.title}
              description={func.description}
              videoPath={func.videoPath}
              linkTo={func.linkTo}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FunctionSection
