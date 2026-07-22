import { WORLDS } from '../data/mockData'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const WorldSection = () => {
  const gradients = [
    'from-emerald-900/90 to-deep',
    'from-purple-900/90 to-deep',
    'from-amber-900/90 to-deep',
    'from-red-900/90 to-deep',
  ]

  return (
    <section className="py-24">
      <div className="section-glow">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4 font-display">A WORLD OF ADVENTURE</p>
          <h2 className="font-display text-3xl md:text-5xl text-text-main mb-12">Explore the Realm</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {WORLDS.map((world, i) => (
              <div key={world.id} className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
                <div className={`absolute inset-0 bg-gradient-to-br ${gradients[i] || 'from-surface to-deep'}`} />
                <div className="relative z-10 h-full flex flex-col justify-end p-6 text-left">
                  <h3 className="text-gold font-display text-xl mb-2">{world.name}</h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-4">{world.description}</p>
                  <Link
                    to="/game"
                    className="inline-flex items-center gap-2 text-gold text-sm font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    EXPLORE <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <Link to="/game" className="inline-flex items-center gap-2 px-8 py-3 border border-gold/40 text-gold rounded-lg hover:bg-gold/10 transition-colors">
            EXPLORE THE WORLD <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default WorldSection
