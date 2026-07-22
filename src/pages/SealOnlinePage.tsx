import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import BreadcrumbJsonLd from '../components/BreadcrumbJsonLd'
import { Map, Swords, Hammer, Users, Trophy, Sparkles, BookOpen } from 'lucide-react'
import { FEATURES } from '../data/mockData'

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>
      {children}
    </motion.div>
  )
}

const iconMap: Record<string, React.ReactNode> = {
  Map: <Map className="w-6 h-6 text-gold" />,
  Swords: <Swords className="w-6 h-6 text-gold" />,
  Hammer: <Hammer className="w-6 h-6 text-gold" />,
  Users: <Users className="w-6 h-6 text-gold" />,
  Trophy: <Trophy className="w-6 h-6 text-gold" />,
  Sparkles: <Sparkles className="w-6 h-6 text-gold" />,
}

const SealOnlinePage = () => {
  useEffect(() => {
    document.title = 'Apa Itu SEAL Online? | SEAL Online Indonesia'
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', 'SEAL Online adalah MMORPG legendaris Indonesia. Jelajahi dunia petualangan bersama jutaan pemain.')
  }, [])

  const gameSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: 'SEAL Online',
    description: 'MMORPG legendaris Indonesia dengan dunia yang luas, sistem pertarungan yang memuaskan, dan komunitas yang hangat.',
    genre: 'MMORPG',
    gamePlatform: 'PC',
    applicationCategory: 'Game',
    operatingSystem: 'Windows',
  }

  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbJsonLd />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(gameSchema) }}
        />
        <nav className="flex items-center gap-2 text-sm text-text-muted mb-6">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <span className="text-text-main">SEAL Online</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-display font-bold text-gold mb-6">
          Apa Itu SEAL Online?
        </h1>

        <FadeIn>
          <p className="text-lg text-text-muted leading-relaxed max-w-3xl mb-12">
            SEAL Online adalah massively multiplayer online role-playing game (MMORPG) klasik yang telah menjadi bagian dari kehidupan para petualang Indonesia selama bertahun-tahun. Dengan dunia yang luas, sistem pertarungan yang memuaskan, dan komunitas yang hangat, SEAL Online menawarkan pengalaman gaming yang tak tertandingi.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            {['/seal-online-indonesia', '/seal-online-id', '/seal-online-eternal'].map((path, i) => {
              const labels = ['SEAL Online Indonesia', 'SEAL Online ID', 'SEAL Online Eternal']
              return (
                <Link key={path} to={path} className="glass rounded-2xl p-6 hover:border-gold/30 transition-all group">
                  <h3 className="text-gold font-display font-semibold group-hover:text-gold-light transition-colors">{labels[i]}</h3>
                  <p className="text-text-muted text-sm mt-2">Pelajari lebih lanjut tentang {labels[i].toLowerCase()} dan komunitasnya.</p>
                </Link>
              )
            })}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <section className="section-glow rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-display font-bold text-gold mb-4">What is SEAL Online?</h2>
            <p className="text-text-muted leading-relaxed mb-4">
              SEAL Online adalah game MMORPG yang dikembangkan dengan konsep dunia fantasi yang dibagi menjadi berbagai wilayah unik. Pemain dapat menjelajahi kota ramai, dungeon gelap, hutan liar, dan area boss yang menantang. Setiap wilayah memiliki monster, NPC, dan quest tersendiri yang memberikan kedalaman pada pengalaman bermain.
            </p>
            <p className="text-text-muted leading-relaxed">
              Sejak peluncuran pertama, game ini telah melalui berbagai pembaruan besar. Dari sistem pertarungan yang responsif hingga ekonomi in-game yang dinamis, SEAL Online terus berevolusi untuk memenuhi harapan komunitasnya.
            </p>
          </section>
        </FadeIn>

        <FadeIn delay={0.3}>
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold text-gold mb-6">Why Play?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURES.map((feature) => (
                <div key={feature.id} className="glass rounded-2xl p-6 hover:border-gold/30 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                    {iconMap[feature.icon]}
                  </div>
                  <h3 className="text-text-main font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.4}>
          <section className="section-glow rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-display font-bold text-gold mb-4">Getting Started</h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Memulai petualangan di SEAL Online sangat mudah. Pertama, unduh klien game dan buat akun baru. Setelah itu, pilih kelas karakter yang sesuai dengan gaya bermain Anda — mulai dari Warrior yang tangguh hingga Mage yang legendaris.
            </p>
            <p className="text-text-muted leading-relaxed mb-6">
              Setelah karakter Anda siap, masuk ke dunia SEAL dan ikuti quest awal untuk memahami dasar-dasar permainan. Bergabung dengan komunitas di Discord atau media sosial untuk mendapatkan tips, trick, dan teman bermain.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/download" className="px-6 py-3 rounded-lg bg-gradient-to-r from-gold to-ember text-midnight font-bold hover:shadow-lg hover:shadow-gold/20 transition-all">
                Download Sekarang
              </Link>
              <Link to="/register" className="px-6 py-3 rounded-lg border border-gold/40 text-gold font-bold hover:bg-gold/10 transition-all">
                Buat Akun
              </Link>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.5}>
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold text-gold mb-4">Community</h2>
            <p className="text-text-muted leading-relaxed mb-6">
              Komunitas SEAL Online adalah salah satu aset terbesar game ini. Dari forum diskusi hingga event mingguan, pemain saling berbagi pengalaman, strategi, dan persahabatan yang dibangun di dalam dunia game. Bergabunglah dengan ribuan petualang lainnya dan jadilah bagian dari legenda yang terus berkembang.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/community" className="glass rounded-2xl px-6 py-4 hover:border-gold/30 transition-all">
                <BookOpen className="w-5 h-5 text-gold mb-2" />
                <span className="text-text-main font-medium">Forum Komunitas</span>
              </Link>
              <Link to="/events" className="glass rounded-2xl px-6 py-4 hover:border-gold/30 transition-all">
                <Sparkles className="w-5 h-5 text-gold mb-2" />
                <span className="text-text-main font-medium">Event & Tournament</span>
              </Link>
            </div>
          </section>
        </FadeIn>
      </div>
    </div>
  )
}

export default SealOnlinePage
