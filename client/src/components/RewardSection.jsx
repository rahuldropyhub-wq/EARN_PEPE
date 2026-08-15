import { motion } from 'framer-motion';
import { Coins } from 'lucide-react';
import Button from './ui/Button';
import Container from './ui/Container';

const CoinRing = ({ size, delay }) => (
  <motion.div
    className="absolute rounded-full border border-yellow-500/20"
    style={{ width: size, height: size }}
    animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
    transition={{ duration: 3, delay, repeat: Infinity, ease: 'easeInOut' }}
  />
);

export default function RewardSection() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="rewards" className="py-24 relative overflow-hidden green-gradient-bg">
      {/* Radial background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-green-500/5 blur-3xl pointer-events-none" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-bold uppercase tracking-widest mb-4">
            🎯 Special Reward Opportunity
          </span>
          <h2 className="text-3xl font-black text-white mb-4">
            WHAT CAN YOU EARN?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Participate in the EarnPepe campaign and explore the available reward
            opportunity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* PEPE Coins card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative card-glass-strong p-6 md:p-8 text-center overflow-hidden group hover:border-yellow-500/40 transition-all duration-300"
          >
            {/* Animated coin rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <CoinRing size={220} delay={0} />
              <CoinRing size={280} delay={0.5} />
              <CoinRing size={340} delay={1} />
            </div>

            <div className="relative">
              <motion.div
                animate={{ rotateY: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-600 flex items-center justify-center shadow-[0_0_30px_rgba(251,191,36,0.6)] text-black font-black text-xl md:text-2xl"
                aria-hidden="true"
              >
                P
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="text-5xl md:text-6xl font-black gold-text leading-none mb-2">
                  50,000
                </div>
                <div className="text-xl md:text-2xl font-bold text-yellow-300 mb-4">
                  PEPE COINS
                </div>
              </motion.div>

              <p className="text-gray-400 text-sm">
                Earn PEPE coins by completing available eligible activities on
                the platform.
              </p>
            </div>
          </motion.div>

          {/* Cashback card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative card-glass-strong p-6 md:p-8 text-center overflow-hidden group hover:border-green-500/40 transition-all duration-300"
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <CoinRing size={220} delay={0.3} />
              <CoinRing size={280} delay={0.8} />
            </div>

            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.6)]"
                aria-hidden="true"
              >
                <Coins className="w-8 h-8 md:w-10 md:h-10 text-black" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="text-[2rem] sm:text-[2.5rem] md:text-5xl font-black green-text-gradient leading-none mb-2 whitespace-nowrap tracking-tighter">
                  ₹100 - ₹2,000
                </div>
                <div className="text-xl md:text-2xl font-bold text-green-300 mb-4">
                  CASHBACK
                </div>
              </motion.div>

              <p className="text-gray-400 text-sm">
                Eligible users may receive applicable cashback after completing
                the required campaign process.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Disclaimer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-gray-500 mt-8 max-w-lg mx-auto"
        >
          * Cashback is subject to eligibility and applicable terms. Reward
          availability, PEPE coin earnings and platform activities may vary.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <Button
            size="lg"
            onClick={() => scrollTo('registration')}
            aria-label="Claim your cashback opportunity"
            className="whitespace-nowrap text-sm sm:text-lg"
          >
            CLAIM YOUR OPPORTUNITY →
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
