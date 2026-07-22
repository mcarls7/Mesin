import { CLASSES } from '../data/mockData'

const ClassSection = () => {
  return (
    <section className="py-24">
      <div className="section-glow">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4 font-display">CHOOSE YOUR PATH</p>
          <h2 className="font-display text-3xl md:text-5xl text-text-main mb-12">Select Your Class</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLASSES.map((cls) => (
              <div
                key={cls.id}
                className="glass rounded-2xl p-6 overflow-hidden relative group hover:border-gold/30 transition-all hover:scale-105 shadow-lg shadow-black/40"
              >
                <div className={`h-24 rounded-xl bg-gradient-to-r ${cls.color} flex items-center justify-center mb-4`}>
                  <span className="text-3xl font-display font-bold text-white/90 drop-shadow-lg">
                    {cls.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-gold font-display text-xl mb-1">{cls.name}</h3>
                <p className="text-text-muted text-xs uppercase tracking-wider mb-2">{cls.role}</p>
                <p className="text-text-muted text-sm leading-relaxed">{cls.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClassSection
