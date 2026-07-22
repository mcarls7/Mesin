import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import BreadcrumbJsonLd from '../components/BreadcrumbJsonLd'
import { CreditCard, ShieldCheck, Zap, Globe } from 'lucide-react'

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

const GarudaPayPage = () => {
  useEffect(() => {
    document.title = 'GarudaPay | Gaming Payment Ecosystem'
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', 'GarudaPay adalah ekosistem pembayaran gaming. Top up, voucher, promo, reward, dan membership dalam satu tempat.')
  }, [])

  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbJsonLd />
        <nav className="flex items-center gap-2 text-sm text-text-muted mb-6">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <span className="text-text-main">GarudaPay</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-display font-bold text-gold mb-6">
          GarudaPay
        </h1>

        <FadeIn>
          <p className="text-lg text-text-muted leading-relaxed max-w-3xl mb-12">
            GarudaPay adalah ekosistem pembayaran gaming yang dirancang khusus untuk kebutuhan pemain modern. Fast. Secure. Simple. Dari top up hingga reward, Semua dalam satu tempat.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            <Link to="/garudapay-reborn" className="glass rounded-2xl p-6 hover:border-gold/30 transition-all group">
              <h3 className="text-gold font-display font-semibold group-hover:text-gold-light transition-colors">GarudaPay Reborn</h3>
              <p className="text-text-muted text-sm mt-2">Era baru dalam ekosistem pembayaran gaming.</p>
            </Link>
            <Link to="/top-up" className="glass rounded-2xl p-6 hover:border-gold/30 transition-all group">
              <h3 className="text-gold font-display font-semibold group-hover:text-gold-light transition-colors">GarudaPay Top Up</h3>
              <p className="text-text-muted text-sm mt-2">Isi saldo dengan cepat dan aman.</p>
            </Link>
            <Link to="/seal-online-eternal" className="glass rounded-2xl p-6 hover:border-gold/30 transition-all group">
              <h3 className="text-gold font-display font-semibold group-hover:text-gold-light transition-colors">SEAL Online Eternal</h3>
              <p className="text-text-muted text-sm mt-2">Game yang terintegrasi dengan GarudaPay.</p>
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <section className="section-glow rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-display font-bold text-gold mb-4">What is GarudaPay?</h2>
            <div className="flex items-start gap-4">
              <CreditCard className="w-10 h-10 text-gold flex-shrink-0" />
              <div>
                <p className="text-text-muted leading-relaxed mb-4">
                  GarudaPay adalah ekosistem pembayaran gaming yang menggabungkan kemudahan, kecepatan, dan keamanan dalam satu platform. Dirancang untuk pemain yang menginginkan pengalaman top up yang mulus, GarudaPay mendukung berbagai kebutuhan gaming: top up game, pembelian voucher, klaim promo, pendapatan reward, membership, dan pembayaran lainnya.
                </p>
                <p className="text-text-muted leading-relaxed">
                  Dengan proses transaksi yang terintegrasi dan lintas-games, Anda tidak perlu lagi berganti-ganti metode pembayaran. Semua tersedia dalam ekosistem GarudaPay yang lengkap dan terpercaya.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.3}>
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold text-gold mb-6">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass rounded-2xl p-6 text-center hover:border-gold/30 transition-all">
                <Zap className="w-10 h-10 text-gold mx-auto mb-4" />
                <h3 className="text-text-main font-display font-semibold text-xl mb-2">Fast</h3>
                <p className="text-text-muted text-sm leading-relaxed">Transaksi diproses dalam hitungan detik. Top up langsung masuk, tanpa menunggu lama.</p>
              </div>
              <div className="glass rounded-2xl p-6 text-center hover:border-gold/30 transition-all">
                <ShieldCheck className="w-10 h-10 text-gold mx-auto mb-4" />
                <h3 className="text-text-main font-display font-semibold text-xl mb-2">Secure</h3>
                <p className="text-text-muted text-sm leading-relaxed">Keamanan menjadi prioritas utama. Data dan transaksi Anda dilindungi dengan enkripsi standar industri.</p>
              </div>
              <div className="glass rounded-2xl p-6 text-center hover:border-gold/30 transition-all">
                <Globe className="w-10 h-10 text-gold mx-auto mb-4" />
                <h3 className="text-text-main font-display font-semibold text-xl mb-2">Simple</h3>
                <p className="text-text-muted text-sm leading-relaxed">Interface intuitif yang mudah digunakan siapa pun, dari pemula hingga pemain experienced.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.4}>
          <section className="section-glow rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-display font-bold text-gold mb-4">How It Works</h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Menggunakan GarudaPay sangatlah mudah. Pilih nominal top up, pilih metode pembayaran, selesaikan transaksi, dan saldo akan langsung masuk ke akun game Anda. Tidak perlu proses ribet, tidak perlu menunggu lama.
            </p>
            <p className="text-text-muted leading-relaxed mb-6">
              GarudaPay juga menyediakan riwayat transaksi yang transparan, notifikasi real-time, dan dukungan pelanggan yang siap membantu jika Anda mengalami kendala apapun.
            </p>
            <Link to="/top-up" className="px-6 py-3 rounded-lg bg-gradient-to-r from-gold to-ember text-midnight font-bold hover:shadow-lg hover:shadow-gold/20 transition-all inline-block">
              Top Up Sekarang
            </Link>
          </section>
        </FadeIn>

        <FadeIn delay={0.5}>
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold text-gold mb-6">Supported Games</h2>
            <p className="text-text-muted leading-relaxed mb-6">
              Saat ini GarudaPay telah terintegrasi dengan SEAL Online Eternal dan terus berkembang untuk mendukung lebih banyak game. Bergabunglah dengan ekosistem gaming yang terus berkembang ini.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/seal-online-eternal" className="glass rounded-2xl p-6 hover:border-gold/30 transition-all group">
                <h3 className="text-gold font-display font-semibold group-hover:text-gold-light transition-colors">SEAL Online Eternal GarudaPay</h3>
                <p className="text-text-muted text-sm mt-2">Game utama yang terintegrasi penuh dengan GarudaPay.</p>
              </Link>
              <Link to="/garudapay-reborn" className="glass rounded-2xl p-6 hover:border-gold/30 transition-all group">
                <h3 className="text-gold font-display font-semibold group-hover:text-gold-light transition-colors">GarudaPay Reborn</h3>
                <p className="text-text-muted text-sm mt-2">Era baru ekosistem dengan fitur dan game yang lebih banyak.</p>
              </Link>
            </div>
          </section>
        </FadeIn>
      </div>
    </div>
  )
}

export default GarudaPayPage
