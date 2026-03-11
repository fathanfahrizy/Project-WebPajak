import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Paksa browser scroll ke kordinat X:0, Y:0 setiap pindah halaman
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Komponen ini nggak nampilin visual apa-apa
}