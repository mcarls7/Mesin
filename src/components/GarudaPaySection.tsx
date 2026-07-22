import { Link } from 'react-router-dom'
import { Zap, Shield, CheckCircle } from 'lucide-react'

const GarudaPaySection = () => {
  return (
    <section className="py-24">
      <div className="section-glow">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4 font-display">GARUDAPAY</p>
          <h2 className="font-display text-3xl md:text-5xl text-text-main mb-4">Your Gaming Payment Ecosystem</h2>
          <p className="text-text-muted text-xl mb-8">Power Your Adventure</p>
          <p className="text-text-muted leading-relaxed max-w-2xl mx-auto mb-12">
            GarudaPay membantu para pemain melakukan top up, membeli voucher, mengakses promo, klaim reward, membership berlangganan, dan pembayaran lainnya secara cepat dan aman.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glass rounded-2xl p-8">
              <Zap className="w-10 h-10 text-gold mx-auto mb-4" />
              <h3 className="text-gold font-display text-xl mb-2">Fast</h3>
              <p className="text-text-muted text-sm leading-relaxed">Top up instan dan proses yang cepat tanpa hambatan.</p>
            </div>
            <div className="glass rounded-2xl p-8">
              <Shield className="w-10 h-10 text-gold mx-auto mb-4" />
              <h3 className="text-gold font-display text-xl mb-2">Secure</h3>
              <p className="text-text-muted text-sm leading-relaxed">Transaksi terlindungi dengan sistem keamanan terpercaya.</p>
            </div>
            <div className="glass rounded-2xl p-8">
              <CheckCircle className="w-10 h-10 text-gold mx-auto mb-4" />
              <h3 className="text-gold font-display text-xl mb-2">Simple</h3>
              <p className="text-text-muted text-sm leading-relaxed">Antarmuka mudah digunakan untuk semua kalangan pemain.</p>
            </div>
          </div>
          <Link to="/top-up" className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-gold to-ember text-midnight font-bold rounded-lg hover:opacity-90 transition-opacity">
            TOP UP NOW
          </Link>
        </div>
      </div>
    </section>
  )
}

export default GarudaPaySection
