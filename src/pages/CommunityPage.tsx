import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Users, Camera, Music, Play } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import BreadcrumbJsonLd from '../components/BreadcrumbJsonLd'
import { SOCIAL_LINKS } from '../data/mockData'

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

const iconMap: Record<string, React.ReactNode> = {
  MessageCircle: <MessageCircle size={28} />,
  Facebook: <Users size={28} />,
  Instagram: <Camera size={28} />,
  Music: <Music size={28} />,
  Youtube: <Play size={28} />,
}

const CommunityPage = () => {
  useEffect(() => {
    document.title = 'Community | SEAL Online Eternal GarudaPay'
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', 'Bergabung dengan komunitas SEAL Online Eternal. Discord, Facebook, Instagram, TikTok, YouTube.')
  }, [])

  return (
    <div className="container mx-auto px-4 text-center pt-12">
      <BreadcrumbJsonLd />
      <nav className="flex items-center gap-2 text-sm text-text-muted mb-6">
        <Link to="/" className="hover:text-gold transition-colors">Home</Link>
        <span>/</span>
        <span className="text-text-main">Community</span>
      </nav>
      <FadeIn>
        <h1 className="font-display text-4xl md:text-6xl text-text-main mb-4">
          JOIN THE COMMUNITY
        </h1>
      </FadeIn>
      <FadeIn delay={0.15}>
        <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto mb-12">
          The adventure doesn't end when the game closes. Join the community and stay connected.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
        {SOCIAL_LINKS.map((link, index) => (
          <FadeIn key={link.name} delay={index * 0.1}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-6 md:p-8 flex flex-col items-center gap-4 hover:border-gold/30 transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center text-gold">
                {iconMap[link.icon]}
              </div>
              <span className="text-text-main font-display font-bold text-lg">{link.name}</span>
              <span className="text-text-muted text-sm truncate w-full">{link.href}</span>
              {link.name === 'Discord' && (
                <span className="text-xs text-gold bg-gold/10 px-3 py-1 rounded-full">
                  Discord is the main hub
                </span>
              )}
            </a>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.3}>
        <Link to="https://discord.gg/sealeternal" className="inline-block px-8 py-3 bg-gradient-to-r from-gold to-ember text-midnight font-bold rounded-lg hover:shadow-lg hover:shadow-gold/20 transition-all">
          JOIN DISCORD
        </Link>
      </FadeIn>
    </div>
  )
}

export default CommunityPage
