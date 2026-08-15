import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Container from './ui/Container';

const journeySteps = [
  { label: 'REGISTER', color: 'from-green-600 to-green-500' },
  { label: 'SUBMIT DETAILS', color: 'from-green-500 to-emerald-500' },
  { label: 'REGISTRATION SUCCESS', color: 'from-emerald-500 to-teal-500' },
  { label: 'CONTINUE TO EARNPEPE', color: 'from-teal-500 to-cyan-600' },
  { label: 'CREATE ACCOUNT', color: 'from-cyan-600 to-blue-600' },
  { label: 'LOGIN', color: 'from-blue-600 to-violet-600' },
  { label: 'OPEN DASHBOARD', color: 'from-violet-600 to-purple-600' },
  { label: 'WATCH AVAILABLE ADS / VIDEOS', color: 'from-purple-600 to-pink-600' },
  { label: 'EARN PEPE COINS', color: 'from-pink-600 to-rose-500' },
  { label: 'COMPLETE REQUIRED PROCESS', color: 'from-rose-500 to-orange-500' },
  { label: 'ELIGIBLE CASHBACK CLAIM', color: 'from-orange-500 to-yellow-500' },
];

export default function JourneyTimeline() {
  return (
    <section className="pt-12 pb-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #050a06 0%, #020804 100%)' }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-green-500/20 to-transparent pointer-events-none" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-bold uppercase tracking-widest mb-4">
            🗺️ Your Journey
          </span>
          <h2 className="text-3xl font-black text-white mb-4">
            YOUR COMPLETE <span className="green-text-gradient">JOURNEY</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Understand the entire process at a glance. From registration to eligible
            cashback claim - all in one flow.
          </p>
        </motion.div>

        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-6 lg:gap-8 max-w-md md:max-w-4xl lg:max-w-5xl mx-auto items-center md:items-stretch">
          {journeySteps.map((step, index) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.07 }}
              className="flex flex-col items-center w-full"
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                className={`relative w-full text-center px-6 py-3.5 rounded-2xl bg-gradient-to-r ${step.color} text-black font-bold text-sm shadow-lg`}
              >
                <span>{step.label}</span>
                {/* Final step special badge */}
                {index === journeySteps.length - 1 && (
                  <span className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/20 text-white text-xs font-semibold">
                    🏆 GOAL
                  </span>
                )}
              </motion.div>

              {index < journeySteps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.1 }}
                  className="my-1.5 text-green-500/60 md:hidden"
                  aria-hidden="true"
                >
                  <ArrowDown size={20} />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-gray-500 mt-8 max-w-sm mx-auto"
        >
          * Cashback eligibility is subject to applicable terms. Not all users
          may qualify.
        </motion.p>
      </Container>
    </section>
  );
}
