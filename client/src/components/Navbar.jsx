import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Coins } from 'lucide-react';
import Button from './ui/Button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      role="navigation"
      aria-label="Main navigation"
      className={`sticky top-0 w-full z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-green-500/20 shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded-lg"
            aria-label="EarnPepe Campaign Home"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center shadow-[0_0_12px_rgba(34,197,94,0.6)]">
              <Coins size={20} className="text-black" />
            </div>
            <div>
              <span className="font-black text-white text-lg leading-none">Earn</span>
              <span className="font-black text-green-400 text-lg leading-none">Pepe</span>
              <p className="text-[10px] text-green-600 font-semibold leading-none">Cashback Campaign</p>
            </div>
          </a>

          {/* CTA */}
          <div>
            <Button
              size="sm"
              onClick={() => handleNavClick('#registration')}
              aria-label="Register Now"
            >
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
