import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.name && form.email && form.message) {
      setSubmitted(true)
      setTimeout(() => {
        setForm({ name: '', email: '', message: '' })
        setSubmitted(false)
      }, 3000)
    }
  }

  return (
    <div className="min-h-screen bg-fitness-black pt-32 px-6 pb-20">
      <div className="max-w-2xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-display font-black mb-4">CONTACT US</h1>
          <p className="text-dark-400">Questions? Let's talk.</p>
        </motion.div>

        {submitted ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-8 bg-fitness-dark rounded-lg border border-neon-red/50 text-center"
          >
            <p className="text-2xl font-display font-black mb-2">MESSAGE RECEIVED</p>
            <p className="text-dark-400">We'll get back to you within 24 hours.</p>
          </motion.div>
        ) : (
          <motion.form 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-fitness-dark rounded-lg p-8 border border-fitness-dark/50"
          >
            <div>
              <label className="block text-sm font-600 mb-2">Name</label>
              <input 
                type="text" 
                value={form.name}
                onChange={(e) => setForm({...form, name: e.target.value})}
                className="w-full px-4 py-3 bg-fitness-black border border-fitness-dark/50 rounded focus:border-neon-red outline-none transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-600 mb-2">Email</label>
              <input 
                type="email" 
                value={form.email}
                onChange={(e) => setForm({...form, email: e.target.value})}
                className="w-full px-4 py-3 bg-fitness-black border border-fitness-dark/50 rounded focus:border-neon-red outline-none transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-600 mb-2">Message</label>
              <textarea 
                rows="5"
                value={form.message}
                onChange={(e) => setForm({...form, message: e.target.value})}
                className="w-full px-4 py-3 bg-fitness-black border border-fitness-dark/50 rounded focus:border-neon-red outline-none transition resize-none"
                required
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-3 bg-neon-red text-black font-700 rounded hover:bg-neon-red/90 transition"
            >
              SEND MESSAGE
            </button>
          </motion.form>
        )}
      </div>
    </div>
  )
}
