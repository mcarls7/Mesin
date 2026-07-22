import { useState } from 'react'

const ImageWithPlaceholder = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
}: {
  src: string
  alt: string
  className?: string
  loading?: 'lazy' | 'eager'
}) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`relative overflow-hidden bg-surface ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  )
}

export default ImageWithPlaceholder
