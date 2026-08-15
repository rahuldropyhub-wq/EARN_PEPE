import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ExternalLink, X } from 'lucide-react';
import Button from './ui/Button';
import { EARNPEPE_URL } from '../config';

export default function SuccessModal({ open, onClose, registrationId }) {
  const [countdown, setCountdown] = useState(2);

  // Escape to close
  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  // Auto-redirect and countdown
  useEffect(() => {
    if (open) {
      setCountdown(2);
      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            window.location.href = EARNPEPE_URL;
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [open]);

  // Allow body scroll even when modal is open
  const handleContinue = () => {
    window.location.href = EARNPEPE_URL;
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto flex"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-title"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative m-auto card-glass-strong p-6 sm:p-8 rounded-3xl max-w-lg w-full border border-green-500/30 shadow-[0_0_60px_rgba(34,197,94,0.2)]"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
              aria-label="Close"
            >
              <X size={16} />
            </button>

            {/* Success icon animation */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
              className="flex items-center justify-center mb-6"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping" />
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.6)]">
                  <CheckCircle size={40} className="text-white" aria-hidden="true" />
                </div>
              </div>
            </motion.div>

            <div className="text-center">
              <motion.h2
                id="success-title"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-black text-white mb-3"
              >
                Registration Submitted Successfully!
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-3"
              >
                <p className="text-gray-300">
                  Your registration details have been submitted successfully.
                </p>
                <p className="text-green-300 font-semibold">
                  You&apos;re ready to continue to EarnPepe!
                </p>

                {registrationId && (
                  <p className="text-xs text-gray-500">
                    Reference ID: <span className="text-green-500 font-mono">{registrationId}</span>
                  </p>
                )}
              </motion.div>

              {/* What next cards */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-3 gap-3 my-6"
              >
                {[
                  { emoji: '✅', label: 'Details Submitted' },
                  { emoji: '🚀', label: 'Visit EarnPepe' },
                  { emoji: '🪙', label: 'Start Earning' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-white/5 border border-green-500/10"
                  >
                    <span className="text-xl">{item.emoji}</span>
                    <span className="text-xs text-gray-400 font-medium text-center leading-tight">
                      {item.label}
                    </span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  size="lg"
                  onClick={handleContinue}
                  className="w-full"
                  aria-label="Continue to EarnPepe website"
                >
                  CONTINUE TO EARNPEPE <ExternalLink size={18} />
                </Button>
                <p className="text-xs text-green-400 mt-3 font-medium animate-pulse">
                  Redirecting automatically in {countdown} {countdown === 1 ? 'second' : 'seconds'}...
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
