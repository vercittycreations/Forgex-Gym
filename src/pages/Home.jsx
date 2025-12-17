import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



export default function Home() {
  const navigate = useNavigate()

const handleProgramSelect = (program) => {
  localStorage.setItem('selectedProgram', JSON.stringify(program))
  navigate('/dashboard')
}
  return (
    <div className="bg-fitness-black">
      {/* Hero */}
      <section className="h-screen bg-gradient-to-b from-fitness-dark to-fitness-black flex items-center justify-center pt-20 px-6 perspective-3d relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-72 h-72 bg-neon-red rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-72 h-72 bg-neon-red rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <h1 className="text-6xl md:text-8xl font-display font-black mb-6 leading-tight">
            ABANDON<br/>THE ILLUSION
          </h1>
          <p className="text-lg md:text-xl text-dark-400 mb-12 max-w-2xl mx-auto">
            Most people don't train. They perform repetitive movements and expect transformation. FORGEX is built for athletes who demand real results.
          </p>
          <Link 
            to="/signup"
            className="inline-block px-10 py-4 bg-neon-red text-black font-700 text-lg hover:bg-neon-red/90 transition transform hover:scale-105"
          >
            JOIN FORGEX
          </Link>
        </motion.div>
      </section>

      {/* Reality Section */}
      <section id="reality" className="py-24 px-6 bg-fitness-black border-t border-fitness-dark">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-display font-black mb-12">THE HARD TRUTH</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xl text-dark-300 mb-6 leading-relaxed">
                  96% of people who start training quit within 3 months. Not because of weakness, but because they never understood what they were training for.
                </p>
                <p className="text-xl text-dark-300 mb-6 leading-relaxed">
                  Generic programs are built for average people. They optimize for popularity, not results. They compromise on intensity because comfort sells.
                </p>
                <p className="text-xl text-dark-400">
                  FORGEX is different. It's built on a simple philosophy: Remove the bullshit. Focus on what works. Track obsessively. Deliver results.
                </p>
              </div>
              <div className="bg-fitness-dark rounded-lg p-8 border border-neon-red/30">
                <div className="space-y-6">
                  <div className="border-l-4 border-neon-red pl-6">
                    <p className="text-dark-400 text-sm">AVERAGE PROGRAM</p>
                    <p className="text-white font-600">Pretty design, mediocre results</p>
                  </div>
                  <div className="border-l-4 border-neon-red pl-6">
                    <p className="text-dark-400 text-sm">FORGEX</p>
                    <p className="text-white font-600">Hardcore methodology, real outcomes</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-24 px-6 bg-fitness-dark">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl font-display font-black mb-16 text-center"
          >
            MEASURED PROGRESS
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: '847', label: 'Active Athletes', description: 'Currently training' },
              { metric: '+43%', label: 'Average Strength Gain', description: 'First 12 weeks' },
              { metric: '95%', label: 'Goal Achievement Rate', description: 'Who complete programs' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 bg-fitness-black rounded-lg border border-neon-red/20"
              >
                <p className="text-5xl font-display font-black text-neon-red mb-3">{item.metric}</p>
                <p className="text-white font-600 mb-2">{item.label}</p>
                <p className="text-dark-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training System */}
      <section id="system" className="py-24 px-6 bg-fitness-black">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl font-display font-black mb-16"
          >
            THE SYSTEM
          </motion.h2>

          <div className="space-y-8">
            {[
              { title: 'ASSESSMENT', desc: 'Real evaluation of your current state. No shortcuts.' },
              { title: 'PLAN', desc: 'Personalized training design based on your goal and capacity.' },
              { title: 'EXECUTION', desc: 'Structured training blocks. Progressive overload. Systematic intensity.' },
              { title: 'TRACKING', desc: 'Daily logging. Weekly review. Monthly analysis.' },
              { title: 'RESULTS', desc: 'Measurable outcomes. Verified progress. No BS metrics.' }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-8 items-start"
              >
                <div className="w-16 h-16 bg-neon-red text-black rounded-full flex items-center justify-center font-display font-black text-xl flex-shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-display font-black mb-2">{step.title}</h3>
                  <p className="text-dark-400">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-24 px-6 bg-fitness-dark">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl font-display font-black mb-16"
          >
            TRAINING PROGRAMS
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'STRENGTH CORE', weeks: '12 Weeks', level: 'Intermediate', focus: 'Pure strength development with progressive overload' },
              { name: 'HYPERTROPHY PRO', weeks: '16 Weeks', level: 'Advanced', focus: 'Muscle building through strategic volume and density' },
              { name: 'ATHLETE ELITE', weeks: '20 Weeks', level: 'Elite', focus: 'Sport-specific athletic development and power' }
            ].map((program, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-fitness-black rounded-lg border border-neon-red/40 hover:border-neon-red/100 transition group"
              >
                <h3 className="text-2xl font-display font-black mb-3 group-hover:text-neon-red transition">{program.name}</h3>
                <p className="text-neon-red text-sm font-600 mb-2">{program.weeks}</p>
                <p className="text-dark-400 text-sm mb-4">For: {program.level}</p>
                <p className="text-dark-300 mb-8">{program.focus}</p>
                <button
  onClick={() => handleProgramSelect(program)}
  className="w-full py-3 border border-neon-red text-neon-red font-600 hover:bg-neon-red hover:text-black transition"
>
  SELECT PROGRAM
</button>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-fitness-black border-t border-fitness-dark">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-black mb-8">
            READY TO STOP PRETENDING?
          </h2>
          <p className="text-xl text-dark-400 mb-12">
            Join 847 athletes who've abandoned mediocrity and committed to real results.
          </p>
          <Link 
            to="/signup"
            className="inline-block px-12 py-4 bg-neon-red text-black font-700 text-lg hover:bg-neon-red/90 transition transform hover:scale-105"
          >
            START YOUR TRANSFORMATION
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
