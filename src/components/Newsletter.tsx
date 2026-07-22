import { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="py-24 section-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-strong rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-gold mb-4">
            STAY UPDATED
          </h2>
          <p className="text-text-muted text-lg mb-8 max-w-xl mx-auto">
            Dapatkan berita terbaru, event eksklusif, dan update langsung dari SEAL Online Eternal GarudaPay.
          </p>

          {submitted ? (
            <div className="py-8">
              <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-text-main font-display text-xl mb-2">Terima kasih!</p>
              <p className="text-text-muted">Anda sekarang terdaftar untuk update SEAL Online Eternal.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3.5 rounded-xl bg-surface border border-white/10 text-text-main placeholder-text-muted focus:outline-none focus:border-gold/40 transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-gold to-ember text-midnight font-bold hover:shadow-lg hover:shadow-gold/20 transition-all whitespace-nowrap"
              >
                SUBSCRIBE
              </button>
            </form>
          )}

          <p className="text-text-muted text-xs mt-4">
            No spam, only important updates. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
