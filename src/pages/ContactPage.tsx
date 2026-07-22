import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'

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

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Contact | SEAL Online Eternal GarudaPay'
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', 'Hubungi tim SEAL Online Eternal GarudaPay. Ada pertanyaan? Reach out to us.')
  }, [])

  return (
    <div className="container mx-auto px-4 max-w-2xl pt-12">
      <FadeIn>
        <h1 className="font-display text-4xl md:text-5xl text-text-main mb-2">CONTACT</h1>
      </FadeIn>
      <FadeIn delay={0.1}>
        <p className="text-text-muted text-lg mb-8">Got questions? Reach out to us.</p>
      </FadeIn>

      <FadeIn delay={0.2}>
        <form className="glass rounded-2xl p-6 md:p-8 space-y-4 mb-8">
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
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-text-main placeholder-text-muted focus:outline-none focus:border-gold/40 transition-colors"
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-text-main placeholder-text-muted focus:outline-none focus:border-gold/40 transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full px-8 py-3 bg-gradient-to-r from-gold to-ember text-midnight font-bold rounded-lg hover:shadow-lg hover:shadow-gold/20 transition-all"
          >
            Submit
          </button>
        </form>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="glass rounded-2xl p-6 md:p-8">
          <h2 className="font-display text-xl text-gold mb-4">Alternative Contacts</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="https://discord.gg/sealeternal" className="text-text-muted hover:text-gold transition-colors">Discord</Link>
            <Link to="https://facebook.com/sealonlineofficial" className="text-text-muted hover:text-gold transition-colors">Facebook</Link>
            <Link to="https://instagram.com/sealonlineeternal" className="text-text-muted hover:text-gold transition-colors">Instagram</Link>
            <Link to="https://tiktok.com/@sealonlineeternal" className="text-text-muted hover:text-gold transition-colors">TikTok</Link>
            <Link to="https://youtube.com/@sealonlineeternal" className="text-text-muted hover:text-gold transition-colors">YouTube</Link>
          </div>
        </div>
      </FadeIn>
    </div>
  )
}

export default ContactPage
