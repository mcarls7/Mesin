import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/top-up" element={<TopUpPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/guides" element={<GuidesPage />} />
        <Route path="/database" element={<DatabasePage />} />
        <Route path="/ranking" element={<RankingPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/seal-online" element={<SealOnlinePage />} />
        <Route path="/seal-online-indonesia" element={<SealOnlineIndonesiaPage />} />
        <Route path="/seal-online-id" element={<SealOnlineIdPage />} />
        <Route path="/seal-online-eternal" element={<SealOnlineEternalPage />} />
        <Route path="/garudapay" element={<GarudaPayPage />} />
        <Route path="/garudapay-reborn" element={<GarudaPayRebornPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

import Home from './pages/Home'
import Game from './pages/Game'
import DownloadPage from './pages/DownloadPage'
import RegisterPage from './pages/RegisterPage'
import TopUpPage from './pages/TopUpPage'
import NewsPage from './pages/NewsPage'
import EventsPage from './pages/EventsPage'
import GuidesPage from './pages/GuidesPage'
import DatabasePage from './pages/DatabasePage'
import RankingPage from './pages/RankingPage'
import CommunityPage from './pages/CommunityPage'
import SupportPage from './pages/SupportPage'
import SealOnlinePage from './pages/SealOnlinePage'
import SealOnlineIndonesiaPage from './pages/SealOnlineIndonesiaPage'
import SealOnlineIdPage from './pages/SealOnlineIdPage'
import SealOnlineEternalPage from './pages/SealOnlineEternalPage'
import GarudaPayPage from './pages/GarudaPayPage'
import GarudaPayRebornPage from './pages/GarudaPayRebornPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import TermsPage from './pages/TermsPage'
import PrivacyPage from './pages/PrivacyPage'
import NotFound from './pages/NotFound'

export default App
