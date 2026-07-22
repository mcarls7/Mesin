import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import BreadcrumbJsonLd from '../components/BreadcrumbJsonLd'
import { MessageSquare, Newspaper, Calendar, Headphones } from 'lucide-react'

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

const SealOnlineIdPage = () => {
  useEffect(() => {
    document.title = 'SEAL Online ID - Hub Komunitas & Info Terbaru'
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', 'SEAL Online ID adalah pusat informasi komunitas Indonesia. Berita, guide, event, dan top up GarudaPay untuk SEAL Online.')
  }, [])

  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbJsonLd />
        <nav className="flex items-center gap-2 text-sm text-text-muted mb-6">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/seal-online" className="hover:text-gold transition-colors">SEAL Online</Link>
          <span>/</span>
          <span className="text-text-main">SEAL Online ID</span>
        </nav>

        {/* H1 */}
        <h1 className="text-4xl md:text-5xl font-display font-bold text-gold mb-6">
          SEAL Online ID
        </h1>

        {/* Intro */}
        <FadeIn>
          <p className="text-lg text-text-muted leading-relaxed max-w-3xl mb-12">
            SEAL Online ID adalah pusat informasi dan komunitas untuk para pemain SEAL Online di Indonesia. Temukan berita terbaru, panduan strategis, info event eksklusif, dan dukungan teknis untuk meningkatkan pengalaman bermain Anda.
          </p>
        </FadeIn>

        {/* Related Links */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            <Link to="/seal-online-indonesia" className="glass rounded-2xl p-6 hover:border-gold/30 transition-all group">
              <h3 className="text-gold font-display font-semibold group-hover:text-gold-light transition-colors">SEAL Online Indonesia</h3>
              <p className="text-text-muted text-sm mt-2">Eksplorasi komunitas Indonesia, event lokal, dan informasi server.</p>
            </Link>
            <Link to="/seal-online-eternal" className="glass rounded-2xl p-6 hover:border-gold/30 transition-all group">
              <h3 className="text-gold font-display font-semibold group-hover:text-gold-light transition-colors">SEAL Online Eternal</h3>
              <p className="text-text-muted text-sm mt-2">Era terbaru SEAL Online dengan fitur, kelas, dan konten baru.</p>
            </Link>
            <Link to="/top-up" className="glass rounded-2xl p-6 hover:border-gold/30 transition-all group">
              <h3 className="text-gold font-display font-semibold group-hover:text-gold-light transition-colors">GarudaPay Top Up</h3>
              <p className="text-text-muted text-sm mt-2">Isi saldo dengan cepat dan aman melalui ekosistem GarudaPay.</p>
            </Link>
          </div>
        </FadeIn>

        {/* H2: Community Hub */}
        <FadeIn delay={0.2}>
          <section className="section-glow rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-display font-bold text-gold mb-4">Community Hub</h2>
            <div className="flex items-start gap-4">
              <MessageSquare className="w-10 h-10 text-gold flex-shrink-0" />
              <div>
                <p className="text-text-muted leading-relaxed mb-4">
                  SEAL Online ID adalah rumah bagi ribuan pemain untuk berdiskusi, berbagi tips, dan menjalin persahabatan. Forum resmi, channel Discord, dan grup media sosial menjadi tempat utama interaksi antar komunitas.
                </p>
                <p className="text-text-muted leading-relaxed">
                  Bergabunglah dengan komunitas kami dan temukan teman seperjuangan baru. Apakah Anda pemain baru atau veteran, selalu ada tempat untuk Anda di tengah komunitas SEAL Online ID.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* H2: News */}
        <FadeIn delay={0.3}>
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold text-gold mb-6">News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Newspaper className="w-6 h-6 text-gold" />
                  <h3 className="text-text-main font-semibold">Update Resmi</h3>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">
                  Dapatkan informasi terbaru tentang pembaruan game, patch notes, dan perubahan sistem langsung dari sumber resmi. Kami memastikan Anda selalu mendapatkan informasi akurat dan waktu.
                </p>
              </div>
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Newspaper className="w-6 h-6 text-gold" />
                  <h3 className="text-text-main font-semibold">Announcement</h3>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">
                  Pengumuman penting tentang maintenance, event, dan program komunitas selalu disampaikan melalui halaman news resmi. Jangan lewatkan informasi penting yang dapat mempengaruhi pengalaman bermain Anda.
                </p>
              </div>
            </div>
            <div className="mt-6">
              <Link to="/news" className="px-6 py-3 rounded-lg bg-gradient-to-r from-gold to-ember text-midnight font-bold hover:shadow-lg hover:shadow-gold/20 transition-all inline-block">
                Baca Semua Berita
              </Link>
            </div>
          </section>
        </FadeIn>

        {/* H2: Events */}
        <FadeIn delay={0.4}>
          <section className="section-glow rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-display font-bold text-gold mb-4">Events</h2>
            <div className="flex items-start gap-4">
              <Calendar className="w-10 h-10 text-gold flex-shrink-0" />
              <div>
                <p className="text-text-muted leading-relaxed mb-4">
                  Event-event menarik selalu ada di SEAL Online ID. Dari turnamen PvP yang seru, event guild war yang epik, hingga event spesial dengan hadiah fantastis — komunitas tidak akan pernah bosan.
                </p>
                <p className="text-text-muted leading-relaxed mb-6">
                  Jangan lewatkan kesempatan untuk membuktikan diri dan meraih penghargaan. Event sering kali menawarkan rewards eksklusif yang hanya bisa didapatkan selama periode acara berlangsung.
                </p>
                <Link to="/events" className="px-6 py-3 rounded-lg border border-gold/40 text-gold font-bold hover:bg-gold/10 transition-all inline-block">
                  Lihat Event Mendatang
                </Link>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* H2: Support */}
        <FadeIn delay={0.5}>
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold text-gold mb-6">Support</h2>
            <div className="flex items-start gap-4">
              <Headphones className="w-10 h-10 text-gold flex-shrink-0" />
              <div>
                <p className="text-text-muted leading-relaxed mb-4">
                  Tim support SEAL Online ID siap membantu Anda dengan segala pertanyaan, masalah teknis, atau laporan bug. Layanan support tersedia melalui多种 saluran untuk memastikan respons yang cepat dan solutif.
                </p>
                <p className="text-text-muted leading-relaxed mb-6">
                  Apakah Anda mengalami kesulitan dengan akun, pembayaran, atau gameplay — jangan ragu untuk menghubungi tim kami. Komunitas juga selalu siap membantu menjawab pertanyaan dasar di forum diskusi.
                </p>
                <Link to="/support" className="px-6 py-3 rounded-lg border border-gold/40 text-gold font-bold hover:bg-gold/10 transition-all inline-block">
                  Hubungi Support
                </Link>
              </div>
            </div>
          </section>
        </FadeIn>
      </div>
    </div>
  )
}

export default SealOnlineIdPage
