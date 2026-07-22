import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { Users, CalendarDays, CreditCard, Globe } from 'lucide-react'

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useInView.ref ? useInView.ref() : null
  const isInView = useInView.ref ? true : false
  return (
    <motion.div
      ref={ref as any}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  )
}

const SealOnlineIndonesiaPage = () => {
  useEffect(() => {
    document.title = 'SEAL Online Indonesia | Komunitas & Server Lokal'
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', 'Komunitas SEAL Online Indonesia. Server lokal, event khusus, dan pembayaran terintegrasi.')
  }, [])

  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-text-muted mb-6">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <span className="text-text-main">SEAL Online Indonesia</span>
        </nav>

        {/* H1 */}
        <h1 className="text-4xl md:text-5xl font-display font-bold text-gold mb-6">
          SEAL Online Indonesia
        </h1>

        {/* Intro */}
        <FadeIn>
          <p className="text-lg text-text-muted leading-relaxed max-w-3xl mb-12">
            Komunitas SEAL Online Indonesia adalah rumah bagi para petualang dari Sabang sampai Merauke. Dengan dukungan server lokal, event eksklusif, dan metode pembayaran yang disesuaikan, pengalaman bermain di Indonesia benar-benar tak tertandingi.
          </p>
        </FadeIn>

        {/* Related Links */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            <Link to="/seal-online" className="glass rounded-2xl p-6 hover:border-gold/30 transition-all group">
              <h3 className="text-gold font-display font-semibold group-hover:text-gold-light transition-colors">SEAL Online</h3>
              <p className="text-text-muted text-sm mt-2">Informasi umum tentang game SEAL Online dan sejarahnya.</p>
            </Link>
            <Link to="/seal-online-id" className="glass rounded-2xl p-6 hover:border-gold/30 transition-all group">
              <h3 className="text-gold font-display font-semibold group-hover:text-gold-light transition-colors">SEAL Online ID</h3>
              <p className="text-text-muted text-sm mt-2">Hub utama komunitas SEAL Online ID untuk berita dan diskusi.</p>
            </Link>
            <Link to="/garudapay" className="glass rounded-2xl p-6 hover:border-gold/30 transition-all group">
              <h3 className="text-gold font-display font-semibold group-hover:text-gold-light transition-colors">GarudaPay</h3>
              <p className="text-text-muted text-sm mt-2">Ekosistem pembayaran gaming cepat dan aman untuk SEAL Online.</p>
            </Link>
          </div>
        </FadeIn>

        {/* H2: Community Indonesia */}
        <FadeIn delay={0.2}>
          <section className="section-glow rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-display font-bold text-gold mb-4">Community Indonesia</h2>
            <div className="flex items-start gap-4">
              <Users className="w-10 h-10 text-gold flex-shrink-0" />
              <div>
                <p className="text-text-muted leading-relaxed mb-4">
                  Komunitas SEAL Online Indonesia sangat aktif dan beragam. Dari pemain casual hingga hardcore, semua bertemu di forum, grup media sosial, dan event langsung. Berbagai komunitas regional juga hadir, memastikan setiap pemain mendapatkan dukungan dalam bahasa dan konteks lokal.
                </p>
                <p className="text-text-muted leading-relaxed">
                  Program creator, guild ambassador, dan komunitas Discord resmi menjadi tempat berkumpulnya para petualang untuk berdiskusi, berbagi strategi, dan menjalin persahabatan yang langgeng.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* H2: Server Information */}
        <FadeIn delay={0.3}>
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold text-gold mb-6">Server Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="w-6 h-6 text-gold" />
                  <h3 className="text-text-main font-semibold">Server Lokal</h3>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">
                  Server Indonesia dirancang dengan latensi rendah untuk memberikan pengalaman bermain yang mulus. Pemain dapat menikmati pertempuran tanpa hambatan jaringan yang mengganggu.
                </p>
              </div>
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <CalendarDays className="w-6 h-6 text-gold" />
                  <h3 className="text-text-main font-semibold">Jadwal Maintenance</h3>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">
                  Maintenance server diadakan secara rutin untuk meningkatkan kualitas layanan. Informasi jadwal selalu diumumkan sebelumnya melalui halaman news dan media sosial resmi.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* H2: Local Events */}
        <FadeIn delay={0.4}>
          <section className="section-glow rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-display font-bold text-gold mb-4">Local Events</h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Event-event lokal khusus untuk komunitas Indonesia diadakan secara berkala. Mulai dari turnamen guild, double XP weekend, hingga event spesial Hari Raya — ada selalu sesuatu yang menanti. Hadiah-hadiah menarik juga tersedia untuk para pemenang, termasuk item eksklusif dan merchandise resmi.
            </p>
            <p className="text-text-muted leading-relaxed">
              Ikuti page events kami untuk mendapatkan informasi terbaru dan jangan lewatkan kesempatan untuk meraih penghargaan bergengsi.
            </p>
            <div className="mt-6">
              <Link to="/events" className="px-6 py-3 rounded-lg bg-gradient-to-r from-gold to-ember text-midnight font-bold hover:shadow-lg hover:shadow-gold/20 transition-all inline-block">
                Lihat Semua Event
              </Link>
            </div>
          </section>
        </FadeIn>

        {/* H2: Payment Options */}
        <FadeIn delay={0.5}>
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold text-gold mb-6">Payment Options</h2>
            <div className="flex items-start gap-4">
              <CreditCard className="w-10 h-10 text-gold flex-shrink-0" />
              <div>
                <p className="text-text-muted leading-relaxed mb-4">
                  SEAL Online Indonesia mendukung berbagai metode pembayaran lokal untuk memudahkan para pemain melakukan top up. Dari transfer bank, e-wallet, hingga pembayaran di convenience store — semua tersedia dengan proses yang cepat dan aman.
                </p>
                <p className="text-text-muted leading-relaxed mb-6">
                  GarudaPay hadir sebagai solusi pembayaran gaming yang terintegrasi, memberikan pengalaman top up yang lebih cepat, aman, dan transparan.
                </p>
                <Link to="/top-up" className="px-6 py-3 rounded-lg border border-gold/40 text-gold font-bold hover:bg-gold/10 transition-all inline-block">
                  Top Up Sekarang
                </Link>
              </div>
            </div>
          </section>
        </FadeIn>
      </div>
    </div>
  )
}

export default SealOnlineIndonesiaPage
