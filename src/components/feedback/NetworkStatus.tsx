'use client';

import React, { useEffect, useState } from 'react';
import { WifiOff, ShieldCheck } from 'lucide-react';

export const NetworkStatus: React.FC = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline) return null;

  return (
    <div
      role="status"
      className="fixed bottom-4 left-4 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-md bg-[#8B1E1E] text-white border border-red-500 shadow-xl text-xs font-mono"
    >
      <WifiOff className="w-4 h-4 text-red-200 animate-pulse" />
      <span>DISCONNECTED: Transmission channel offline. Dial (561) 508-8833 directly.</span>
    </div>
  );
};

export default NetworkStatus;
