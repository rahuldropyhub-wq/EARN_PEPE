import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('home');
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const scrollTo = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 w-full z-30 px-4 pb-4 pt-2 bg-gradient-to-t from-black via-black/95 to-transparent md:hidden"
        >
          <button
            onClick={scrollTo}
            className="btn-primary w-full justify-center text-base py-4"
            aria-label="Register Now for EarnPepe Campaign"
          >
            REGISTER NOW <ArrowRight size={18} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
