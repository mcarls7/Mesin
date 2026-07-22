import { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import BreadcrumbJsonLd from '../components/BreadcrumbJsonLd'
import { ChevronDown, Search, MessageSquare } from 'lucide-react'

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

const faqs = [
  {
    question: 'Bagaimana cara mendaftar akun?',
    answer: 'Kunjungi halaman Register, isi data diri Anda, verifikasi email, dan akun Anda siap digunakan.',
  },
  {
    question: 'Bagaimana cara top up GarudaPay?',
    answer: 'Pilih nominal top up di halaman Top Up, pilih metode pembayaran, dan selesaikan transaksi.',
  },
  {
    question: 'Apa minimum spesifikasi komputer?',
    answer: 'OS Windows 7/64-bit, RAM 4GB, Intel Core i3 atau setara, dan VGA card 512MB.',
  },
  {
    question: 'Bagaimana cara bergabung dengan guild?',
    answer: 'Cari guild yang sesuai, ajukan permintaan bergabung, dan tunggu persetujuan dari guild master.',
  },
  {
    question: 'Apakah game free to play?',
    answer: 'Ya, SEAL Online Eternal GarudaPay adalah free to play dengan fitur top-up opsional untuk item eksklusif.',
  },
]

const SupportPage = () => {
  useEffect(() => {
    document.title = 'Support SEAL Online - Bantuan & FAQ Pemain Indonesia'
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', 'Dukungan pemain SEAL Online Eternal. FAQ, kontak support, dan troubleshooting untuk komunitas Indonesia.')
  }, [])

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="container mx-auto px-4 max-w-4xl pt-12">
      <BreadcrumbJsonLd />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <nav className="flex items-center gap-2 text-sm text-text-muted mb-6">
        <Link to="/" className="hover:text-gold transition-colors">Home</Link>
        <span>/</span>
        <span className="text-text-main">Support</span>
      </nav>
      <FadeIn>
        <h1 className="font-display text-4xl md:text-5xl text-text-main mb-8">SUPPORT</h1>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
          <input
            type="text"
            placeholder="Search for help..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-surface border border-white/10 text-text-main placeholder-text-muted focus:outline-none focus:border-gold/40 transition-colors"
          />
        </div>
      </FadeIn>

      <FadeIn delay={0.25}>
        <div className="space-y-3 mb-12">
          {filteredFaqs.map((faq, index) => (
            <div key={index} className="glass rounded-xl p-4 text-left">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between text-text-main font-display font-bold"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`text-gold transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  size={20}
                />
              </button>
              {openIndex === index && (
                <p className="mt-3 text-text-muted leading-relaxed">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.35}>
        <form className="glass rounded-2xl p-6 md:p-8 mb-8 space-y-4">
          <h2 className="font-display text-2xl text-text-main mb-4">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-text-main placeholder-text-muted focus:outline-none focus:border-gold/40 transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-text-main placeholder-text-muted focus:outline-none focus:border-gold/40 transition-colors"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-text-main placeholder-text-muted focus:outline-none focus:border-gold/40 transition-colors"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-text-main placeholder-text-muted focus:outline-none focus:border-gold/40 transition-colors resize-none"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-gradient-to-r from-gold to-ember text-midnight font-bold rounded-lg hover:shadow-lg hover:shadow-gold/20 transition-all"
          >
            Submit
          </button>
        </form>
      </FadeIn>

      <FadeIn delay={0.45}>
        <div className="glass rounded-xl p-6 flex items-center justify-center gap-3 text-text-muted">
          <MessageSquare size={20} />
          <span className="font-display font-bold">Live Chat Coming Soon</span>
        </div>
      </FadeIn>
    </div>
  )
}

export default SupportPage
