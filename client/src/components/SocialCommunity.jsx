import React from 'react';
import { motion } from 'framer-motion';

export default function SocialCommunity() {
  return (
    <section className="py-4 bg-gradient-to-b from-[#0a120c] to-[#050a06] border-b border-green-900/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto bg-green-900/10 border border-green-500/20 rounded-2xl p-4 md:p-6 shadow-[0_0_20px_rgba(34,197,94,0.05)]"
        >
          
          {/* LEFT SIDE - Text */}
          <div className="flex flex-col text-center md:text-left order-1">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">Need Help?</span>
            </div>
            
            <h2 className="text-lg md:text-xl font-bold text-white mb-1">
              Join Our Community
            </h2>
            
            <p className="text-gray-400 text-xs md:text-sm max-w-md">
              If you cannot understand the process or need guidance, join our official channels!
            </p>
          </div>

          {/* RIGHT SIDE - Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto order-2">
            <a
              href="https://whatsapp.com/channel/0029Vb8HkU8F6sn5dKFgcV2A"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20 transition-all font-bold text-sm w-full sm:w-auto hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Join WhatsApp
            </a>
            
            <a
              href="https://t.me/kryptobux5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0088cc]/10 border border-[#0088cc]/30 text-[#33a8e5] hover:bg-[#0088cc]/20 transition-all font-bold text-sm w-full sm:w-auto hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.94z"/></svg>
              Join Telegram
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
