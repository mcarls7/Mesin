import { useState, useEffect } from 'react'
import { Search, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const SearchModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(true)
      }
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const pages = [
    { title: 'Home', path: '/', keywords: 'home seal online eternal garudapay' },
    { title: 'Game', path: '/game', keywords: 'game play mmorpg class features' },
    { title: 'Download', path: '/download', keywords: 'download install client launcher' },
    { title: 'Register', path: '/register', keywords: 'register create account signup daftar' },
    { title: 'Top Up', path: '/top-up', keywords: 'top up diamond garudapay payment' },
    { title: 'News', path: '/news', keywords: 'news update berita terbaru' },
    { title: 'Events', path: '/events', keywords: 'events event turnamen guild' },
    { title: 'Guides', path: '/guides', keywords: 'guides tips panduan leveling class' },
    { title: 'Database', path: '/database', keywords: 'database item monster map quest' },
    { title: 'Ranking', path: '/ranking', keywords: 'ranking pemain guild top leaderboard' },
    { title: 'Community', path: '/community', keywords: 'community discord facebook instagram' },
    { title: 'Support', path: '/support', keywords: 'support help bantuan FAQ contact' },
  ]

  const filtered = pages.filter(
    (page) =>
      page.title.toLowerCase().includes(query.toLowerCase()) ||
      page.keywords.toLowerCase().includes(query.toLowerCase())
  )

  const handleSelect = (path: string) => {
    setIsOpen(false)
    setQuery('')
    navigate(path)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg glass text-text-muted text-sm hover:text-text-main transition-colors"
      >
        <Search size={16} />
        <span>Search...</span>
        <kbd className="ml-4 px-2 py-0.5 rounded bg-white/10 text-xs font-mono">Ctrl+K</kbd>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-start justify-center pt-[15vh] px-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="relative w-full max-w-xl glass-strong rounded-2xl shadow-2xl shadow-black/40 overflow-hidden">
            <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
              <Search size={20} className="text-text-muted" />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pages..."
                className="flex-1 bg-transparent text-text-main placeholder-text-muted focus:outline-none text-lg"
              />
              <button onClick={() => setIsOpen(false)} className="p-1 rounded-lg hover:bg-white/10 text-text-muted">
                <X size={20} />
              </button>
            </div>
            <div className="max-h-80 overflow-y-auto p-2">
              {filtered.length === 0 ? (
                <p className="text-text-muted text-center py-8">No results found</p>
              ) : (
                filtered.map((page) => (
                  <button
                    key={page.path}
                    onClick={() => handleSelect(page.path)}
                    className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/5 transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <p className="text-text-main font-medium group-hover:text-gold transition-colors">{page.title}</p>
                      <p className="text-text-muted text-sm">{page.path}</p>
                    </div>
                  </button>
                ))
              )}
            </div>
            <div className="px-5 py-3 border-t border-white/10 flex items-center gap-4 text-xs text-text-muted">
              <span><kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono">↑↓</kbd> Navigate</span>
              <span><kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono">↵</kbd> Select</span>
              <span><kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono">Esc</kbd> Close</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SearchModal
