import { SOCIAL_LINKS } from '../data/mockData'
import { MessageCircle, Users, Camera, Music, Play } from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  MessageCircle,
  Facebook: Users,
  Instagram: Camera,
  Music,
  Youtube: Play,
}

const CommunitySection = () => {
  const discordLink = SOCIAL_LINKS.find((link) => link.name === 'Discord')?.href

  return (
    <section className="py-24">
      <div className="section-glow">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4 font-display">JOIN THE COMMUNITY</p>
          <h2 className="font-display text-3xl md:text-5xl text-text-main mb-6">Connect With Players</h2>
          <p className="text-text-muted leading-relaxed max-w-2xl mx-auto mb-10">
            The adventure doesn't end when the game closes. Join the community and stay connected.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
            {SOCIAL_LINKS.map((link) => {
              const Icon = iconMap[link.icon]
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-xl p-4 flex flex-col items-center gap-2 hover:border-gold/30 transition-all"
                >
                  {Icon && <Icon className="w-6 h-6 text-gold" />}
                  <span className="text-text-muted text-xs">{link.name}</span>
                </a>
              )
            })}
          </div>
          {discordLink && (
            <a
              href={discordLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-gold to-ember text-midnight font-bold rounded-lg hover:opacity-90 transition-opacity"
            >
              JOIN DISCORD
            </a>
          )}
          <p className="text-text-muted text-sm mt-3">Discord is the main community hub.</p>
        </div>
      </div>
    </section>
  )
}

export default CommunitySection
