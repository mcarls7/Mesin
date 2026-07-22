import { Link } from 'react-router-dom'

const DownloadCta = () => {
  return (
    <section className="py-24">
      <div className="section-glow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-gold to-ember mb-4">
            READY TO BEGIN YOUR LEGEND?
          </h2>
          <p className="text-text-muted text-xl mb-10">Your adventure starts here.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/download" className="px-8 py-3 bg-gradient-to-r from-gold to-ember text-midnight font-bold rounded-lg hover:opacity-90 transition-opacity">
              DOWNLOAD GAME
            </Link>
            <Link to="/register" className="px-8 py-3 border border-gold/40 text-gold rounded-lg hover:bg-gold/10 transition-colors">
              CREATE ACCOUNT
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DownloadCta
