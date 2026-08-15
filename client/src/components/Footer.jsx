import { Coins } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-green-500/10 pt-14 pb-8" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="flex flex-col items-center justify-center mb-12 text-center">
          {/* Brand */}
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center shadow-[0_0_12px_rgba(34,197,94,0.6)]">
              <Coins size={22} className="text-black" aria-hidden="true" />
            </div>
            <div className="text-left">
              <span className="font-black text-white text-xl">Earn</span>
              <span className="font-black text-green-400 text-xl">Pepe</span>
              <p className="text-xs text-green-600 font-semibold">Cashback Campaign</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed max-w-md">
            A campaign for eligible users to explore the available PEPE coin and
            cashback opportunity through the EarnPepe platform.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-green-500/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600 text-center md:text-left">
            © {new Date().getFullYear()} EarnPepe Campaign. All rights reserved.
          </p>
          <p className="text-xs text-gray-700 text-center md:text-right max-w-sm">
            Cashback and rewards are subject to eligibility and applicable terms.
            Not financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
