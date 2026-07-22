import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import BreadcrumbJsonLd from '../components/BreadcrumbJsonLd'
import { Sparkles, Swords, Users } from 'lucide-react'
import { CLASSES } from '../data/mockData'

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

const colorMap: Record<string, string> = {
  'from-red-500 to-orange-500': 'text-ember',
  'from-blue-500 to-cyan-500': 'text-frost',
  'from-purple-500 to-pink-500': 'text-mystic',
  'from-yellow-400 to-amber-500': 'text-gold',
  'from-green-400 to-emerald-500': 'text-success',
  'from-slate-400 to-gray-500': 'text-text-muted',
}

const SealOnlineEternalPage = () => {
  useEffect(() => {
    document.title = 'SEAL Online Eternal - Era Baru MMORPG Indonesia GarudaPay'
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', 'SEAL Online Eternal menghadirkan era baru MMORPG Indonesia. Fitur baru, kelas baru, dunia baru, dan GarudaPay terintegrasi.')
  }, [])

  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbJsonLd />
        <nav className="flex items-center gap-2 text-sm text-text-muted mb-6">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <span className="text-text-main">SEAL Online Eternal</span>
        </nav>

        {/* H1 */}
        <h1 className="text-4xl md:text-5xl font-display font-bold text-gold mb-6">
          SEAL Online Eternal
        </h1>

        {/* Intro */}
        <FadeIn>
          <p className="text-lg text-text-muted leading-relaxed max-w-3xl mb-12">
            SEAL Online Eternal adalah era terbaru dalam dunia SEAL Online yang hadir dengan pengalaman bermain yang diperbarui sepenuhnya. Dunia yang lebih hidup, pertempuran yang lebih seru, dan fitur-fitur inovatif menanti petualang untuk kembali ke medan perang.
          </p>
        </FadeIn>

        {/* Related Links */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            <Link to="/garudapay" className="glass rounded-2xl p-6 hover:border-gold/30 transition-all group">
              <h3 className="text-gold font-display font-semibold group-hover:text-gold-light transition-colors">GarudaPay</h3>
              <p className="text-text-muted text-sm mt-2">Ekosistem pembayaran gaming yang terhubung dengan SEAL Online Eternal.</p>
            </Link>
            <Link to="/garudapay-reborn" className="glass rounded-2xl p-6 hover:border-gold/30 transition-all group">
              <h3 className="text-gold font-display font-semibold group-hover:text-gold-light transition-colors">GarudaPay Reborn</h3>
              <p className="text-text-muted text-sm mt-2">Era baru ekosistem pembayaran gaming yang lebih terintegrasi.</p>
            </Link>
            <Link to="/download" className="glass rounded-2xl p-6 hover:border-gold/30 transition-all group">
              <h3 className="text-gold font-display font-semibold group-hover:text-gold-light transition-colors">Download</h3>
              <p className="text-text-muted text-sm mt-2">Unduh klien SEAL Online Eternal dan mulai petualangan Anda sekarang.</p>
            </Link>
          </div>
        </FadeIn>

        {/* H2: The Eternal Era */}
        <FadeIn delay={0.2}>
          <section className="section-glow rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-display font-bold text-gold mb-4">The Eternal Era</h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Era Eternal bukan sekadar pembaruan — ini adalah kebangkitan total. Dunia SEAL Online telah direvitalisasi dengan grafis baru, sistem pertarungan yang lebih responsif, dan konten eksplorasi yang lebih mendalam. Setiap sudut dunia kini memiliki_detail_ dan keindahan visual yang menakjubkan.
            </p>
            <p className="text-text-muted leading-relaxed">
              Dari sinar matahari di dataran Town hingga kegelapan mencekam di Dungeon, setiap lingkungan dirancang untuk memberikan pengalaman bermain yang imersif. Era ini juga menghadirkan sistem ekonomi yang lebih seimbang dan komunitas yang lebih berkembang.
            </p>
          </section>
        </FadeIn>

        {/* H2: What's New */}
        <FadeIn delay={0.3}>
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold text-gold mb-6">What's New</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="w-6 h-6 text-gold" />
                  <h3 className="text-text-main font-semibold">Visual Enhancement</h3>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">
                  Grafis yang direvisi sepenuhnya dengan efek pencahayaan dinamis, tekstur yang lebih tajam, dan lingkungan yang lebih hidup.
                </p>
              </div>
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Swords className="w-6 h-6 text-gold" />
                  <h3 className="text-text-main font-semibold">Combat Overhaul</h3>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">
                  Sistem pertarungan yang dioptimalkan dengan animasi yang lebih smooth, skill baru, dan mekanik combo yang mendalam.
                </p>
              </div>
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-6 h-6 text-gold" />
                  <h3 className="text-text-main font-semibold">Social Features</h3>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">
                  Fitur sosial baru termasuk guild war yang lebih seru, sistem mentor, dan aktivitas bersama yang memperkuat ikatan komunitas.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* H2: Classes */}
        <FadeIn delay={0.4}>
          <section className="section-glow rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-display font-bold text-gold mb-6">Classes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CLASSES.map((cls) => (
                <div key={cls.id} className="glass rounded-2xl p-6 hover:border-gold/30 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${cls.color}`}></span>
                    <h3 className={`font-display font-bold text-lg ${colorMap[cls.color] || 'text-text-main'}`}>
                      {cls.name}
                    </h3>
                  </div>
                  <p className="text-gold text-xs font-medium uppercase tracking-wider mb-2">{cls.role}</p>
                  <p className="text-text-muted text-sm leading-relaxed">{cls.description}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* H2: How to Join */}
        <FadeIn delay={0.5}>
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold text-gold mb-4">How to Join</h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Bergabung dengan SEAL Online Eternal sangat mudah. Cukup unduh klien game, buat akun, dan selesaikan proses registrasi. Dalam hitungan menit, Anda akan siap memulai petualangan di era baru ini.
            </p>
            <p className="text-text-muted leading-relaxed mb-6">
              Jika Anda memiliki kode undangan atau rewards khusus, masukkan selama proses registrasi untuk mendapatkan bonus awal yang bermanfaat. Jangan ragu untuk berkonsultasi dengan komunitas jika Anda membutuhkan bantuan.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/download" className="px-6 py-3 rounded-lg bg-gradient-to-r from-gold to-ember text-midnight font-bold hover:shadow-lg hover:shadow-gold/20 transition-all">
                Unduh Sekarang
              </Link>
              <Link to="/register" className="px-6 py-3 rounded-lg border border-gold/40 text-gold font-bold hover:bg-gold/10 transition-all">
                Buat Akun
              </Link>
            </div>
          </section>
        </FadeIn>
      </div>
    </div>
  )
}

export default SealOnlineEternalPage
