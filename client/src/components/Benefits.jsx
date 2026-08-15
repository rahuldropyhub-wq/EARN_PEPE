import { motion } from 'framer-motion';
import { UserPlus, ShieldOff, Coins, Gift } from 'lucide-react';
import Container from './ui/Container';

const benefits = [
  {
    icon: UserPlus,
    title: 'Simple Registration',
    desc: 'Complete the campaign registration in a few simple steps. No complicated process.',
    color: 'from-green-500/20 to-green-600/5',
    iconColor: 'text-green-400',
    border: 'border-green-500/20',
  },
  {
    icon: ShieldOff,
    title: 'No Registration Fee',
    desc: 'No registration fee is required for this campaign. Joining is completely free.',
    color: 'from-yellow-500/20 to-yellow-600/5',
    iconColor: 'text-yellow-400',
    border: 'border-yellow-500/20',
  },
  {
    icon: Coins,
    title: 'PEPE Coin Opportunity',
    desc: 'Participate in available EarnPepe activities and earn applicable PEPE coins.',
    color: 'from-orange-500/15 to-orange-600/5',
    iconColor: 'text-orange-400',
    border: 'border-orange-500/20',
  },
  {
    icon: Gift,
    title: 'Cashback Opportunity',
    desc: 'Eligible users may receive ₹100-₹2,000 cashback subject to applicable terms.',
    color: 'from-blue-500/15 to-blue-600/5',
    iconColor: 'text-blue-400',
    border: 'border-blue-500/20',
  },
];

export default function Benefits() {
  return (
    <section className="py-24 section-gradient">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-bold uppercase tracking-widest mb-4">
            💡 Why Join
          </span>
          <h2 className="text-3xl font-black text-white mb-4">
            WHY JOIN THE <span className="green-text-gradient">OPPORTUNITY?</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Here&apos;s why you should participate in the EarnPepe campaign right now.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {benefits.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`relative p-6 rounded-2xl border bg-gradient-to-br ${item.color} ${item.border} group cursor-default transition-all duration-300`}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-white/5 border ${item.border} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                >
                  <Icon size={22} className={item.iconColor} aria-hidden="true" />
                </div>
                <h3 className="font-bold text-white text-base mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
