import { useEffect, useState } from 'react';

export default function PageTransition({ children }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animasi akan ke-trigger otomatis setiap kali halaman baru dimuat
    setIsVisible(true);
    
    // Cleanup saat pindah halaman
    return () => setIsVisible(false);
  }, []);

  return (
    <div
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
}