'use client';

import React from 'react';
import { Loader } from './Loader';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'tactical' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  loadingText?: string;
  icon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      loadingText = 'Securing Transmission...',
      icon,
      disabled,
      className = '',
      onClick,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'relative inline-flex items-center justify-center font-bold tracking-wider uppercase font-sans transition-all duration-200 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none rounded-md';

    const sizeStyles = {
      sm: 'px-3 py-1.5 text-[11px] gap-1.5',
      md: 'px-5 py-2.5 text-xs tracking-[0.14em] gap-2',
      lg: 'px-7 py-3.5 text-sm tracking-[0.16em] gap-2.5',
    }[size];

    const variantStyles = {
      primary:
        'bg-gradient-to-r from-[#C5A880] to-[#D4AF37] text-[#0A0A0A] hover:brightness-110 shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:shadow-[0_0_30px_rgba(212,175,55,0.45)] border border-[#D4AF37]',
      outline:
        'bg-transparent border border-[#D4AF37]/50 text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]',
      tactical:
        'bg-[#121212] border border-white/10 text-white hover:border-[#D4AF37]/50 hover:bg-[#1F1F1F] hover:text-[#D4AF37]',
      danger:
        'bg-[#8B1E1E] border border-red-700 text-white hover:bg-red-800 shadow-[0_0_15px_rgba(139,30,30,0.4)]',
    }[variant];

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        onClick={onClick}
        className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
        {...props}
      >
        {isLoading ? (
          <Loader label={loadingText} size={size === 'lg' ? 'md' : 'sm'} />
        ) : (
          <>
            {icon && <span className="inline-flex shrink-0">{icon}</span>}
            <span>{children}</span>
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
