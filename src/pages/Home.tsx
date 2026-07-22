import { useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
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
      <Hero />
      <FadeIn><AboutSection /></FadeIn>
      <FadeIn delay={0.1}><FeaturesSection /></FadeIn>
      <FadeIn delay={0.1}><ClassSection /></FadeIn>
      <FadeIn delay={0.1}><WorldSection /></FadeIn>
      <FadeIn delay={0.1}><GarudaPaySection /></FadeIn>
      <FadeIn delay={0.1}><NewsSection /></FadeIn>
      <FadeIn delay={0.1}><GarudaPayRebornSection /></FadeIn>
      <FadeIn delay={0.1}><CommunitySection /></FadeIn>
      <FadeIn delay={0.1}><CreatorSection /></FadeIn>
      <FadeIn delay={0.1}><DownloadCta /></FadeIn>
    </main>
  )
}

export default Home
