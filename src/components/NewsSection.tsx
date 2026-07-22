import { NEWS } from '../data/mockData'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const NewsSection = () => {
  const newsItems = NEWS.slice(0, 3)

  return (
    <section className="py-24">
      <div className="section-glow">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4 font-display">LATEST NEWS</p>
          <h2 className="font-display text-3xl md:text-5xl text-text-main mb-12">Stay Updated</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <article key={item.id} className="glass rounded-2xl overflow-hidden text-left hover:border-gold/30 transition-all">
                <div className="relative aspect-video bg-surface">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-ember/20" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-gold/20 text-gold">
                    {item.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-gold font-display text-lg">{item.title}</h3>
                  <p className="text-text-muted text-xs mt-1">{item.date}</p>
                  <p className="text-text-muted text-sm leading-relaxed mt-3">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
          <Link to="/news" className="inline-flex items-center gap-2 px-8 py-3 border border-gold/40 text-gold rounded-lg hover:bg-gold/10 transition-colors mt-8">
            VIEW ALL <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NewsSection
