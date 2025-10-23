import { ReactNode } from 'react'

interface HelpLayoutProps {
  children: ReactNode
}

function HelpLayout({ children }: HelpLayoutProps) {
  return (
    <div className="help-layout">
      {children}
    </div>
  )
}

export default HelpLayout









