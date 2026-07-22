import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

const CookieConsent = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setTimeout(() => setVisible(true), 1500)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-7xl mx-auto glass-strong rounded-2xl p-4 md:p-6 shadow-2xl shadow-black/40 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-text-main font-display font-bold mb-1">Cookie Consent</h3>
          <p className="text-text-muted text-sm leading-relaxed">
            Kami menggunakan cookie untuk meningkatkan pengalaman browsing Anda. Dengan melanjutkan, Anda menyetujui penggunaan cookie kami.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={decline}
            className="px-5 py-2.5 rounded-lg border border-white/10 text-text-muted font-medium text-sm hover:bg-white/5 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-gold to-ember text-midnight font-bold text-sm hover:shadow-lg hover:shadow-gold/20 transition-all"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
