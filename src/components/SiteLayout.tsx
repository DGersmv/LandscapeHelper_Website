import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

interface SiteLayoutProps {
  children: ReactNode
}

function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="site-layout">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default SiteLayout
















