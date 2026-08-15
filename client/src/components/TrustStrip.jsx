import { motion } from 'framer-motion';
import { ShieldCheck, Coins, TrendingUp, Users, Zap, Lock } from 'lucide-react';

const benefits = [
  { icon: ShieldCheck, label: 'No Registration Fee', color: 'text-green-400' },
  { icon: Zap, label: 'Simple Registration', color: 'text-yellow-400' },
  { icon: Lock, label: 'Secure Registration', color: 'text-blue-400' },
  { icon: Coins, label: 'PEPE Coin Rewards', color: 'text-yellow-300' },
  { icon: TrendingUp, label: 'Cashback Opportunity', color: 'text-green-300' },
  { icon: Users, label: 'Community Campaign', color: 'text-purple-400' },
];

const duplicatedBenefits = [...benefits, ...benefits, ...benefits, ...benefits];

export default function TrustStrip() {
  return (
    <div className="bg-gradient-to-r from-black via-green-950/20 to-black border-y border-green-500/10 py-6 overflow-hidden flex">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="flex w-max items-center gap-x-12 px-6"
      >
        {duplicatedBenefits.map(({ icon: Icon, label, color }, i) => {
          const IconComponent = Icon;
          return (
            <div
              key={`${label}-${i}`}
              className="flex items-center gap-2 shrink-0"
            >
              <IconComponent size={16} className={color} aria-hidden="true" />
              <span className="text-sm font-semibold text-gray-300">{label}</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
