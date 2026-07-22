import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { NEWS } from '../data/mockData'

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>
      {children}
    </motion.div>
  )
}

const NewsPage = () => {
  useEffect(() => {
    document.title = 'News | SEAL Online Eternal GarudaPay'
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', 'Berita terbaru SEAL Online Eternal. Update, event, dan pengumuman resmi untuk komunitas.')
  }, [])

  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h1 className="font-display text-4xl md:text-5xl text-text-main mb-2">NEWS</h1>
          <p className="text-text-muted text-lg mb-8">Latest updates from SEAL Online Eternal</p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {NEWS.slice(0, 1).map((news) => (
            <FadeIn key={news.id} delay={0.1}>
              <Link to={`/news/${news.id}`} className="glass rounded-2xl overflow-hidden hover:border-gold/30 transition-all block group">
                <div className="relative aspect-video bg-surface bg-gradient-to-br from-gold/10 to-mystic/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-display text-gold/20 group-hover:text-gold/30 transition-colors">{news.title.charAt(0)}</span>
                  </div>
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-gold/20 text-gold">{news.category}</span>
                </div>
                <div className="p-6">
                  <div className="text-text-muted text-sm mb-2">{news.date}</div>
                  <h2 className="text-text-main font-display text-xl mb-2 group-hover:text-gold transition-colors">{news.title}</h2>
                  <p className="text-text-muted text-sm line-clamp-2">{news.description}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEWS.slice(1).map((news, index) => (
            <FadeIn key={news.id} delay={0.1 + index * 0.05}>
              <Link to={`/news/${news.id}`} className="glass rounded-2xl overflow-hidden hover:border-gold/30 transition-all block group">
                <div className="relative aspect-video bg-surface bg-gradient-to-br from-gold/10 to-mystic/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl font-display text-gold/20 group-hover:text-gold/30 transition-colors">{news.title.charAt(0)}</span>
                  </div>
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-gold/20 text-gold">{news.category}</span>
                </div>
                <div className="p-5">
                  <div className="text-text-muted text-sm mb-2">{news.date}</div>
                  <h2 className="text-text-main font-display text-lg mb-2 group-hover:text-gold transition-colors">{news.title}</h2>
                  <p className="text-text-muted text-sm line-clamp-2">{news.description}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewsPage
