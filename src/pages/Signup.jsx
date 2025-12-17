import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate, Link } from 'react-router-dom'

export default function Signup({ onLogin }) {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!form.name || !form.email || !form.password || !form.confirm) {
      setError('All fields required')
      return
    }

    if (form.password !== form.confirm) {
      setError('Passwords do not match')
      return
    }

    if (form.password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    setLoading(true)
    setTimeout(() => {
      onLogin({ name: form.name, email: form.email })
      navigate('/')
    }, 1000)
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
          <h1 className="text-3xl font-display font-black">JOIN NOW</h1>
          <p className="text-dark-400 mt-2">Start your transformation</p>
        </div>

        {error && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 p-3 bg-neon-red/20 border border-neon-red text-neon-red rounded text-sm"
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-600 mb-2">Full Name</label>
            <input 
              type="text" 
              placeholder="Your name" 
              value={form.name}
              onChange={(e) => setForm({...form, name: e.target.value})}
              className="w-full px-4 py-3 bg-fitness-dark border border-fitness-dark/50 rounded focus:border-neon-red outline-none transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-600 mb-2">Email</label>
            <input 
              type="email" 
              placeholder="your@email.com" 
              value={form.email}
              onChange={(e) => setForm({...form, email: e.target.value})}
              className="w-full px-4 py-3 bg-fitness-dark border border-fitness-dark/50 rounded focus:border-neon-red outline-none transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-600 mb-2">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={form.password}
              onChange={(e) => setForm({...form, password: e.target.value})}
              className="w-full px-4 py-3 bg-fitness-dark border border-fitness-dark/50 rounded focus:border-neon-red outline-none transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-600 mb-2">Confirm Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={form.confirm}
              onChange={(e) => setForm({...form, confirm: e.target.value})}
              className="w-full px-4 py-3 bg-fitness-dark border border-fitness-dark/50 rounded focus:border-neon-red outline-none transition"
              required
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-3 bg-neon-red text-black font-700 rounded hover:bg-neon-red/90 transition disabled:opacity-50"
          >
            {loading ? 'CREATING ACCOUNT...' : 'CREATE ACCOUNT'}
          </button>
        </form>

        <p className="text-center mt-8 text-dark-400">
          Already joined? <Link to="/login" className="text-neon-red font-600 hover:underline">Sign in</Link>
        </p>
      </motion.div>
    </div>
  )
}
