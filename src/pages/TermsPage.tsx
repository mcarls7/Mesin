import { motion, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
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

const sections = [
  'Acceptance of Terms',
  'User Accounts',
  'Gameplay Rules',
  'Purchases and Refunds',
  'Termination',
  'Changes to Terms',
]

const TermsPage = () => {
  useEffect(() => {
    document.title = 'Syarat & Ketentuan - SEAL Online Eternal GarudaPay'
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', 'Syarat dan ketentuan penggunaan SEAL Online Eternal GarudaPay. Baca aturan bermain, top up, dan komunitas sebelum mendaftar.')
  }, [])

  return (
    <div className="container mx-auto px-4 max-w-4xl pt-12">
      <BreadcrumbJsonLd />
      <nav className="flex items-center gap-2 text-sm text-text-muted mb-6">
        <Link to="/" className="hover:text-gold transition-colors">Home</Link>
        <span>/</span>
        <span className="text-text-main">Terms of Service</span>
      </nav>
      <FadeIn>
        <h1 className="font-display text-4xl md:text-5xl text-text-main mb-8">TERMS OF SERVICE</h1>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="space-y-6 mb-8">
          {sections.map((section, index) => (
            <div key={index} className="glass rounded-xl p-6 text-left">
              <h3 className="text-gold font-display font-bold text-lg mb-2">
                {index + 1}. {section}
              </h3>
              <p className="text-text-muted leading-relaxed">
                This section outlines the rules and guidelines regarding {section.toLowerCase()}. Please read carefully to ensure compliance and a fair experience for all players.
              </p>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.25}>
        <p className="text-text-muted text-sm text-center">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </FadeIn>
    </div>
  )
}

export default TermsPage
