import { useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import BreadcrumbJsonLd from '../components/BreadcrumbJsonLd'
import { Monitor, Apple, Download } from 'lucide-react'

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = { current: null }
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  )
}

const DownloadPage = () => {
  useEffect(() => {
    document.title = 'Download SEAL Online Eternal | The Legend Never Ends'
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', 'Download game SEAL Online Eternal untuk Windows dan Mac. Mulai petualanganmu sekarang.')
  }, [])

  const requirements = [
    { label: 'OS', value: 'Windows 10/11 (64-bit)' },
    { label: 'CPU', value: 'Intel Core i5 or equivalent' },
    { label: 'RAM', value: '8GB minimum (16GB recommended)' },
    { label: 'GPU', value: 'NVIDIA GTX 1050 or equivalent' },
    { label: 'Storage', value: '20GB free space' },
  ]

  const downloads = [
    { name: 'Windows', icon: Monitor, desc: 'Download for Windows 10/11' },
    { name: 'Mac', icon: Apple, desc: 'Download for macOS' },
    { name: 'Launcher', icon: Download, desc: 'Cross-platform Launcher' },
  ]

  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-4 text-center">
        <BreadcrumbJsonLd />
        <nav className="flex items-center gap-2 text-sm text-text-muted mb-6">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <span className="text-text-main">Download</span>
        </nav>
        <FadeIn>
          <h1 className="font-display text-4xl md:text-6xl text-text-main mb-4">
            DOWNLOAD SEAL ONLINE ETERNAL
          </h1>
          <p className="text-text-muted text-lg max-w-xl mx-auto mb-12">
            Your adventure starts here. Choose your platform and begin your journey.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
            {downloads.map((item, index) => (
              <a
                key={index}
                href="#"
                className="group bg-surface rounded-2xl p-8 border border-white/5 hover:border-gold/30 transition-all flex flex-col items-center gap-4"
              >
                <item.icon className="w-12 h-12 text-gold group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-display text-lg text-text-main">{item.name}</p>
                  <p className="text-text-muted text-sm">{item.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-2xl text-text-main mb-6">System Requirements</h2>
            <div className="bg-surface rounded-2xl border border-white/5 overflow-hidden">
              {requirements.map((req, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-4 ${index !== requirements.length - 1 ? 'border-b border-white/5' : ''}`}
                >
                  <span className="text-text-muted text-sm font-medium">{req.label}</span>
                  <span className="text-text-main text-sm">{req.value}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-text-muted text-sm">
            Minimum age: 13+. Free to play.
          </p>
        </FadeIn>
      </div>
    </div>
  )
}

export default DownloadPage
