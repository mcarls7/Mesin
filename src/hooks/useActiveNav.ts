import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const useActiveNav = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection(null)
      return
    }

    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [location.pathname])

  return activeSection
}

export default useActiveNav
