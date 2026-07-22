import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import BreadcrumbJsonLd from '../components/BreadcrumbJsonLd'
import { Sparkles, Swords, Users } from 'lucide-react'

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

const GarudaPayRebornPage = () => {
  useEffect(() => {
    document.title = 'GarudaPay Reborn - Era Baru Gaming Payment Indonesia'
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', 'GarudaPay Reborn menghadirkan era baru ekosistem gaming Indonesia. Lebih cepat, aman, dan terintegrasi dengan SEAL Online Eternal.')
  }, [])

  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbJsonLd />
        <nav className="flex items-center gap-2 text-sm text-text-muted mb-6">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/garudapay" className="hover:text-gold transition-colors">GarudaPay</Link>
          <span>/</span>
          <span className="text-text-main">GarudaPay Reborn</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-display font-bold text-gold mb-6">
          GarudaPay Reborn
        </h1>

        <FadeIn>
          <p className="text-lg text-text-muted leading-relaxed max-w-3xl mb-12">
            GarudaPay Reborn adalah era baru dalam ekosistem gaming. Lebih cepat, lebih aman, dan lebih menyenangkan. Diciptakan untuk menghubungkan para pemain dengan pengalaman pembayaran yang lebih modern dan terintegrasi.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            <Link to="/garudapay" className="glass rounded-2xl p-6 hover:border-gold/30 transition-all group">
              <h3 className="text-gold font-display font-semibold group-hover:text-gold-light transition-colors">GarudaPay</h3>
              <p className="text-text-muted text-sm mt-2">Eksekusi utama ekosistem pembayaran gaming kami.</p>
            </Link>
            <Link to="/seal-online-eternal" className="glass rounded-2xl p-6 hover:border-gold/30 transition-all group">
              <h3 className="text-gold font-display font-semibold group-hover:text-gold-light transition-colors">SEAL Online Eternal</h3>
              <p className="text-text-muted text-sm mt-2">Game unggulan dalam ekosistem GarudaPay Reborn.</p>
            </Link>
            <Link to="/events" className="glass rounded-2xl p-6 hover:border-gold/30 transition-all group">
              <h3 className="text-gold font-display font-semibold group-hover:text-gold-light transition-colors">Events</h3>
              <p className="text-text-muted text-sm mt-2">Event spesial GarudaPay Reborn yang bisa ikuti.</p>
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <section className="section-glow rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-display font-bold text-gold mb-4">The Reborn Era</h2>
            <div className="flex items-start gap-4">
              <Sparkles className="w-10 h-10 text-gold flex-shrink-0" />
              <div>
                <p className="text-text-muted leading-relaxed mb-4">
                  GarudaPay Reborn membawa era baru dalam ekosistem pembayaran gaming. Dengan teknologi yang lebih modern, fitur yang lebih lengkap, dan pengalaman pengguna yang lebih superior, GarudaPay Reborn hadir untuk memenuhi kebutuhan para pemain game masa kini.
                </p>
                <p className="text-text-muted leading-relaxed">
                  Era ini menandai komitmen kami dalam mendukung komunitas gaming Indonesia dengan solusi pembayaran yang tidak hanya cepat dan aman, tetapi juga menyenangkan dan transparan. Bergabunglah dengan era baru ini dan rasakan perbedaannya.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.3}>
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold text-gold mb-6">What's New</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass rounded-2xl p-6 text-center hover:border-gold/30 transition-all">
                <Swords className="w-10 h-10 text-gold mx-auto mb-4" />
                <h3 className="text-text-main font-display font-semibold text-xl mb-2">Epic Rewards</h3>
                <p className="text-text-muted text-sm leading-relaxed">Hadiah-epik untuk transaksi dan event spesial GarudaPay Reborn.</p>
              </div>
              <div className="glass rounded-2xl p-6 text-center hover:border-gold/30 transition-all">
                <Users className="w-10 h-10 text-gold mx-auto mb-4" />
                <h3 className="text-text-main font-display font-semibold text-xl mb-2">Community First</h3>
                <p className="text-text-muted text-sm leading-relaxed">Program komunitas eksklusif dan creator program yang lebih besar.</p>
              </div>
              <div className="glass rounded-2xl p-6 text-center hover:border-gold/30 transition-all">
                <Sparkles className="w-10 h-10 text-gold mx-auto mb-4" />
                <h3 className="text-text-main font-display font-semibold text-xl mb-2">Seamless Flow</h3>
                <p className="text-text-muted text-sm leading-relaxed">Integrasi lebih mulus dengan game dan platform gaming lainnya.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.4}>
          <section className="section-glow rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-display font-bold text-gold mb-4">Campaigns</h2>
            <p className="text-text-muted leading-relaxed mb-4">
              GarudaPay Reborn menghadirkan campaign eksklusif untuk komunitas. Dari cashback, bonus top up, hingga event kolaborasi dengan SEAL Online Eternal — ada banyak cara untuk meraih keuntungan lebih.
            </p>
            <p className="text-text-muted leading-relaxed">
              Jangan lewatkan setiap kesempatan. Ikuti media sosial resmi GarudaPay dan SEAL Online Eternal untuk mendapatkan informasi campaign terbaru.
            </p>
            <div className="mt-6">
              <Link to="/events" className="px-6 py-3 rounded-lg border border-gold/40 text-gold font-bold hover:bg-gold/10 transition-all inline-block">
                Lihat Event Mendatang
              </Link>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.5}>
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold text-gold mb-6">How to Participate</h2>
            <div className="flex items-start gap-4">
              <Globe className="w-10 h-10 text-gold flex-shrink-0" />
              <div>
                <p className="text-text-muted leading-relaxed mb-4">
                  Berpartisipasi dalam GarudaPay Reborn sangatlah mudah. Cukup buat akun GarudaPay, hubungkan dengan akun game Anda, dan nikmati berbagai keuntungan yang tersedia. Mulai dari top up dengan cashback, collecting reward, hingga ikut event eksklusif.
                </p>
                <p className="text-text-muted leading-relaxed mb-6">
                  Semua peserta GarudaPay Reborn mendapatkan akses ke ekosistem gaming yang lebih luas, dengan dukungan penuh dari tim Eternal dan GarudaPay.
                </p>
                <Link to="/top-up" className="px-6 py-3 rounded-lg bg-gradient-to-r from-gold to-ember text-midnight font-bold hover:shadow-lg hover:shadow-gold/20 transition-all inline-block">
                  Mulai Sekarang
                </Link>
              </div>
            </div>
          </section>
        </FadeIn>
      </div>
    </div>
  )
}

export default GarudaPayRebornPage
