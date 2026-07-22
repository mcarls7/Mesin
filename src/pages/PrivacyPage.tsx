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
  'Information We Collect',
  'How We Use Information',
  'Data Security',
  'Third-Party Services',
  'Your Rights',
  'Contact Us',
]

const PrivacyPage = () => {
  useEffect(() => {
    document.title = 'Privacy Policy - SEAL Online Eternal GarudaPay'
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', 'Kebijakan privasi SEAL Online Eternal GarudaPay. Perlindungan data dan keamanan pemain Indonesia.')
  }, [])

  return (
    <div className="container mx-auto px-4 max-w-4xl pt-12">
      <BreadcrumbJsonLd />
      <nav className="flex items-center gap-2 text-sm text-text-muted mb-6">
        <Link to="/" className="hover:text-gold transition-colors">Home</Link>
        <span>/</span>
        <span className="text-text-main">Privacy Policy</span>
      </nav>
      <FadeIn>
        <h1 className="font-display text-4xl md:text-5xl text-text-main mb-8">PRIVACY POLICY</h1>
      </FadeIn>

      <FadeIn delay={0.15}>
        <p className="text-text-muted text-lg leading-relaxed mb-8">
          Your privacy is important to us. This policy explains how SEAL Online Eternal GarudaPay collects, uses, and protects your personal information.
        </p>
      </FadeIn>

      <FadeIn delay={0.25}>
        <div className="space-y-6 mb-8">
          {sections.map((section, index) => (
            <div key={index} className="glass rounded-xl p-6 text-left">
              <h3 className="text-gold font-display font-bold text-lg mb-2">
                {index + 1}. {section}
              </h3>
              <p className="text-text-muted leading-relaxed">
                Details regarding {section.toLowerCase()} are outlined here. We are committed to transparency and protecting the personal data of our players.
              </p>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.35}>
        <p className="text-text-muted text-sm text-center">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </FadeIn>
    </div>
  )
}

export default PrivacyPage
