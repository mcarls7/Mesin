import { Link } from 'react-router-dom'

const CreatorSection = () => {
  const items = [
    { title: 'Creator Role', description: 'Dapatkan peran resmi sebagai kreator konten SEAL Online Eternal GarudaPay.' },
    { title: 'Event Access', description: 'Akses eksklusif ke event khusus dan pertemuan langsung dengan tim developer.' },
    { title: 'Community Recognition', description: 'Kenali dan diakui oleh komunitas sebagai kontributor utama dunia SEAL Eternal.' },
    { title: 'Referral Program', description: 'Bergabung dalam program referral dan dapatkan rewards menarik dari setiap rekrutmen.' },
  ]

  return (
    <section className="py-24">
      <div className="section-glow">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4 font-display">SEAL ETERNAL CREATOR PROGRAM</p>
          <h2 className="font-display text-3xl md:text-5xl text-text-main mb-12">Create. Play. Inspire.</h2>
          <p className="text-text-muted leading-relaxed max-w-2xl mx-auto mb-12">
            Para kreatur membantu membangun komunitas dan membuat konten yang menginspirasi jutaan pemain di seluruh Indonesia.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {items.map((item, i) => (
              <div key={i} className="glass rounded-xl p-6 text-left">
                <h3 className="text-gold font-display text-lg mb-2">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <Link to="/community" className="inline-flex items-center gap-2 px-8 py-3 border border-gold/40 text-gold rounded-lg hover:bg-gold/10 transition-colors">
            BECOME A CREATOR
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CreatorSection
