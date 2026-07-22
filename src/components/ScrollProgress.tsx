import { useState, useEffect } from 'react'

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(scrollPercent)
      setVisible(scrollTop > 300)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col items-center gap-2">
      <span className="text-gold text-xs font-medium bg-deep/80 backdrop-blur px-2 py-1 rounded-full border border-gold/20">
        {Math.round(progress)}%
      </span>
      <button
        onClick={scrollToTop}
        className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-ember text-midnight flex items-center justify-center shadow-lg shadow-gold/30 hover:shadow-xl hover:shadow-gold/40 transition-all hover:scale-110 active:scale-95"
        aria-label="Back to top"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>
    </div>
  )
}

export default ScrollProgress
