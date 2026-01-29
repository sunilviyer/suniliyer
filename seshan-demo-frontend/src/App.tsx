import { useState } from 'react'
import { AppLayout } from './components/layout/AppLayout'
import { DashboardView } from './views/DashboardView'
import { HoldingsView } from './views/HoldingsView'
import { MarketDataView } from './views/MarketDataView'
import { NewsIntelligenceView } from './views/NewsIntelligenceView'
import { JobsStatusView } from './views/JobsStatusView'
import { AIAgentsView } from './views/AIAgentsView'
import { AlertsView } from './views/AlertsView'
import { Toaster } from './components/ui/toaster'
import { Button } from './components/ui/button'

function App() {
  const [currentView, setCurrentView] = useState('dashboard')

  const getBreadcrumbs = () => {
    switch (currentView) {
      case 'dashboard': return ['Portfolio', 'Dashboard']
      case 'market': return ['Intelligence', 'Market Data']
      case 'news': return ['Intelligence', 'News']
      case 'holdings': return ['Portfolio', 'Holdings']
      case 'jobs': return ['System', 'Status']
      case 'agents': return ['System', 'AI Agents']
      case 'alerts': return ['System', 'Alerts']
      default: return ['Portfolio', currentView.charAt(0).toUpperCase() + currentView.slice(1)]
    }
  }

  const renderView = () => {
    switch (currentView) {
      case 'dashboard': return <DashboardView />
      case 'market': return <MarketDataView />
      case 'news': return <NewsIntelligenceView />
      case 'holdings': return <HoldingsView />
      case 'jobs': return <JobsStatusView />
      case 'agents': return <AIAgentsView />
      case 'alerts': return <AlertsView />
      default: return <div className="flex items-center justify-center h-[50vh] text-muted-foreground">Page under construction via Demo</div>
    }
  }

  const getPrimaryAction = () => {
    if (currentView === 'dashboard') {
      return <Button variant="default" onClick={() => setCurrentView('holdings')}>Go to Holdings</Button>
    }
    return null
  }

  return (
    <>
      <AppLayout
        currentView={currentView}
        onChangeView={setCurrentView}
        breadcrumbs={getBreadcrumbs()}
        primaryAction={getPrimaryAction()}
      >
        {renderView()}
      </AppLayout>
      <Toaster />
    </>
  )
}

export default App
