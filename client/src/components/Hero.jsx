import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, ShieldCheck, Zap, Gift, Lock, Coins } from 'lucide-react';
import Button from './ui/Button';
import pepeHero from '../assets/hero_img .png';

const trustBadges = [
  { icon: ShieldCheck, label: 'No Registration Fee' },
  { icon: Zap, label: 'Simple Registration' },
  { icon: Lock, label: 'Secure Registration' },
  { icon: Gift, label: 'Cashback Opportunity' },
  { icon: Coins, label: 'PEPE Coin Rewards' },
];

const FloatingCoin = ({ delay, left, size = 32 }) => (
  <motion.div
    className="absolute pointer-events-none select-none"
    style={{ left, bottom: '10%' }}
    animate={{
      y: [0, -80, -160],
      opacity: [0, 1, 0],
      rotate: [0, 180, 360],
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      ease: 'easeOut',
    }}
  >
    <div
      className="rounded-full bg-gradient-to-br from-yellow-300 to-yellow-600 flex items-center justify-center font-bold text-black shadow-[0_0_10px_rgba(251,191,36,0.8)]"
      style={{ width: size, height: size, fontSize: size * 0.35 }}
    >
      P
    </div>
  </motion.div>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden hero-gradient"
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(34,197,94,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Radial glow top-left */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-green-500/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-green-700/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 pt-8 pb-16 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT — copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-bold uppercase tracking-widest">
                🔥 Special Campaign - Limited Time
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.div variants={itemVariants}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                <div className="whitespace-nowrap">
                  <span className="text-white">EARN </span>
                  <span className="gold-text">₹100 - ₹2,000</span>
                </div>
                <span className="green-text-gradient">CASHBACK!</span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.div variants={itemVariants}>
              <p className="text-xl font-bold text-green-300">
                Must Earn{' '}
                <span className="text-yellow-300 underline decoration-red-500 decoration-2 underline-offset-4">50,000 PEPE Coins</span>
                {' '}To Be Eligible
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-gray-300 leading-relaxed max-w-lg"
            >
              EarnPepe is giving eligible users an opportunity to earn{' '}
              <strong className="text-green-300">₹100-₹2,000 cashback</strong> by
              completing the required registration and verification process.
            </motion.p>

            {/* Urgency */}
            <motion.div variants={itemVariants} className="flex flex-col gap-3">
              <p className="text-sm font-semibold text-orange-400 flex items-center gap-2">
                ⚡ Don&apos;t miss this opportunity - grab it now!
              </p>
              
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-bold w-fit shadow-[0_0_15px_rgba(59,130,246,0.15)] mb-1">
                📧 Note: EarnPepe sign in only requires G-Mail!
              </div>

              {/* Social Links */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="https://whatsapp.com/channel/0029Vb8HkU8F6sn5dKFgcV2A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20 transition-colors font-bold text-sm w-fit"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Join Krypto Earnings
                </a>
                <a
                  href="https://t.me/kryptobux5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0088cc]/10 border border-[#0088cc]/30 text-[#33a8e5] hover:bg-[#0088cc]/20 transition-colors font-bold text-sm w-fit"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.94z"/></svg>
                  Join Telegram
                </a>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                onClick={() => scrollTo('registration')}
                className="text-base "
                aria-label="Register now for EarnPepe campaign"
              >
                REGISTER NOW <ArrowRight size={20} />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollTo('how-it-works')}
                className="text-base "
                aria-label="Learn how it works"
              >
                HOW IT WORKS <ChevronDown size={20} />
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 pt-2"
              aria-label="Trust indicators"
            >
              {trustBadges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 text-xs font-medium text-green-300/80"
                >
                  <Icon size={14} className="text-green-400" aria-hidden="true" />
                  {label}
                </div>
              ))}
            </motion.div>


          </motion.div>

          {/* RIGHT — hero image + floating elements */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative flex items-center justify-center"
          >
            {/* Glow backdrop */}
            <div className="absolute inset-0 rounded-3xl bg-green-500/10 blur-2xl scale-90" />

            {/* Hero image */}
            <div className="relative rounded-3xl overflow-hidden border border-green-500/20 shadow-[0_0_60px_rgba(34,197,94,0.25)]">
              <img
                src={pepeHero}
                alt="Pepe the Frog holding PEPE coins - EarnPepe Campaign"
                className="w-full h-auto object-cover max-h-[500px]"
                priority="true"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Cashback badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-2 md:-top-4 -right-2 md:-right-4 bg-gradient-to-br from-yellow-400 to-yellow-600 text-black px-2 md:px-4 py-1 md:py-2.5 rounded-lg md:rounded-2xl shadow-[0_0_25px_rgba(251,191,36,0.6)] font-bold text-center z-10"
            >
              <div className="text-[9px] md:text-xs font-semibold opacity-80 leading-tight">CASHBACK</div>
              <div className="text-[11px] md:text-lg font-black leading-tight">₹100-₹2K</div>
            </motion.div>

            {/* PEPE coin badge */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-2 md:-bottom-4 -left-2 md:-left-4 card-glass-strong px-2 md:px-4 py-1 md:py-2.5 rounded-lg md:rounded-2xl shadow-lg border border-green-500/30 z-10"
            >
              <div className="text-[9px] md:text-xs text-green-400 font-semibold leading-tight">MUST EARN</div>
              <div className="text-[11px] md:text-xl font-black text-white leading-tight">50,000 <span className="text-green-400">PEPE</span></div>
            </motion.div>

            {/* Floating coins */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
              <FloatingCoin delay={0} left="10%" size={28} />
              <FloatingCoin delay={1} left="30%" size={24} />
              <FloatingCoin delay={2} left="60%" size={32} />
              <FloatingCoin delay={0.7} left="80%" size={20} />
              <FloatingCoin delay={1.5} left="50%" size={26} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('how-it-works')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 2 }, y: { duration: 2, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-green-500/60 hover:text-green-400 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded"
        aria-label="Scroll down to learn more"
      >
        <span className="text-xs font-medium">Scroll to explore</span>
        <ChevronDown size={20} />
      </motion.button>
    </section>
  );
}
