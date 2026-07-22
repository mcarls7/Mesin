import { useState, useEffect } from 'react'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import BreadcrumbJsonLd from '../components/BreadcrumbJsonLd'
import { Trophy } from 'lucide-react'

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>
      {children}
    </motion.div>
  )
}

type TabId = 'players' | 'guilds'

const tabs: { id: TabId; label: string }[] = [
  { id: 'players', label: 'Players' },
  { id: 'guilds', label: 'Guilds' },
]

const players = [
  { rank: 1, name: 'ShadowBlaze', class: 'Mage', level: 99, guild: 'Eternal Flames' },
  { rank: 2, name: 'KnightRider', class: 'Knight', level: 98, guild: 'Iron Legion' },
  { rank: 3, name: 'SilentArrow', class: 'Jester', level: 97, guild: 'Phantom Guild' },
  { rank: 4, name: 'HolyLight', class: 'Cleric', level: 96, guild: 'Divine Order' },
  { rank: 5, name: 'BladeStorm', class: 'Warrior', level: 95, guild: 'Sword Masters' },
  { rank: 6, name: 'CraftMaster', class: 'Craftman', level: 94, guild: 'Tech Titans' },
  { rank: 7, name: 'MysticWisp', class: 'Mage', level: 93, guild: 'Arcane Council' },
  { rank: 8, name: 'SwiftKill', class: 'Jester', level: 92, guild: 'Shadow Blades' },
]

const guilds = [
  { rank: 1, name: 'Eternal Flames', master: 'ShadowBlaze', members: 48, points: 125000 },
  { rank: 2, name: 'Iron Legion', master: 'KnightRider', members: 52, points: 118000 },
  { rank: 3, name: 'Phantom Guild', master: 'SilentArrow', members: 41, points: 102000 },
  { rank: 4, name: 'Divine Order', master: 'HolyLight', members: 39, points: 95000 },
  { rank: 5, name: 'Sword Masters', master: 'BladeStorm', members: 45, points: 88000 },
]

const accentClasses = ['text-gold', 'text-gray-400', 'text-amber-700']

const RankingPage = () => {
  useEffect(() => {
    document.title = 'Ranking SEAL Online - Top Player & Guild Indonesia'
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', 'Lihat ranking pemain dan guild SEAL Online Eternal. Siapa yang terkuat di server Indonesia? Update mingguan.')
  }, [])

  const [activeTab, setActiveTab] = useState<TabId>('players')

  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbJsonLd />
        <nav className="flex items-center gap-2 text-sm text-text-muted mb-6">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <span className="text-text-main">Ranking</span>
        </nav>
        <FadeIn>
          <h1 className="font-display text-4xl md:text-5xl text-text-main mb-2">RANKING</h1>
          <p className="text-text-muted text-lg mb-8">Top players and guilds</p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-gold to-ember text-midnight'
                    : 'glass text-text-muted hover:text-text-main hover:border-gold/30'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {activeTab === 'players' && (
          <FadeIn delay={0.2}>
            <div className="space-y-3">
              {players.map((player) => (
                <div
                  key={player.rank}
                  className={`glass rounded-xl p-4 text-left hover:border-gold/30 transition-all ${
                    player.rank <= 3 ? 'border-gold/20' : ''
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <div className={`text-2xl font-display font-bold w-12 text-center ${accentClasses[player.rank - 1]}`}>
                      {player.rank <= 3 ? <Trophy size={24} className="mx-auto" /> : `#${player.rank}`}
                    </div>
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-4 gap-2 items-center">
                      <div className="font-display text-text-main text-lg">{player.name}</div>
                      <div className="text-text-muted text-sm">{player.class}</div>
                      <div className="text-text-muted text-sm">Lv. {player.level}</div>
                      <div className="text-gold text-sm font-medium">{player.guild}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        )}

        {activeTab === 'guilds' && (
          <FadeIn delay={0.2}>
            <div className="space-y-3">
              {guilds.map((guild) => (
                <div
                  key={guild.rank}
                  className={`glass rounded-xl p-4 text-left hover:border-gold/30 transition-all ${
                    guild.rank <= 3 ? 'border-gold/20' : ''
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <div className={`text-2xl font-display font-bold w-12 text-center ${accentClasses[guild.rank - 1]}`}>
                      {guild.rank <= 3 ? <Trophy size={24} className="mx-auto" /> : `#${guild.rank}`}
                    </div>
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-4 gap-2 items-center">
                      <div className="font-display text-text-main text-lg">{guild.name}</div>
                      <div className="text-text-muted text-sm">Master: {guild.master}</div>
                      <div className="text-text-muted text-sm">{guild.members} Members</div>
                      <div className="text-gold text-sm font-medium">{guild.points.toLocaleString()} Pts</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        )}
      </div>
    </div>
  )
}

export default RankingPage
