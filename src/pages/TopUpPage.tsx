import { useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import BreadcrumbJsonLd from '../components/BreadcrumbJsonLd'
import { Zap, Shield, CheckCircle, HelpCircle } from 'lucide-react'

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = { current: null }
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

const TopUpPage = () => {
  useEffect(() => {
    document.title = 'Top Up SEAL Online - GarudaPay Gaming Payment'
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', 'Top up diamond dan item SEAL Online dengan GarudaPay. Fast, secure, simple. Metode pembayaran gaming resmi untuk SEAL Indonesia.')
  }, [])

  const packages = [
    { diamonds: '100 Diamond', price: 'Rp 10.000' },
    { diamonds: '500 Diamond', price: 'Rp 45.000' },
    { diamonds: '1000 Diamond', price: 'Rp 85.000' },
    { diamonds: '5000 Diamond', price: 'Rp 400.000' },
  ]

  const faqs = [
    { question: 'How to top up?', answer: 'Select your package, enter your player ID, choose a payment method, and complete the transaction.' },
    { question: 'What payment methods are accepted?', answer: 'GarudaPay accepts bank transfers, e-wallets, and various gaming payment methods.' },
    { question: 'How long does delivery take?', answer: 'Most transactions are instant within 1-5 minutes after payment confirmation.' },
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <BreadcrumbJsonLd />
        <nav className="flex items-center gap-2 text-sm text-text-muted mb-6">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <span className="text-text-main">Top Up</span>
        </nav>
        <FadeIn>
          <h1 className="font-display text-4xl md:text-6xl text-text-main mb-4">
            TOP UP VIA GARUDAPAY
          </h1>
          <p className="text-text-muted text-lg max-w-xl mx-auto">
            Power Your Adventure
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 mb-20">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 border-2 border-transparent hover:border-gold/30 transition-all text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                  <span className="text-2xl">💎</span>
                </div>
                <h3 className="font-display text-xl text-text-main mb-1">{pkg.diamonds}</h3>
                <p className="text-gold text-2xl font-bold mb-6">{pkg.price}</p>
                <button className="w-full py-3 rounded-lg bg-gradient-to-r from-gold to-ember text-midnight font-bold hover:shadow-lg hover:shadow-gold/20 transition-all">
                  Buy
                </button>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <h2 className="font-display text-2xl text-text-main mb-8">Payment Methods</h2>
          <p className="text-text-muted max-w-2xl mx-auto leading-relaxed mb-16">
            GarudaPay supports a variety of gaming payment methods to make your top-up experience seamless. Choose from bank transfers, e-wallets, and more.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="grid sm:grid-cols-3 gap-6 mb-20">
            {[
              { icon: Zap, title: 'Fast', desc: 'Instant delivery after payment confirmation' },
              { icon: Shield, title: 'Secure', desc: 'Bank-grade encryption for all transactions' },
              { icon: CheckCircle, title: 'Simple', desc: 'Easy top-up process in just a few steps' },
            ].map((item, index) => (
              <div key={index} className="bg-surface rounded-2xl p-8 border border-white/5 text-center">
                <item.icon className="w-10 h-10 mx-auto mb-4 text-gold" />
                <h3 className="font-display text-lg text-text-main mb-2">{item.title}</h3>
                <p className="text-text-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <h2 className="font-display text-2xl text-text-main mb-8">FAQ</h2>
          <div className="max-w-2xl mx-auto space-y-4 mb-16 text-left">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-surface rounded-2xl border border-white/5 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-text-main font-medium flex items-center gap-3">
                    <HelpCircle size={18} className="text-gold" />
                    {faq.question}
                  </span>
                  <span className="text-text-muted text-xl">{openFaq === index ? '−' : '+'}</span>
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 text-text-muted text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/news" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-gold/40 text-gold font-bold hover:bg-gold/10 transition-all">
              Latest News
            </Link>
            <Link to="/support" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-gold/40 text-gold font-bold hover:bg-gold/10 transition-all">
              Contact Support
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}

export default TopUpPage
