/*
 * Currency Converter Component - Simple USD to INR converter
 * Features manual rate setting and clean dialog interface
 */
import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const USD_TO_INR_RATE = 87; // Manual rate - can be updated as needed

export function CurrencyConverter() {
  const [usdAmount, setUsdAmount] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, '');
    setUsdAmount(value);
  };

  const inrAmount = usdAmount ? (parseFloat(usdAmount) * USD_TO_INR_RATE).toLocaleString('en-IN', {
    maximumFractionDigits: 0,
  }) : '';

  const handleClose = () => {
    setIsOpen(false);
    setUsdAmount('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="text-xs text-white/50 hover:text-white/70 transition-colors duration-200 underline decoration-dotted underline-offset-2">
          Convert to INR
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-gray-900/95 border border-gray-700/50 backdrop-blur-xl">
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-xl font-semibold text-white text-center">
            USD to INR Converter
          </DialogTitle>
          <p className="text-sm text-white/60 text-center">
            Current rate: 1 USD = ₹{USD_TO_INR_RATE} INR
          </p>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {/* USD Input */}
          <div className="space-y-2">
            <label htmlFor="usd-input" className="text-sm font-medium text-white/80">
              Enter USD Amount
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 font-medium">
                $
              </span>
              <input
                id="usd-input"
                type="text"
                value={usdAmount}
                onChange={handleInputChange}
                placeholder="0.00"
                className="w-full pl-8 pr-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-200"
                autoFocus
              />
            </div>
          </div>

          {/* Conversion Arrow */}
          <div className="flex justify-center">
            <motion.div
              className="text-white/40"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </div>

          {/* INR Result */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80">
              INR Amount
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 font-medium">
                ₹
              </span>
              <div className="w-full pl-8 pr-4 py-3 bg-gray-800/30 border border-gray-600/30 rounded-lg text-white/90 font-medium">
                {inrAmount || '0'}
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="text-xs text-white/50 text-center space-y-1">
            <p>Rate is manually set and may not reflect current market rates.</p>
            <p>For official rates, please check with your bank or financial institution.</p>
          </div>
        </div>

        <div className="flex justify-center pt-2">
          <Button
            onClick={handleClose}
            variant="outline"
            className="bg-transparent border-gray-600/50 text-white hover:bg-gray-800/50 hover:border-gray-500/50 transition-colors duration-200"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
