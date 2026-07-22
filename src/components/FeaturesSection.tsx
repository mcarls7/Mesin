import { FEATURES } from '../data/mockData'
import { Map, Swords, Hammer, Users, Trophy, Sparkles } from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  Map,
  Swords,
  Hammer,
  Users,
  Trophy,
  Sparkles,
}

const FeaturesSection = () => {
  return (
    <section className="py-24">
      <div className="section-glow">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4 font-display">YOUR ADVENTURE. YOUR LEGACY.</p>
          <h2 className="font-display text-3xl md:text-5xl text-text-main mb-12">Game Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature) => {
              const Icon = iconMap[feature.icon]
              return (
                <div key={feature.id} className="glass rounded-2xl p-6 md:p-8 hover:border-gold/30 transition-all text-left">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                    {Icon && <Icon className="w-6 h-6 text-gold" />}
                  </div>
                  <h3 className="text-gold font-display text-xl mb-3">{feature.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
