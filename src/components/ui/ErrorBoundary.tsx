'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { ShieldAlert, PhoneCall, RefreshCw, Lock } from 'lucide-react';

interface Props {
  children?: ReactNode;
  fallbackMessage?: string;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Tactical System Intercept [Error]:', error, errorInfo);
    }
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[50vh] w-full flex items-center justify-center p-6 bg-[#0A0A0A] text-[#F5F5F7]">
          <div className="max-w-xl w-full border border-[#D4AF37]/30 bg-[#121212]/95 backdrop-blur-xl p-8 rounded-lg shadow-2xl relative overflow-hidden">
            {/* Tactical top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8B1E1E] via-[#D4AF37] to-[#8B1E1E]" />

            <div className="flex items-center gap-3 text-[#D4AF37] mb-4">
              <ShieldAlert className="w-8 h-8 text-[#D4AF37] animate-pulse" />
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-[#C5A880] font-mono">
                  SECURITY PROTOCOL ENGAGED // FDACS #81400200
                </span>
                <span className="text-xs text-zinc-400 font-mono">
                  FL CHAPTER 493 STATUTORY CONTINGENCY
                </span>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-3">
              Encrypted Channel Temporarily Unavailable — Call Priority Dispatch
            </h2>

            <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-sans">
              An unexpected anomaly disrupted this secure transmission layer. For active protection, VIP transport, or immediate asset deployment across Palm Beach, Broward, and Miami-Dade, contact our Class G Command Center directly.
            </p>

            <div className="bg-[#1F1F1F]/80 border border-white/5 rounded-md p-4 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-[#8B1E1E]/20 text-[#D4AF37] border border-[#D4AF37]/30">
                  <PhoneCall className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-[#C5A880]">
                    24/7 Tactical Priority Dispatch
                  </div>
                  <a
                    href="tel:5615088833"
                    className="text-lg font-bold tracking-wider text-white hover:text-[#D4AF37] transition-colors"
                  >
                    (561) 508-8833
                  </a>
                </div>
              </div>

              <div className="text-xs font-mono text-zinc-400 text-right sm:border-l sm:border-zinc-800 sm:pl-4">
                <div>HQ: DELRAY BEACH, FL</div>
                <div className="text-[#C5A880]">ZERO UNARMED FILL</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={this.handleReset}
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded bg-gradient-to-r from-[#C5A880] to-[#D4AF37] text-[#0A0A0A] font-semibold text-sm hover:brightness-110 transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)] cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                Re-establish Encrypted Link
              </button>

              <a
                href="tel:5615088833"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded border border-white/10 bg-[#1F1F1F] text-zinc-200 hover:text-white hover:border-[#D4AF37]/50 transition-all text-sm font-medium"
              >
                <Lock className="w-4 h-4 text-[#C5A880]" />
                Emergency Operator
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
