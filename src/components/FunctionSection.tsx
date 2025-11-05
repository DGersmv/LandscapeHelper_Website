import VideoCard from './VideoCard'

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

function FunctionSection({ title, icon, functions, color }: FunctionSectionProps) {
  // Проверяем, является ли icon путем к изображению (начинается с /) или эмодзи
  const isImageIcon = icon.startsWith('/') || icon.endsWith('.png')
  
  return (
    <section className="function-section" style={{ '--section-color': color } as React.CSSProperties}>
      <div className="container">
        <div className="section-header">
          <div className="section-icon">
            {isImageIcon ? (
              <img 
                src={icon} 
                alt={title}
                style={{ width: '100px', height: '100px', objectFit: 'contain' }}
              />
            ) : (
              icon
            )}
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
