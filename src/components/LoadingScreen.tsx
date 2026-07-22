const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[70] bg-midnight flex flex-col items-center justify-center gap-6">
      <div className="relative">
        <div className="w-20 h-20 rounded-full border-4 border-gold/20 border-t-gold animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display font-bold text-gold text-xl">S</span>
        </div>
      </div>
      <div className="text-center">
        <h1 className="font-display text-2xl text-gold mb-1">SEAL ONLINE</h1>
        <p className="text-text-muted text-sm tracking-widest">ETERNAL GARUDAPAY</p>
      </div>
      <div className="flex items-center gap-1">
        <div className="w-2 h-2 rounded-full bg-gold animate-bounce" style={{ animationDelay: '0ms' }} />
        <div className="w-2 h-2 rounded-full bg-gold animate-bounce" style={{ animationDelay: '150ms' }} />
        <div className="w-2 h-2 rounded-full bg-gold animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  )
}

export default LoadingScreen
