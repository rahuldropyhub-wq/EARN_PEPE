import { motion } from 'framer-motion';
import { ExternalLink, ZoomIn } from 'lucide-react';
import Button from './ui/Button';

export default function StepCard({ step, index, onImageClick, onScrollTo }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`grid gap-8 items-center md:grid-cols-2 ${
        !isEven ? 'md:[&>*:first-child]:order-2' : ''
      }`}
    >
      {/* Content */}
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <div className="step-circle" aria-hidden="true">
            {step.number}
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-green-500/50 to-transparent" />
        </div>

        <div>
          <h3 className="text-2xl font-black text-white mb-3">
            {step.title}
          </h3>
          <p className="text-gray-300 leading-relaxed">{step.description}</p>
        </div>

        {step.highlight && (
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-green-500/10 border border-green-500/20">
            <span className="text-green-400 text-xs font-bold">✓</span>
            <span className="text-sm font-semibold text-green-300">{step.highlight}</span>
          </div>
        )}

        {step.isExternal && (
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <ExternalLink size={12} aria-hidden="true" />
            Opens EarnPepe in a new tab
          </div>
        )}

        {step.ctaText && (
          <div>
            <Button
              size="md"
              onClick={() => onScrollTo && onScrollTo(step.ctaScroll || 'registration')}
            >
              {step.ctaText} →
            </Button>
          </div>
        )}
      </div>

      {/* Screenshot / Image */}
      <div>
        {step.image ? (
          <motion.button
            whileHover={{ scale: 1.02 }}
            onClick={() => onImageClick && onImageClick(step.image, step.imageAlt)}
            className="relative group w-full cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded-2xl"
            aria-label={`View ${step.imageAlt} full screen`}
          >
            {/* Browser chrome bar */}
            <div className="rounded-t-2xl bg-gray-800/80 px-4 py-2 flex items-center gap-2 border border-b-0 border-green-500/20">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex-1 bg-gray-700/50 rounded-full px-3 py-0.5 text-xs text-gray-400 text-left truncate">
                earnpepe.com
              </div>
            </div>
            <div className="relative rounded-b-2xl overflow-hidden border border-t-0 border-green-500/20 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
              <img
                src={step.image}
                alt={step.imageAlt}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
              {/* Zoom overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 rounded-full p-3">
                  <ZoomIn size={20} className="text-white" />
                </div>
              </div>
            </div>
          </motion.button>
        ) : (
          /* Placeholder when no screenshot provided */
          <div className="rounded-2xl border border-green-500/20 overflow-hidden shadow-[0_0_30px_rgba(34,197,94,0.1)]">
            {/* Browser chrome */}
            <div className="rounded-t-2xl bg-gray-800/80 px-4 py-2 flex items-center gap-2 border-b border-green-500/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="flex-1 bg-gray-700/50 rounded-full px-3 py-0.5 text-xs text-gray-400 text-left">
                earnpepe.com
              </div>
            </div>
            {/* Placeholder content */}
            <div className="bg-gray-900/50 h-52 flex flex-col items-center justify-center gap-3 text-gray-600">
              <div className="w-12 h-12 rounded-xl border-2 border-dashed border-gray-700 flex items-center justify-center">
                <span className="text-2xl">{step.number}</span>
              </div>
              <p className="text-xs font-medium text-center px-4">
                Screenshot will appear here
                <br />
                <span className="text-green-600/60">
                  Add image to: src/assets/step_{step.id}.jpg
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
