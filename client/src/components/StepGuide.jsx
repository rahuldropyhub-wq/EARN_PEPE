import { useState } from 'react';
import { motion } from 'framer-motion';
import { stepGuideData } from '../data/steps';
import StepCard from './StepCard';
import ImageLightbox from './ImageLightbox';
import Container from './ui/Container';

export default function StepGuide() {
  const [lightbox, setLightbox] = useState({ open: false, src: '', alt: '' });

  const handleImageClick = (src, alt) => {
    setLightbox({ open: true, src, alt });
  };

  const handleCloseLightbox = () => {
    setLightbox({ open: false, src: '', alt: '' });
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="steps" className="py-24 relative overflow-hidden green-gradient-bg">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-bold uppercase tracking-widest mb-4">
            📖 Detailed Walkthrough
          </span>
          <h2 className="text-3xl font-black text-white mb-4">
            STEP-BY-STEP <span className="green-text-gradient">GUIDE</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Follow each step carefully to complete the process and explore the
            applicable cashback opportunity.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8 md:gap-12">
          {stepGuideData.map((step, index) => (
            <div key={step.id}>
              <StepCard
                step={step}
                index={index}
                onImageClick={handleImageClick}
                onScrollTo={scrollTo}
              />
              {index < stepGuideData.length - 1 && (
                <div className="mt-8 mx-auto w-px h-10 bg-gradient-to-b from-green-500/30 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </Container>

      {/* Lightbox */}
      <ImageLightbox
        open={lightbox.open}
        src={lightbox.src}
        alt={lightbox.alt}
        onClose={handleCloseLightbox}
      />
    </section>
  );
}
