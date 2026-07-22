const ServerStatus = () => {
  const [online, setOnline] = useState(true)
  const [players, setPlayers] = useState(12453)

  useEffect(() => {
    const interval = setInterval(() => {
      setPlayers((prev) => {
        const change = Math.floor(Math.random() * 201) - 100
        return Math.max(10000, Math.min(15000, prev + change))
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed bottom-8 left-8 z-40 hidden md:flex items-center gap-3 glass rounded-full px-4 py-2">
      <div className="relative">
        <div className={`w-2.5 h-2.5 rounded-full ${online ? 'bg-success animate-pulse' : 'bg-red-500'}`} />
        {online && <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-success animate-ping opacity-75" />}
      </div>
      <div className="flex flex-col">
        <span className="text-text-main text-xs font-bold leading-tight">{online ? 'ONLINE' : 'OFFLINE'}</span>
        <span className="text-text-muted text-[10px] leading-tight">{players.toLocaleString()} players</span>
      </div>
    </div>
  )
}

export default ServerStatus
