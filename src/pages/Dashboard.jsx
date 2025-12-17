import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'


export default function Dashboard({ onLogout }) {
  const [currentTab, setCurrentTab] = useState('overview')
  const [stats, setStats] = useState({ strength: 145, volume: 12450, sessions: 28, consistency: 94 })
  const [searchTerm, setSearchTerm] = useState('')
  const [program, setProgram] = useState(null)
const [selectedDay, setSelectedDay] = useState(null)

useEffect(() => {
  const savedProgram = localStorage.getItem('selectedProgram')
  if (savedProgram) {
    setProgram(JSON.parse(savedProgram))
  }
}, [])

  // Simulate live stat updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        strength: prev.strength + Math.floor(Math.random() * 5 - 2),
        volume: prev.volume + Math.floor(Math.random() * 200 - 100),
        sessions: prev.sessions,
        consistency: Math.min(100, Math.max(70, prev.consistency + Math.floor(Math.random() * 6 - 3)))
      }))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const progressData = [
    { week: 'W1', strength: 130, volume: 11000 },
    { week: 'W2', strength: 135, volume: 11500 },
    { week: 'W3', strength: 140, volume: 12000 },
    { week: 'W4', strength: 145, volume: 12450 }
  ]
const workoutPlan = {
  MON: {
    name: 'Upper Body Strength',
    exercises: [
      { name: 'Bench Press', sets: 5, reps: '5 reps' },
      { name: 'Overhead Press', sets: 4, reps: '6 reps' },
      { name: 'Pull Ups', sets: 4, reps: 'AMRAP' }
    ]
  },
  TUE: {
    name: 'Lower Body Power',
    exercises: [
      { name: 'Back Squat', sets: 5, reps: '5 reps' },
      { name: 'Romanian Deadlift', sets: 4, reps: '8 reps' },
      { name: 'Walking Lunges', sets: 3, reps: '20 steps' }
    ]
  },
  WED: {
    name: 'Recovery & Mobility',
    exercises: [
      { name: 'Hip Mobility', sets: 3, reps: '10 min' },
      { name: 'Shoulder Mobility', sets: 3, reps: '10 min' },
      { name: 'Core Activation', sets: 3, reps: '12 reps' }
    ]
  },
  THU: {
    name: 'Upper Hypertrophy',
    exercises: [
      { name: 'Incline DB Press', sets: 4, reps: '10 reps' },
      { name: 'Lat Pulldown', sets: 4, reps: '12 reps' },
      { name: 'Lateral Raises', sets: 4, reps: '15 reps' }
    ]
  },
  FRI: {
    name: 'Lower Hypertrophy',
    exercises: [
      { name: 'Front Squat', sets: 4, reps: '8 reps' },
      { name: 'Leg Curl', sets: 4, reps: '12 reps' },
      { name: 'Calf Raises', sets: 5, reps: '15 reps' }
    ]
  }
}

  const programs = [
    { id: 1, name: 'STRENGTH CORE', progress: 85, status: 'ACTIVE', weeks: 'Week 11/12' },
    { id: 2, name: 'Bench Press Specialization', progress: 100, status: 'COMPLETED', weeks: 'Finished' },
    { id: 3, name: 'Mobility Advancement', progress: 45, status: 'ACTIVE', weeks: 'Week 7/16' }
  ]

  const filteredPrograms = programs.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const getSidebarItems = () => [
    { id: 'overview', label: 'Overview', icon: '▌' },
    { id: 'programs', label: 'My Programs', icon: '▬' },
    { id: 'schedule', label: 'Schedule', icon: '○' },
    { id: 'settings', label: 'Settings', icon: '◆' }
  ]

  return (
    <div className="flex h-screen bg-fitness-black">
      {/* Sidebar */}
      <motion.div 
        initial={{ x: -256 }}
        animate={{ x: 0 }}
        className="w-64 bg-fitness-dark border-r border-fitness-dark/50 p-6 flex flex-col"
      >
        <div className="mb-12">
          <p className="text-2xl font-display font-black text-neon-red">FORGEX</p>
        </div>

        <nav className="flex-1 space-y-3">
          {getSidebarItems().map(item => (
            <button
              key={item.id}
              onClick={() => setCurrentTab(item.id)}
              className={`w-full text-left px-4 py-3 rounded transition font-600 ${
                currentTab === item.id 
                  ? 'bg-neon-red text-black' 
                  : 'text-dark-300 hover:text-white hover:bg-fitness-dark/50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button 
          onClick={onLogout}
          className="w-full px-4 py-3 border border-neon-red text-neon-red rounded hover:bg-neon-red hover:text-black transition font-600"
        >
          LOGOUT
        </button>
      </motion.div>


      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-fitness-dark border-b border-fitness-dark/50 px-8 py-6 flex justify-between items-center">
          <h2 className="text-2xl font-display font-black capitalize">
            {currentTab === 'overview' && 'PROGRESS OVERVIEW'}
            {currentTab === 'programs' && 'YOUR PROGRAMS'}
            {currentTab === 'schedule' && 'TRAINING SCHEDULE'}
            {currentTab === 'settings' && 'SETTINGS'}
          </h2>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="font-600">ATHLETE</p>
              <p className="text-sm text-dark-400">Level: INTERMEDIATE</p>
            </div>
          </div>
        </div>
{program && (
  <div className="p-6 bg-dark-900 border border-neon-red/40 rounded-xl mb-8">
    <h3 className="text-2xl font-display font-black mb-2 text-neon-red">
      Active Program
    </h3>
    <p className="text-white font-600">{program.name}</p>
    <p className="text-dark-400 text-sm">{program.weeks} • {program.level}</p>
    <p className="text-dark-300 mt-2">{program.focus}</p>
  </div>
)}
        {/* Content Area */}
        <div className="flex-1 overflow-auto p-8">
          <AnimatePresence mode="wait">
            {currentTab === 'overview' && (
              <motion.div key="overview" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-8">
                {/* Stat Cards */}
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { label: 'CURRENT 1RM', value: `${stats.strength}kg`, change: '+12kg', color: 'neon-red' },
                    { label: 'WEEKLY VOLUME', value: `${stats.volume.toLocaleString()}lbs`, change: '+2%', color: 'neon-red' },
                    { label: 'SESSIONS', value: stats.sessions, change: 'On Track', color: 'neon-green' },
                    { label: 'CONSISTENCY', value: `${stats.consistency}%`, change: 'Strong', color: 'neon-green' }
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="p-6 bg-fitness-dark rounded-lg border border-fitness-dark/50"
                    >
                      <p className="text-dark-400 text-sm font-600 mb-2">{stat.label}</p>
                      <p className={`text-3xl font-display font-black mb-2 text-${stat.color}`}>{stat.value}</p>
                      <p className={`text-sm font-500 text-${stat.color}`}>{stat.change}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Charts */}
                <div className="grid lg:grid-cols-2 gap-6">
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="p-6 bg-fitness-dark rounded-lg border border-fitness-dark/50"
                  >
                    <h3 className="font-display font-black mb-6">STRENGTH PROGRESSION</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={progressData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1a1f3a" />
                        <XAxis dataKey="week" stroke="#6b7280" />
                        <YAxis stroke="#6b7280" />
                        <Tooltip contentStyle={{ backgroundColor: '#1a1f3a', border: 'none', borderRadius: '8px', color: '#fff' }} />
                        <Line type="monotone" dataKey="strength" stroke="#ff0040" strokeWidth={3} dot={{ fill: '#ff0040', r: 6 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="p-6 bg-fitness-dark rounded-lg border border-fitness-dark/50"
                  >
                    <h3 className="font-display font-black mb-6">VOLUME ACCUMULATED</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={progressData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1a1f3a" />
                        <XAxis dataKey="week" stroke="#6b7280" />
                        <YAxis stroke="#6b7280" />
                        <Tooltip contentStyle={{ backgroundColor: '#1a1f3a', border: 'none', borderRadius: '8px', color: '#fff' }} />
                        <Bar dataKey="volume" fill="#ff0040" radius={[8, 8, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {currentTab === 'programs' && (
              <motion.div key="programs" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Search programs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 bg-fitness-dark border border-fitness-dark/50 rounded focus:border-neon-red outline-none transition"
                  />
                </div>

                <div className="space-y-4">
                  {filteredPrograms.map(program => (
                    <motion.div
                      key={program.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="p-6 bg-fitness-dark rounded-lg border border-fitness-dark/50"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-display font-black">{program.name}</h3>
                          <p className="text-dark-400 text-sm">{program.weeks}</p>
                        </div>
                        <span className={`px-3 py-1 rounded text-xs font-700 ${program.status === 'ACTIVE' ? 'bg-neon-red text-black' : 'bg-neon-green text-black'}`}>
                          {program.status}
                        </span>
                      </div>
                      <div className="bg-fitness-black rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${program.progress}%` }}
                          transition={{ duration: 1 }}
                          className="h-full bg-neon-red rounded-full"
                        />
                      </div>
                      <p className="text-sm text-dark-400 mt-2">{program.progress}% Complete</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

           {currentTab === 'schedule' && (
  <motion.div key="schedule" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <div className="bg-fitness-dark rounded-lg p-8 border border-fitness-dark/50">
      <p className="text-dark-400">Current Week</p>
      <div className="grid md:grid-cols-7 gap-4 mt-6">
        {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day, i) => (
          <div
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`p-4 rounded text-center font-600 cursor-pointer transition ${
              i < 5
                ? 'bg-neon-red/20 border border-neon-red hover:bg-neon-red hover:text-black'
                : 'bg-fitness-black opacity-50 cursor-not-allowed'
            }`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  </motion.div>
)}
{selectedDay && workoutPlan[selectedDay] && (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="mt-8 p-6 bg-fitness-black border border-neon-red rounded-lg"
  >
    <h3 className="text-2xl font-display font-black text-neon-red mb-4">
      {selectedDay} – {workoutPlan[selectedDay].name}
    </h3>

    <div className="space-y-4">
      {workoutPlan[selectedDay].exercises.map((ex, idx) => (
        <div
          key={idx}
          className="flex justify-between items-center p-4 bg-fitness-dark rounded border border-fitness-dark/50"
        >
          <p className="font-600">{ex.name}</p>
          <p className="text-dark-400 text-sm">
            {ex.sets} × {ex.reps}
          </p>
        </div>
      ))}
    </div>

    <button
      onClick={() => setSelectedDay(null)}
      className="mt-6 px-6 py-3 border border-neon-red text-neon-red hover:bg-neon-red hover:text-black transition font-600"
    >
      CLOSE WORKOUT
    </button>
  </motion.div>
)}


            {currentTab === 'settings' && (
              <motion.div key="settings" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-2xl">
                <div className="bg-fitness-dark rounded-lg p-8 border border-fitness-dark/50 space-y-6">
                  <div>
                    <label className="block font-600 mb-2">Current 1RM</label>
                    <input type="number" defaultValue="145" className="w-full px-4 py-2 bg-fitness-black border border-fitness-dark/50 rounded" />
                  </div>
                  <div>
                    <label className="block font-600 mb-2">Training Days Per Week</label>
                    <select className="w-full px-4 py-2 bg-fitness-black border border-fitness-dark/50 rounded">
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                    </select>
                  </div>
                  <button className="w-full py-3 bg-neon-red text-black font-700 rounded hover:bg-neon-red/90 transition">
                    SAVE CHANGES
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
