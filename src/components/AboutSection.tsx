const AboutSection = () => {
  const stats = [
    { value: '10M+', label: 'Players' },
    { value: '500+', label: 'Quests' },
    { value: '50+', label: 'Classes' },
    { value: '24/7', label: 'Online' },
  ]

  return (
    <section className="py-24">
      <div className="section-glow">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4 font-display">WELCOME TO A NEW ERA</p>
          <h2 className="font-display text-3xl md:text-5xl text-text-main mb-6">A World Above Ordinary</h2>
          <div className="max-w-3xl mx-auto space-y-4 mb-16">
            <p className="text-text-muted leading-relaxed">
              SEAL Online Eternal adalah dunia di mana para pemain berpetualang, menciptakan karakter unik, meningkatkan level, mengumpulkan equipment terbaik, bergabung dengan guild, bermain bersama teman, mengikuti event, mengalahkan boss epik, dan bersaing dengan pemain lain.
            </p>
            <p className="text-text-muted leading-relaxed">
              Dunia yang tidak pernah tidur, pertempuran yang tak pernah berakhir. Selamat datang di era baru SEAL Online Eternal GarudaPay — tempat legenda bertahan selamanya.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="glass rounded-xl p-6">
                <p className="text-4xl md:text-5xl font-display text-gold mb-2">{stat.value}</p>
                <p className="text-text-muted text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
