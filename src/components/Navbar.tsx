import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/game', label: 'Game' },
  { to: '/download', label: 'Download' },
  { to: '/register', label: 'Register' },
  { to: '/top-up', label: 'Top Up' },
  { to: '/news', label: 'News' },
  { to: '/events', label: 'Events' },
  { to: '/guides', label: 'Guides' },
  { to: '/database', label: 'Database' },
  { to: '/ranking', label: 'Ranking' },
  { to: '/community', label: 'Community' },
  { to: '/support', label: 'Support' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-strong shadow-lg shadow-black/40' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-ember flex items-center justify-center font-display font-bold text-midnight text-lg shadow-lg shadow-gold/20">
              S
            </div>
            <div className="hidden sm:block">
              <div className="text-gold font-display font-bold leading-tight text-sm tracking-wide">SEAL ONLINE</div>
              <div className="text-text-muted text-[10px] uppercase tracking-widest">Eternal GarudaPay</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'text-gold bg-gold/10'
                    : 'text-text-muted hover:text-text-main hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/top-up" className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-gold to-ember text-midnight font-bold text-sm hover:shadow-lg hover:shadow-gold/20 transition-all">
              TOP UP
            </Link>
            <Link to="/download" className="px-5 py-2.5 rounded-lg border border-gold/40 text-gold font-bold text-sm hover:bg-gold/10 transition-all">
              PLAY NOW
            </Link>
          </div>

          <button className="lg:hidden p-2 text-text-muted hover:text-text-main" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden glass-strong border-t border-white/10">
          <div className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'text-gold bg-gold/10'
                    : 'text-text-muted hover:text-text-main hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <Link to="/top-up" className="px-5 py-3 rounded-lg bg-gradient-to-r from-gold to-ember text-midnight font-bold text-sm text-center hover:shadow-lg hover:shadow-gold/20 transition-all">
                TOP UP
              </Link>
              <Link to="/download" className="px-5 py-3 rounded-lg border border-gold/40 text-gold font-bold text-sm text-center hover:bg-gold/10 transition-all">
                PLAY NOW
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
