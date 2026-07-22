import { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import BreadcrumbJsonLd from '../components/BreadcrumbJsonLd'
import { Sword, Shield, Users, Trophy, Sparkles, ChevronRight, Download, UserPlus, Gem, Zap, Lock, Clock } from 'lucide-react'

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useState(() => null)
  const isInView = useInView(ref[0], { once: true, margin: '-100px' })
  return (
    <motion.div
      ref={ref[0]}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  )
}

const Game = () => {
  useEffect(() => {
    document.title = 'Game | SEAL Online Eternal GarudaPay'
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', 'Jelajahi dunia MMORPG SEAL Online Eternal. Pilih kelas, bertarung, tingkatkan level, dan bangun komunitas.')
  }, [])

  const [activeTab, setActiveTab] = useState('game')

  const tabs = [
    { id: 'game', label: 'Game' },
    { id: 'classes', label: 'Classes' },
    { id: 'world', label: 'World' },
  ]

  const features = [
    'Explore vast dungeons and open-world maps',
    'Create and customize unique characters',
    'Level up and unlock powerful skills',
    'Collect legendary equipment and weapons',
    'Join guilds and forge alliances',
    'Play with friends in party-based combat',
    'Attend seasonal events and festivals',
    'Defeat world bosses for rare rewards',
    'Compete in PvP arenas and rankings',
  ]

  const stats = [
    { label: 'Players', value: '10M+' },
    { label: 'Quests', value: '500+' },
    { label: 'Classes', value: '50+' },
    { label: 'Uptime', value: '24/7' },
  ]

  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-4">
        <BreadcrumbJsonLd />
        <nav className="flex items-center gap-2 text-sm text-text-muted mb-6">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <span className="text-text-main">Game</span>
        </nav>
        <FadeIn>
          <div className="bg-deep/50 rounded-3xl p-8 md:p-12 text-center mb-12">
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-3">Game</p>
            <h1 className="font-display text-4xl md:text-6xl text-text-main mb-4">
              SEAL Online Eternal
            </h1>
            <p className="text-text-muted max-w-2xl mx-auto text-lg">
              Embark on an epic journey through mystical lands, battle fearsome monsters, and become a legend in the world of SEAL Online Eternal.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-full bg-surface border border-white/10 p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-gold to-ember text-midnight'
                      : 'text-text-muted hover:text-text-main'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mb-16">
            {activeTab === 'game' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="glass rounded-2xl p-6 border border-white/5 hover:border-gold/20 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-gold/10 text-gold group-hover:bg-gold/20 transition-colors">
                        <Sparkles size={20} />
                      </div>
                      <p className="text-text-main text-sm leading-relaxed pt-1">{feature}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'classes' && (
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: 'Warrior', icon: Sword, desc: 'Masters of melee combat with unmatched durability.' },
                  { name: 'Mage', icon: Zap, desc: 'Wielders of arcane magic that devastate enemies from afar.' },
                  { name: 'Archer', icon: Shield, desc: 'Swift and precise ranged attackers with critical precision.' },
                ].map((cls, index) => (
                  <div key={index} className="glass rounded-2xl p-8 border border-white/5 text-center hover:border-gold/20 transition-all">
                    <cls.icon className="w-12 h-12 mx-auto mb-4 text-gold" />
                    <h3 className="font-display text-xl text-text-main mb-2">{cls.name}</h3>
                    <p className="text-text-muted text-sm">{cls.desc}</p>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'world' && (
              <div className="glass rounded-2xl p-8 border border-white/5">
                <p className="text-text-muted text-center max-w-3xl mx-auto leading-relaxed">
                  The world of SEAL Online Eternal is a sprawling fantasy realm divided into diverse regions, from enchanted forests to scorching volcanic lands. Discover ancient ruins, bustling cities, and hidden dungeons as you unravel the mysteries of the Garuda realm.
                </p>
              </div>
            )}
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-surface rounded-2xl p-6 border border-white/5 text-center">
                <p className="font-display text-3xl md:text-4xl text-gold mb-1">{stat.value}</p>
                <p className="text-text-muted text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/download" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-gold to-ember text-midnight font-bold hover:shadow-lg hover:shadow-gold/20 transition-all">
              <Download size={20} />
              Download Game
            </Link>
            <Link to="/register" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-gold/40 text-gold font-bold hover:bg-gold/10 transition-all">
              <UserPlus size={20} />
              Create Account
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}

export default Game
