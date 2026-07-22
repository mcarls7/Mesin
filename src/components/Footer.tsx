import { Link } from 'react-router-dom'
import { Wallet, AtSign, Camera, Play, Users } from 'lucide-react'

const FOOTER_LINKS = {
  game: [
    { to: '/game', label: 'Game' },
    { to: '/download', label: 'Download' },
    { to: '/guides', label: 'Guides' },
    { to: '/database', label: 'Database' },
    { to: '/ranking', label: 'Ranking' },
  ],
  community: [
    { to: '/community', label: 'Community' },
    { to: '/news', label: 'News' },
    { to: '/events', label: 'Events' },
    { to: '/support', label: 'Support' },
  ],
  legal: [
    { to: '/terms', label: 'Terms of Service' },
    { to: '/privacy', label: 'Privacy Policy' },
  ],
}

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-deep/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-ember flex items-center justify-center font-display font-bold text-midnight text-xl shadow-lg shadow-gold/20">
                S
              </div>
              <div>
                <div className="text-gold font-display font-bold leading-tight">SEAL ONLINE</div>
                <div className="text-text-muted text-xs uppercase tracking-widest">Eternal GarudaPay</div>
              </div>
            </Link>
            <p className="text-text-muted text-sm max-w-sm leading-relaxed">
              Masuki era baru petualangan MMORPG Indonesia. The Legend Never Ends. Powered by Eternal × GarudaPay.
            </p>
            <div className="flex items-center gap-4 mt-6">
               <a href="#" className="p-2.5 rounded-lg glass hover:text-gold transition-colors" aria-label="Twitter"><AtSign size={18} /></a>
               <a href="#" className="p-2.5 rounded-lg glass hover:text-gold transition-colors" aria-label="Instagram"><Camera size={18} /></a>
               <a href="#" className="p-2.5 rounded-lg glass hover:text-gold transition-colors" aria-label="YouTube"><Play size={18} /></a>
               <a href="#" className="p-2.5 rounded-lg glass hover:text-gold transition-colors" aria-label="Facebook"><Users size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-gold font-display font-semibold mb-4 text-sm uppercase tracking-wider">Game</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.game.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-text-muted hover:text-text-main text-sm transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-display font-semibold mb-4 text-sm uppercase tracking-wider">Community</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.community.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-text-muted hover:text-text-main text-sm transition-colors">{link.label}</Link>
                </li>
              ))}
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-text-muted hover:text-text-main text-sm transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            © {new Date().getFullYear()} SEAL Online Eternal GarudaPay. All rights reserved.
          </p>
          <p className="text-text-muted text-xs">
            Powered by <span className="text-gold font-semibold">Eternal</span> × <span className="text-gold font-semibold">GarudaPay</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
