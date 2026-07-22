import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollProgress from '../components/ScrollProgress'
import CookieConsent from '../components/CookieConsent'
import ServerStatus from '../components/ServerStatus'

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollProgress />
      <ServerStatus />
      <CookieConsent />
    </div>
  )
}

export default MainLayout
