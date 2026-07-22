import { useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import FeaturesSection from '../components/FeaturesSection'
import ClassSection from '../components/ClassSection'
import WorldSection from '../components/WorldSection'
import GarudaPaySection from '../components/GarudaPaySection'
import NewsSection from '../components/NewsSection'
import GarudaPayRebornSection from '../components/GarudaPayRebornSection'
import CommunitySection from '../components/CommunitySection'
import CreatorSection from '../components/CreatorSection'
import DownloadCta from '../components/DownloadCta'
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

const Home = () => {
  useEffect(() => {
    document.title = 'SEAL Online Eternal GarudaPay | The Legend Never Ends'
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', 'Masuki era baru petualangan MMORPG Indonesia. SEAL Online Eternal GarudaPay - The Legend Never Ends. Powered by Eternal × GarudaPay.')
  }, [])

  return (
    <main>
      <BreadcrumbJsonLd />
      <nav className="flex items-center gap-2 text-sm text-text-muted mb-6">
        <Link to="/" className="hover:text-gold transition-colors">Home</Link>
      </nav>
      <Hero />
      <section id="about"><FadeIn><AboutSection /></FadeIn></section>
      <section id="features"><FadeIn delay={0.1}><FeaturesSection /></FadeIn></section>
      <section id="classes"><FadeIn delay={0.1}><ClassSection /></FadeIn></section>
      <section id="world"><FadeIn delay={0.1}><WorldSection /></FadeIn></section>
      <section id="garudapay"><FadeIn delay={0.1}><GarudaPaySection /></FadeIn></section>
      <section id="news"><FadeIn delay={0.1}><NewsSection /></FadeIn></section>
      <section id="garudapay-reborn"><FadeIn delay={0.1}><GarudaPayRebornSection /></FadeIn></section>
      <section id="community"><FadeIn delay={0.1}><CommunitySection /></FadeIn></section>
      <section id="creator"><FadeIn delay={0.1}><CreatorSection /></FadeIn></section>
      <section id="download"><FadeIn delay={0.1}><DownloadCta /></FadeIn></section>
    </main>
  )
}

export default Home
