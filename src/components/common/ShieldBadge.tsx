import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface ShieldBadgeProps {
  label?: string;
  variant?: 'gold' | 'tactical' | 'red';
  className?: string;
}

export const ShieldBadge: React.FC<ShieldBadgeProps> = ({
  label = 'FDACS #81400200 // FL CH. 493',
  variant = 'gold',
  className = '',
}) => {
  const variantStyles = {
    gold: 'border-[#D4AF37]/40 bg-[#121212]/90 text-[#D4AF37]',
    tactical: 'border-white/10 bg-[#1F1F1F]/80 text-zinc-300',
    red: 'border-[#8B1E1E]/50 bg-[#8B1E1E]/10 text-red-400',
  }[variant];

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[10px] font-mono tracking-wider uppercase border ${variantStyles} ${className}`}
    >
      <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
      <span>{label}</span>
    </div>
  );
};

export default ShieldBadge;
