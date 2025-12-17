import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate, Link } from 'react-router-dom'

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email && password) {
      setLoading(true)
      setTimeout(() => {
        onLogin({ email, name: email.split('@')[0] })
        navigate('/')
      }, 1000)
    }
  }

  return (
    <div className="min-h-screen bg-fitness-black flex items-center justify-center pt-20 px-6 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 right-20 w-80 h-80 bg-neon-red rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md z-10"
      >
        <div className="text-center mb-12">
          <Link to="/" className="text-3xl font-display font-black text-neon-red inline-block mb-8">
            FORGEX
          </Link>
          <h1 className="text-3xl font-display font-black">SIGN IN</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-600 mb-2">Email</label>
            <input 
              type="email" 
              placeholder="your@email.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-fitness-dark border border-fitness-dark/50 rounded focus:border-neon-red outline-none transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-600 mb-2">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-fitness-dark border border-fitness-dark/50 rounded focus:border-neon-red outline-none transition"
              required
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-3 bg-neon-red text-black font-700 rounded hover:bg-neon-red/90 transition disabled:opacity-50"
          >
            {loading ? 'SIGNING IN...' : 'SIGN IN'}
          </button>
        </form>

        <p className="text-center mt-8 text-dark-400">
          No account? <Link to="/signup" className="text-neon-red font-600 hover:underline">Create one</Link>
        </p>
      </motion.div>
    </div>
  )
}
