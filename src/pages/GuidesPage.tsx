import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import BreadcrumbJsonLd from '../components/BreadcrumbJsonLd'
import { BookOpen } from 'lucide-react'

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>
      {children}
    </motion.div>
  )
}

const guides = [
  { id: 'leveling', title: 'Leveling Guide', description: 'Master efficient routes and strategies to level up quickly. Discover optimal hunting grounds and quest chains that will get you to max level in record time.' },
  { id: 'class', title: 'Class Guide', description: 'Choose the perfect class for your playstyle. Detailed breakdowns of skills, stats, and progression paths for every class in SEAL Online Eternal.' },
  { id: 'equipment', title: 'Equipment Guide', description: 'Learn about gear sets, enhancement systems, and crafting materials. Build the ultimate loadout for your character.' },
  { id: 'guild', title: 'Guild Guide', description: 'Start and manage a successful guild. Tips for recruitment, guild wars, territory control, and building a thriving community.' },
  { id: 'pvp', title: 'PvP Guide', description: 'Dominate the arena with advanced PvP tactics. Class matchups, combo strategies, and competitive play tips for ranked battles.' },
  { id: 'economy', title: 'Economy Guide', description: 'Understand the in-game economy, trading systems, and gold-making strategies. Turn your gaming time into real wealth.' },
]

const GuidesPage = () => {
  useEffect(() => {
    document.title = 'Guide SEAL Online Indonesia - Tips & Panduan MMORPG'
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', 'Panduan lengkap SEAL Online Eternal. Tips leveling, class, equipment, guild, dan PvP untuk pemain Indonesia.')
  }, [])

  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbJsonLd />
        <nav className="flex items-center gap-2 text-sm text-text-muted mb-6">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <span className="text-text-main">Guides</span>
        </nav>
        <FadeIn>
          <h1 className="font-display text-4xl md:text-5xl text-text-main mb-2">GUIDES & TIPS</h1>
          <p className="text-text-muted text-lg mb-8">Master your adventure with our comprehensive guides</p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide, index) => (
            <FadeIn key={guide.id} delay={0.1 + index * 0.05}>
              <div className="glass rounded-2xl p-6 text-left hover:border-gold/30 transition-all group h-full flex flex-col">
                <div className="mb-4">
                  <BookOpen className="text-gold" size={32} />
                </div>
                <h2 className="text-gold font-display text-xl mb-3">{guide.title}</h2>
                <p className="text-text-muted text-sm mb-4 flex-1">{guide.description}</p>
                <Link to={`/guides/${guide.id}`} className="text-gold-light text-sm font-medium hover:underline inline-flex items-center gap-1">
                  Read Guide
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GuidesPage
