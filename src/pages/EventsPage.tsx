import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import BreadcrumbJsonLd from '../components/BreadcrumbJsonLd'
import { EVENTS } from '../data/mockData'
import { Calendar } from 'lucide-react'
import ShareButtons from '../components/ShareButtons'

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>
      {children}
    </motion.div>
  )
}

const EventsPage = () => {
  useEffect(() => {
    document.title = 'Event SEAL Online - Tournament & Promo GarudaPay'
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', 'Event eksklusif SEAL Online dan GarudaPay. Turnamen guild, double XP, dan hadiah menarik untuk pemain Indonesia.')
  }, [])

  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: EVENTS.map((event, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `https://sealonline.co.id/events#event-${event.id}`,
      name: event.title,
      date: event.date,
    })),
  }

  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbJsonLd />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
        />
        <nav className="flex items-center gap-2 text-sm text-text-muted mb-6">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <span className="text-text-main">Events</span>
        </nav>
        <FadeIn>
          <h1 className="font-display text-4xl md:text-5xl text-text-main mb-8">EVENTS</h1>
        </FadeIn>

        <div className="space-y-6">
          {EVENTS.map((event, index) => (
            <FadeIn key={event.id} delay={0.1 + index * 0.1}>
              <div className="glass rounded-xl p-6 text-left hover:border-gold/30 transition-all group">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex items-center gap-3 text-text-muted min-w-fit">
                    <Calendar size={20} className="text-gold" />
                    <span className="text-sm font-medium">{event.date}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-text-main font-display text-xl group-hover:text-gold transition-colors">{event.title}</h2>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-gold/20 text-gold">{event.category}</span>
                    </div>
                    <p className="text-text-muted text-sm">
                      Join this exclusive event and earn rare rewards, unique items, and special titles. Compete with players from across the realm and showcase your skills in this thrilling competition.
                    </p>
                    <div className="mt-3">
                      <ShareButtons title={event.title} url={`https://sealonline.co.id/events#event-${event.id}`} />
                    </div>
                  </div>
                  <div className="min-w-fit">
                    <Link to={`/events/${event.id}`} className="inline-block px-6 py-2.5 rounded-lg bg-gradient-to-r from-gold to-ember text-midnight font-bold text-sm hover:shadow-lg hover:shadow-gold/20 transition-all">
                      Register for Event
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EventsPage
