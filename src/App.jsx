import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import Events from './pages/Events'
import Gallery from './pages/Gallery'
import Schedule from './pages/Schedule'
import Team from './pages/Team'
import Contact from './pages/Contact'
import Register from './pages/Register'

function App() {
  const location = useLocation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const [pulseOpacity, setPulseOpacity] = useState(1);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseOpacity(prev => prev === 1 ? 0.6 : 1);
    }, 1500);
    
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900">
      <div className="text-center">
        {/* Logo Image */}
        <div className="mb-8">
          <div className="w-40 h-40 mx-auto flex items-center justify-center">
            <img 
              src="/logo pic.png" 
              alt="Magnifest Logo" 
              className="rounded-xs shadow-lg"
            />
          </div>
        </div>
        
        {/* Title */}
        <h1 
          className="text-4xl font-bold text-white mb-4"
          style={{ opacity: pulseOpacity, transition: 'opacity 0.7s ease-in-out' }}
        >
          MAGNIFEST <span className="text-purple-500">2025</span>
        </h1>
        
        {/* Underline */}
        <div className="w-48 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full overflow-hidden">
          <div className="h-full w-full bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App