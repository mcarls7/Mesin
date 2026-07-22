import { useEffect } from 'react'

const Analytics = () => {
  if (import.meta.env.DEV) {
    return null
  }

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://analytics.example.com/script.js'
    script.async = true
    script.setAttribute('data-domain', 'sealonline.co.id')
    document.head.appendChild(script)
  }, [])

  return null
}

export default Analytics
