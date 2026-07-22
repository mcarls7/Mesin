import Particles from '../components/Particles'
import { Link } from 'react-router-dom'
import { Play } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-glow overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-midnight/60 via-midnight/40 to-midnight" />
      <Particles count={100} color="#f5c842" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4 font-display animate-float">
          THE LEGEND NEVER ENDS
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-ember mb-4 leading-tight">
          SEAL ONLINE ETERNAL<br className="hidden sm:block" />
          GARUDAPAY
        </h1>
        <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Enter a new era of adventure. Masuki dunia MMORPG Indonesia yang lebih epic dari sebelumnya.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link to="/" className="px-8 py-3 bg-gradient-to-r from-gold to-ember text-midnight font-bold rounded-lg hover:opacity-90 transition-opacity">
            PLAY NOW
          </Link>
          <Link to="/download" className="px-8 py-3 border border-gold/40 text-gold rounded-lg hover:bg-gold/10 transition-colors">
            DOWNLOAD
          </Link>
          <Link to="/register" className="px-8 py-3 border border-gold/40 text-gold rounded-lg hover:bg-gold/10 transition-colors">
            REGISTER
          </Link>
          <Link to="/top-up" className="px-8 py-3 border border-gold/40 text-gold rounded-lg hover:bg-gold/10 transition-colors">
            TOP UP
          </Link>
        </div>
        <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:border-gold/30 transition-all mb-8 group">
          <span className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-colors">
            <Play size={18} className="text-gold fill-gold" />
          </span>
          <span className="text-text-main font-medium">Watch Trailer</span>
        </button>
        <p className="text-text-muted text-sm">Powered by Eternal × GarudaPay</p>
      </div>
    </section>
  )
}

export default Hero
