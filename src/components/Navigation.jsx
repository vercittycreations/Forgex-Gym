import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navigation() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleSectionNav = (id) => {
    if (location.pathname !== '/') {
      navigate('/', { replace: false })
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-0 z-50 w-full bg-fitness-black/95 backdrop-blur border-b border-fitness-dark">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-display font-black text-neon-red">
          FORGEX
        </Link>

        <div className="hidden md:flex gap-12 text-sm font-500">
          <button onClick={() => handleSectionNav('reality')} className="hover:text-neon-red transition">
            REALITY
          </button>
          <button onClick={() => handleSectionNav('results')} className="hover:text-neon-red transition">
            RESULTS
          </button>
          <button onClick={() => handleSectionNav('system')} className="hover:text-neon-red transition">
            SYSTEM
          </button>
          <button onClick={() => handleSectionNav('programs')} className="hover:text-neon-red transition">
            PROGRAMS
          </button>
        </div>

        <div className="flex gap-4">
          <Link
            to="/login"
            className="px-6 py-2 text-sm font-600 border border-neon-red text-neon-red hover:bg-neon-red hover:text-black transition"
          >
            LOGIN
          </Link>
          <Link
            to="/signup"
            className="px-6 py-2 text-sm font-600 bg-neon-red text-black hover:bg-neon-red/80 transition"
          >
            START
          </Link>
        </div>
      </div>
    </nav>
  )
}
