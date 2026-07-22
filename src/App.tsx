import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

const Home = lazy(() => import('./pages/Home'))
const Game = lazy(() => import('./pages/Game'))
const DownloadPage = lazy(() => import('./pages/DownloadPage'))
const RegisterPage = lazy(() => import('./pages/RegisterPage'))
const TopUpPage = lazy(() => import('./pages/TopUpPage'))
const NewsPage = lazy(() => import('./pages/NewsPage'))
const EventsPage = lazy(() => import('./pages/EventsPage'))
const GuidesPage = lazy(() => import('./pages/GuidesPage'))
const DatabasePage = lazy(() => import('./pages/DatabasePage'))
const RankingPage = lazy(() => import('./pages/RankingPage'))
const CommunityPage = lazy(() => import('./pages/CommunityPage'))
const SupportPage = lazy(() => import('./pages/SupportPage'))
const SealOnlinePage = lazy(() => import('./pages/SealOnlinePage'))
const SealOnlineIndonesiaPage = lazy(() => import('./pages/SealOnlineIndonesiaPage'))
const SealOnlineIdPage = lazy(() => import('./pages/SealOnlineIdPage'))
const SealOnlineEternalPage = lazy(() => import('./pages/SealOnlineEternalPage'))
const GarudaPayPage = lazy(() => import('./pages/GarudaPayPage'))
const GarudaPayRebornPage = lazy(() => import('./pages/GarudaPayRebornPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const TermsPage = lazy(() => import('./pages/TermsPage'))
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'))
const NotFound = lazy(() => import('./pages/NotFound'))

const Loading = () => (
  <div className="min-h-screen flex items-center justify-center bg-midnight">
    <div className="text-gold font-display text-2xl animate-pulse">Loading...</div>
  </div>
)

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Suspense fallback={<Loading />}><Home /></Suspense>} />
        <Route path="/game" element={<Suspense fallback={<Loading />}><Game /></Suspense>} />
        <Route path="/download" element={<Suspense fallback={<Loading />}><DownloadPage /></Suspense>} />
        <Route path="/register" element={<Suspense fallback={<Loading />}><RegisterPage /></Suspense>} />
        <Route path="/top-up" element={<Suspense fallback={<Loading />}><TopUpPage /></Suspense>} />
        <Route path="/news" element={<Suspense fallback={<Loading />}><NewsPage /></Suspense>} />
        <Route path="/events" element={<Suspense fallback={<Loading />}><EventsPage /></Suspense>} />
        <Route path="/guides" element={<Suspense fallback={<Loading />}><GuidesPage /></Suspense>} />
        <Route path="/database" element={<Suspense fallback={<Loading />}><DatabasePage /></Suspense>} />
        <Route path="/ranking" element={<Suspense fallback={<Loading />}><RankingPage /></Suspense>} />
        <Route path="/community" element={<Suspense fallback={<Loading />}><CommunityPage /></Suspense>} />
        <Route path="/support" element={<Suspense fallback={<Loading />}><SupportPage /></Suspense>} />
        <Route path="/seal-online" element={<Suspense fallback={<Loading />}><SealOnlinePage /></Suspense>} />
        <Route path="/seal-online-indonesia" element={<Suspense fallback={<Loading />}><SealOnlineIndonesiaPage /></Suspense>} />
        <Route path="/seal-online-id" element={<Suspense fallback={<Loading />}><SealOnlineIdPage /></Suspense>} />
        <Route path="/seal-online-eternal" element={<Suspense fallback={<Loading />}><SealOnlineEternalPage /></Suspense>} />
        <Route path="/garudapay" element={<Suspense fallback={<Loading />}><GarudaPayPage /></Suspense>} />
        <Route path="/garudapay-reborn" element={<Suspense fallback={<Loading />}><GarudaPayRebornPage /></Suspense>} />
        <Route path="/about" element={<Suspense fallback={<Loading />}><AboutPage /></Suspense>} />
        <Route path="/contact" element={<Suspense fallback={<Loading />}><ContactPage /></Suspense>} />
        <Route path="/terms" element={<Suspense fallback={<Loading />}><TermsPage /></Suspense>} />
        <Route path="/privacy" element={<Suspense fallback={<Loading />}><PrivacyPage /></Suspense>} />
        <Route path="*" element={<Suspense fallback={<Loading />}><NotFound /></Suspense>} />
      </Route>
    </Routes>
  )
}

export default App
