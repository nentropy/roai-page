import Navbar from './components/navbar'
import Header from './components/header'
import InfoPanel from './components/info-panel'
import Features from './components/features'
import EmailCollection from './components/email-collection'
import Footer from './components/footer'
import BackgroundAnimation from './components/background-animation'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <BackgroundAnimation />
      <div className="relative z-20"> {/* Updated z-index */}
        <Navbar />
        <main>
          <Header />
          <InfoPanel />
          <Features />
          <EmailCollection />
        </main>
        <Footer />
      </div>
    </div>
  )
}

