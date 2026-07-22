import { Link } from 'react-router-dom'
import { Users, Compass, Lightbulb, Shield } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'
import BreadcrumbJsonLd from '../components/BreadcrumbJsonLd'

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null)
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

const values = [
  { icon: Users, title: 'Community' },
  { icon: Compass, title: 'Adventure' },
  { icon: Lightbulb, title: 'Innovation' },
  { icon: Shield, title: 'Trust' },
]

const AboutPage = () => {
  useEffect(() => {
    document.title = 'Tentang SEAL Online Eternal GarudaPay - Visi & Misi'
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', 'Tentang SEAL Online Eternal GarudaPay. Visi, misi, dan cerita kami menghadirkan game MMORPG Indonesia terbaru dengan GarudaPay.')
  }, [])

  return (
    <div className="container mx-auto px-4 max-w-4xl pt-12 text-center">
      <BreadcrumbJsonLd />
      <nav className="flex items-center gap-2 text-sm text-text-muted mb-6">
        <Link to="/" className="hover:text-gold transition-colors">Home</Link>
        <span>/</span>
        <span className="text-text-main">About</span>
      </nav>
      <FadeIn>
        <h1 className="font-display text-4xl md:text-5xl text-text-main mb-6">ABOUT</h1>
      </FadeIn>

      <FadeIn delay={0.15}>
        <p className="text-text-muted text-lg leading-relaxed mb-8">
          SEAL Online Eternal GarudaPay is a revival of the legendary MMORPG, bringing back the epic adventure with modern GarudaPay payment integration. Our vision is to preserve the spirit of classic SEAL Online while delivering a seamless, secure gaming experience for players across Indonesia and beyond.
        </p>
      </FadeIn>

      <FadeIn delay={0.25}>
        <div className="glass rounded-2xl p-8 mb-12">
          <h2 className="font-display text-2xl text-gold mb-4">Our Mission</h2>
          <p className="text-text-muted leading-relaxed">
            We are committed to creating a vibrant gaming ecosystem where players can relive nostalgic adventures, forge lasting friendships, and compete in fair battles — all backed by transparent, player-first policies.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.35}>
        <h2 className="font-display text-2xl text-gold mb-6">Our Values</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {values.map((value) => (
            <div key={value.title} className="glass rounded-xl p-6 flex flex-col items-center gap-3">
              <value.icon className="text-gold" size={32} />
              <span className="text-text-main font-display font-bold text-sm">{value.title}</span>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.45}>
        <Link to="/contact" className="inline-block px-8 py-3 bg-gradient-to-r from-gold to-ember text-midnight font-bold rounded-lg hover:shadow-lg hover:shadow-gold/20 transition-all">
          Contact Us
        </Link>
      </FadeIn>
    </div>
  )
}

export default AboutPage
