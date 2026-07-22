import { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import BreadcrumbJsonLd from '../components/BreadcrumbJsonLd'
import { UserPlus, Shield } from 'lucide-react'

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

const RegisterPage = () => {
  useEffect(() => {
    document.title = 'Register | SEAL Online Eternal GarudaPay'
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', 'Daftar akun SEAL Online Eternal gratis. Bergabung dengan jutaan pemain Indonesia.')
  }, [])

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    ageConfirmation: false,
    termsAgreement: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Registration submitted!')
  }

  const inputClasses =
    'w-full px-4 py-3 bg-deep/50 border border-white/10 rounded-xl text-text-main placeholder-text-muted/50 focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-all'

  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <BreadcrumbJsonLd />
        <nav className="flex items-center gap-2 text-sm text-text-muted mb-6">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <span className="text-text-main">Register</span>
        </nav>
        <FadeIn>
          <div className="text-center mb-8">
            <h1 className="font-display text-4xl md:text-5xl text-text-main mb-2">
              CREATE ACCOUNT
            </h1>
            <p className="text-text-muted">
              Join millions of players in SEAL Online Eternal
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 md:p-10 border border-white/10 space-y-6">
            <div>
              <label className="block text-text-main text-sm font-medium mb-2">Username</label>
              <input
                type="text"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className={inputClasses}
                placeholder="Choose a username"
                required
              />
            </div>

            <div>
              <label className="block text-text-main text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={inputClasses}
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-text-main text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className={inputClasses}
                placeholder="Create a strong password"
                required
              />
            </div>

            <div>
              <label className="block text-text-main text-sm font-medium mb-2">Confirm Password</label>
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className={inputClasses}
                placeholder="Repeat your password"
                required
              />
            </div>

            <div className="space-y-3">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.ageConfirmation}
                  onChange={(e) => setFormData({ ...formData, ageConfirmation: e.target.checked })}
                  className="mt-1 w-4 h-4 rounded border-white/20 bg-deep/50 text-gold focus:ring-gold/20"
                  required
                />
                <span className="text-text-muted text-sm">
                  I confirm that I am at least 13 years old
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.termsAgreement}
                  onChange={(e) => setFormData({ ...formData, termsAgreement: e.target.checked })}
                  className="mt-1 w-4 h-4 rounded border-white/20 bg-deep/50 text-gold focus:ring-gold/20"
                  required
                />
                <span className="text-text-muted text-sm">
                  I agree to the <Link to="/terms" className="text-gold hover:text-gold-light transition-colors">Terms of Service</Link> and <Link to="/privacy" className="text-gold hover:text-gold-light transition-colors">Privacy Policy</Link>
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-gold to-ember text-midnight font-bold text-lg hover:shadow-lg hover:shadow-gold/20 transition-all flex items-center justify-center gap-2"
            >
              <UserPlus size={20} />
              REGISTER
            </button>

            <p className="text-center text-text-muted text-sm">
              Already have an account? <Link to="/login" className="text-gold hover:text-gold-light transition-colors font-medium">Login</Link>
            </p>
          </form>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-center text-text-muted/70 text-xs mt-6">
            Registration is free. By registering, you agree to our Terms of Service and Privacy Policy.
          </p>
        </FadeIn>
      </div>
    </div>
  )
}

export default RegisterPage
