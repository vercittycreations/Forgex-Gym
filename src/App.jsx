import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Contact from './pages/Contact'

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check localStorage on mount
    const savedAuth = localStorage.getItem('forgexAuth')
    if (savedAuth === 'true') {
      setIsAuthenticated(true)
    }
    setLoading(false)
  }, [])

  const handleLogin = (userData) => {
    setIsAuthenticated(true)
    localStorage.setItem('forgexAuth', 'true')
    localStorage.setItem('forgexUser', JSON.stringify(userData))
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('forgexAuth')
    localStorage.removeItem('forgexUser')
  }

  if (loading) {
    return (
      <div className="h-screen bg-fitness-black flex items-center justify-center">
        <div className="text-white text-xl font-display font-bold">FORGEX</div>
      </div>
    )
  }

  return (
    <Router>
      <div className="bg-fitness-black min-h-screen text-white">
        {isAuthenticated ? (
          <Dashboard onLogout={handleLogout} />
        ) : (
          <>
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/signup" element={<Signup onLogin={handleLogin} />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  )
}
