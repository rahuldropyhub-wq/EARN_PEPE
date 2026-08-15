import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <div className="relative z-50 bg-gradient-to-r from-green-900/90 via-green-800/90 to-green-900/90 border-b border-green-600/30 overflow-hidden">
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shimmer_3s_linear_infinite] bg-[length:200%_100%]" />

      <div className="relative flex items-center justify-center py-2.5 px-4 gap-3">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-orange-400"
          aria-hidden="true"
        >
          <Flame size={16} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs font-semibold text-green-100 text-center"
        >
          🔥{' '}
          <span className="text-yellow-300 font-bold">
            SPECIAL REWARD OPPORTUNITY
          </span>{' '}
          - EARN{' '}
          <span className="text-green-300 font-bold">₹100-₹2,000 CASHBACK</span>{' '}
          with EarnPepe
        </motion.p>

        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
          className="text-orange-400"
          aria-hidden="true"
        >
          <Flame size={16} />
        </motion.div>
      </div>
    </div>
  );
}
