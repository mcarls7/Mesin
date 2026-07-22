import { useState, useEffect } from 'react'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>
      {children}
    </motion.div>
  )
}

type TabId = 'items' | 'monsters' | 'maps' | 'quests' | 'equipment' | 'skills'

const tabs: { id: TabId; label: string }[] = [
  { id: 'items', label: 'Items' },
  { id: 'monsters', label: 'Monsters' },
  { id: 'maps', label: 'Maps' },
  { id: 'quests', label: 'Quests' },
  { id: 'equipment', label: 'Equipment' },
  { id: 'skills', label: 'Skills' },
]

const databaseEntries: Record<TabId, { name: string; type: string; level: number; rarity: string }[]> = {
  items: [
    { name: 'Health Potion', type: 'Consumable', level: 1, rarity: 'Common' },
    { name: 'Mana Potion', type: 'Consumable', level: 5, rarity: 'Common' },
    { name: 'Phoenix Feather', type: 'Consumable', level: 20, rarity: 'Rare' },
    { name: 'Gold Ingot', type: 'Material', level: 0, rarity: 'Uncommon' },
    { name: 'Mystic Gem', type: 'Material', level: 0, rarity: 'Legendary' },
  ],
  monsters: [
    { name: 'Forest Slime', type: 'Monster', level: 3, rarity: 'Common' },
    { name: 'Wild Wolf', type: 'Monster', level: 8, rarity: 'Common' },
    { name: 'Dark Knight', type: 'Elite', level: 25, rarity: 'Rare' },
    { name: 'Fire Drake', type: 'Boss', level: 50, rarity: 'Epic' },
    { name: 'Ancient Golem', type: 'Boss', level: 65, rarity: 'Legendary' },
  ],
  maps: [
    { name: 'Beginners Forest', type: 'Low Level', level: 1, rarity: 'Common' },
    { name: 'Crystal Caverns', type: 'Dungeon', level: 20, rarity: 'Uncommon' },
    { name: 'Shadow Valley', type: 'Open World', level: 35, rarity: 'Rare' },
    { name: 'Dragon\'s Lair', type: 'Raid', level: 60, rarity: 'Legendary' },
  ],
  quests: [
    { name: 'First Steps', type: 'Main', level: 1, rarity: 'Common' },
    { name: 'The Lost Artifact', type: 'Side', level: 15, rarity: 'Uncommon' },
    { name: 'Defeat the Dragon', type: 'Main', level: 50, rarity: 'Epic' },
    { name: 'Guild War Preparation', type: 'Guild', level: 40, rarity: 'Rare' },
  ],
  equipment: [
    { name: 'Iron Sword', type: 'Weapon', level: 10, rarity: 'Common' },
    { name: 'Mystic Robe', type: 'Armor', level: 20, rarity: 'Rare' },
    { name: 'Dragon Shield', type: 'Shield', level: 40, rarity: 'Epic' },
    { name: 'Crown of Kings', type: 'Helmet', level: 55, rarity: 'Legendary' },
    { name: 'Boots of Speed', type: 'Footwear', level: 25, rarity: 'Uncommon' },
  ],
  skills: [
    { name: 'Power Strike', type: 'Active', level: 5, rarity: 'Common' },
    { name: 'Heal', type: 'Active', level: 10, rarity: 'Common' },
    { name: 'Fireball', type: 'Active', level: 15, rarity: 'Uncommon' },
    { name: 'Whirlwind', type: 'Ultimate', level: 30, rarity: 'Rare' },
    { name: 'Divine Shield', type: 'Ultimate', level: 50, rarity: 'Epic' },
  ],
}

const rarityColors: Record<string, string> = {
  Common: 'text-text-muted',
  Uncommon: 'text-frost',
  Rare: 'text-mystic',
  Epic: 'text-frost',
  Legendary: 'text-gold',
}

const DatabasePage = () => {
  useEffect(() => {
    document.title = 'Database | SEAL Online Eternal GarudaPay'
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', 'Database SEAL Online Eternal - item, monster, map, quest, equipment, dan skill.')
  }, [])

  const [activeTab, setActiveTab] = useState<TabId>('items')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h1 className="font-display text-4xl md:text-5xl text-text-main mb-2">DATABASE</h1>
          <p className="text-text-muted text-lg mb-8">Explore items, monsters, maps, quests, and more</p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="glass rounded-2xl p-6 mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
              <input
                type="text"
                placeholder="Search database..."
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-surface border border-white/10 text-text-main placeholder:text-text-muted focus:outline-none focus:border-gold/40 transition-colors"
              />
            </div>
            <p className="text-text-muted text-xs mt-3">This is a dynamic database being updated regularly. New entries and details are added with each patch.</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-wrap gap-2 mb-6">
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

        <FadeIn delay={0.3}>
          <div className="grid gap-4">
            {databaseEntries[activeTab].map((entry, index) => (
              <div key={index} className="glass rounded-xl p-4 text-left hover:border-gold/30 transition-all grid grid-cols-1 sm:grid-cols-4 gap-4 items-center">
                <div className="font-display text-text-main">{entry.name}</div>
                <div className="text-text-muted text-sm">{entry.type}</div>
                <div className="text-text-muted text-sm">Lv. {entry.level}</div>
                <div className={`text-sm font-medium ${rarityColors[entry.rarity] || 'text-text-muted'}`}>{entry.rarity}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  )
}

export default DatabasePage
