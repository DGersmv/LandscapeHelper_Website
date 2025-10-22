import { useRef, useEffect } from 'react'

interface VideoCardProps {
  title: string
  description: string
  videoPath: string
  linkTo?: string
}

function VideoCard({ title, description, videoPath, linkTo }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          video.play()
        } else {
          video.pause()
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5
    })

    observer.observe(video)

    return () => {
      observer.disconnect()
    }
  }, [])

  const CardContent = () => (
    <div className="video-card">
      <div className="video-container">
        <video
          ref={videoRef}
          src={videoPath}
          muted
          loop
          playsInline
          className="video-preview"
        />
        <div className="video-overlay">
          <div className="play-icon">▶</div>
        </div>
      </div>
      <div className="video-content">
        <h3 className="video-title">{title}</h3>
        <p className="video-description">{description}</p>
      </div>
    </div>
  )

  if (linkTo) {
    return (
      <a href={linkTo} className="video-card-link">
        <CardContent />
      </a>
    )
  }

  return <CardContent />
}

export default VideoCard
