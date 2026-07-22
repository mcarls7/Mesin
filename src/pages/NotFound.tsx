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

const NotFound = () => {
  useEffect(() => {
    document.title = '404 - Page Not Found | SEAL Online Eternal GarudaPay'
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', 'Halaman yang Anda cari tidak ditemukan. Kembali ke halaman utama.')
  }, [])

  return (
    <div className="container mx-auto px-4 text-center pt-24">
      <FadeIn>
        <div className="text-gold opacity-20 font-display text-9xl select-none">404</div>
      </FadeIn>
      <FadeIn delay={0.15}>
        <h1 className="font-display text-4xl md:text-5xl text-text-main mb-4">PAGE NOT FOUND</h1>
      </FadeIn>
      <FadeIn delay={0.3}>
        <p className="text-text-muted text-lg mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
      </FadeIn>
      <FadeIn delay={0.45}>
        <Link to="/" className="inline-block px-8 py-3 bg-gradient-to-r from-gold to-ember text-midnight font-bold rounded-lg hover:shadow-lg hover:shadow-gold/20 transition-all">
          BACK TO HOME
        </Link>
      </FadeIn>
    </div>
  )
}

export default NotFound
