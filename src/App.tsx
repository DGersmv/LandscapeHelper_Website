import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import SiteLayout from './components/SiteLayout'
import HelpLayout from './components/HelpLayout'
import Home from './pages/Home'
import Download from './pages/Download'
import Docs from './pages/Docs'
import Examples from './pages/Examples'
import Payment from './pages/Payment'
import HelpOrientation from './pages/help/Orientation'
import HelpDistribution from './pages/help/Distribution'
import HelpGround from './pages/help/Ground'
import HelpGdl from './pages/help/Gdl'
import HelpDimensions from './pages/help/Dimensions'
import HelpSelection from './pages/help/Selection'

function App() {
  const location = useLocation()

  // Check if we're in embed mode
  const isEmbedMode = new URLSearchParams(location.search).get('embed') === '1' || 
                      window.top !== window.self

  useEffect(() => {
    // Disable analytics tracking in embed mode
    if (isEmbedMode) {
      // Disable any analytics tracking here
      console.log('Analytics disabled - embed mode detected')
    }
  }, [isEmbedMode])

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  // Use HelpLayout for help pages in embed mode
  if (location.pathname.startsWith('/help/') && isEmbedMode) {
    return (
      <HelpLayout>
        <Routes>
          <Route path="/help/orientation" element={<HelpOrientation />} />
          <Route path="/help/distribution" element={<HelpDistribution />} />
          <Route path="/help/ground" element={<HelpGround />} />
          <Route path="/help/gdl" element={<HelpGdl />} />
          <Route path="/help/dimensions" element={<HelpDimensions />} />
          <Route path="/help/selection" element={<HelpSelection />} />
        </Routes>
      </HelpLayout>
    )
  }

  // Use SiteLayout for all other pages
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/download" element={<Download />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/examples" element={<Examples />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/help/orientation" element={<HelpOrientation />} />
        <Route path="/help/distribution" element={<HelpDistribution />} />
        <Route path="/help/ground" element={<HelpGround />} />
        <Route path="/help/gdl" element={<HelpGdl />} />
        <Route path="/help/dimensions" element={<HelpDimensions />} />
        <Route path="/help/selection" element={<HelpSelection />} />
      </Routes>
    </SiteLayout>
  )
}

export default App



