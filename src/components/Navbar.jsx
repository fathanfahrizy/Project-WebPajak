import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const location = useLocation();
  const navRef = useRef(null);

  const isTransparentHero = location.pathname === '/' || location.pathname === '/oprec';
  const useWhiteText = isTransparentHero && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    closeAll();
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (menuName) => setActiveDropdown(activeDropdown === menuName ? null : menuName);
  
  const closeAll = () => { 
    setActiveDropdown(null); 
    setIsMobileMenuOpen(false); 
  };

  const isActive = (path) => location.pathname === path;

  const getLinkStyle = (path) => {
    const active = isActive(path);
    if (useWhiteText) return active ? 'text-white font-extrabold' : 'text-purple-100 hover:text-white';
    return active ? 'text-purple-800 font-extrabold' : 'text-gray-600 hover:text-purple-800';
  };

  const getDropdownStyle = (menuName) => {
    const active = activeDropdown === menuName;
    if (useWhiteText) return active ? 'text-white font-extrabold' : 'text-purple-100 hover:text-white';
    return active ? 'text-purple-800 font-extrabold' : 'text-gray-600 hover:text-purple-800';
  };

  return (
    <div className={`fixed w-full z-[100] flex justify-center pointer-events-none transition-all duration-500 ease-in-out ${isScrolled ? 'top-4 md:top-5 px-4 sm:px-6' : 'top-0 px-0'}`}>
      <nav 
        ref={navRef} 
        className={`pointer-events-auto w-full transition-all duration-500 ease-in-out flex flex-col items-center relative
          ${isScrolled 
            ? 'max-w-7xl rounded-full md:rounded-[2.5rem] bg-white/95 shadow-[0_15px_50px_-10px_rgba(0,0,0,0.15)] backdrop-blur-xl py-3 md:py-3.5 px-5 sm:px-6 md:px-8 border border-gray-100' 
            : `max-w-full rounded-none py-4 sm:py-5 md:py-6 px-5 sm:px-6 md:px-8 sm:px-12 lg:px-20 border-b ${isTransparentHero ? 'bg-transparent border-transparent shadow-none' : 'bg-white border-gray-100 shadow-sm'}`
          }`}
      >
        <div className="w-full flex items-center justify-between relative z-20">
          
          {/* === BRAND (KIRI) DENGAN UKURAN SUPER RESPONSIVE === */}
          <div className={`flex justify-start transition-all duration-500 ease-in-out ${isScrolled ? 'flex-1' : 'w-auto'}`}>
            <Link to="/" onClick={closeAll} className="flex items-center gap-2 sm:gap-3 md:gap-4 shrink-0 group">
              <div className={`rounded-full transition-all duration-500 flex items-center justify-center shadow-md group-hover:scale-105 ${isScrolled ? 'p-1.5 md:p-2' : 'p-1.5 sm:p-2 md:p-3'} ${useWhiteText ? 'bg-white text-purple-900 shadow-black/10' : 'bg-purple-800 text-white shadow-purple-900/20'}`}>
                {/* Ikon logo diperkecil di HP */}
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <div className="flex flex-col">
                {/* Teks logo lebih nyusut di layar HP kecil (text-lg), sedang (text-xl), besar (text-3xl) */}
                <span className={`font-black tracking-tight leading-none transition-colors duration-500 ${isScrolled ? 'text-base sm:text-lg md:text-2xl' : 'text-lg sm:text-xl md:text-3xl'} ${useWhiteText ? 'text-white' : 'text-gray-900'}`}>
                  Tax<span className={useWhiteText ? 'text-orange-400' : 'text-orange-500'}>Laboratory</span>
                </span>
                <span className={`font-bold tracking-[0.25em] uppercase transition-colors duration-500 ${isScrolled ? 'text-[7px] sm:text-[8px] md:text-[10px]' : 'text-[7px] sm:text-[9px] md:text-[12px] mt-0.5 md:mt-1'} ${useWhiteText ? 'text-purple-200' : 'text-gray-400'}`}>
                  Gunadarma
                </span>
              </div>
            </Link>
          </div>
          
          {/* === DESKTOP NAVIGATION (MENU) === */}
          <div className={`hidden lg:flex gap-10 font-bold text-base lg:text-lg items-center transition-all duration-500 ease-in-out ${isScrolled ? 'justify-center shrink-0' : 'flex-1 justify-end'}`}>
            
            <Link to="/" onClick={closeAll} className={`transition-colors relative group ${getLinkStyle('/')}`}>
              Beranda
              <span className={`absolute -bottom-1.5 left-0 w-0 h-0.5 transition-all group-hover:w-full ${useWhiteText ? 'bg-white' : 'bg-orange-500'}`}></span>
            </Link>
            
            <div className="relative group/item">
              <button onClick={() => toggleDropdown('profil')} className={`flex items-center gap-1.5 focus:outline-none transition-colors ${getDropdownStyle('profil')}`}>
                Profil <svg className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'profil' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {activeDropdown === 'profil' && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-7 w-64 bg-white/95 backdrop-blur-xl border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] rounded-2xl overflow-hidden py-3 animate-in fade-in slide-in-from-top-4 duration-300 ring-1 ring-black/5">
                  <Link to="/tentang-kami" onClick={closeAll} className="block px-6 py-3 text-base text-gray-600 hover:bg-purple-50 hover:text-purple-800">Tentang Kami</Link>
                  <Link to="/team" onClick={closeAll} className="block px-6 py-3 text-base text-gray-600 hover:bg-purple-50 hover:text-purple-800">Team</Link>
                  <Link to="/staff" onClick={closeAll} className="block px-6 py-3 text-base text-gray-600 hover:bg-purple-50 hover:text-purple-800">Staff</Link>
                </div>
              )}
            </div>

            <div className="relative group/item">
              <button onClick={() => toggleDropdown('layanan')} className={`flex items-center gap-1.5 focus:outline-none transition-colors ${getDropdownStyle('layanan')}`}>
                Layanan <svg className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'layanan' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {activeDropdown === 'layanan' && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-7 w-64 bg-white/95 backdrop-blur-xl border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] rounded-2xl overflow-hidden py-3 animate-in fade-in slide-in-from-top-4 duration-300 ring-1 ring-black/5">
                  <Link to="/tata-tertib" onClick={closeAll} className="block px-6 py-3 text-base text-gray-600 hover:bg-purple-50 hover:text-purple-800">Tata Tertib</Link>
                  <Link to="/modul" onClick={closeAll} className="block px-6 py-3 text-base text-gray-600 hover:bg-purple-50 hover:text-purple-800">Modul</Link>
                  <Link to="/software-pajak" onClick={closeAll} className="block px-6 py-3 text-base text-gray-600 hover:bg-purple-50 hover:text-purple-800">Software Pajak</Link>
                  <a href="https://djponline.pajak.go.id/" target="_blank" rel="noreferrer" onClick={closeAll} className="block px-6 py-3 text-base text-blue-600 hover:bg-blue-50">Portal DJP</a>
                </div>
              )}
            </div>

            <div className="relative group/item">
              <button onClick={() => toggleDropdown('informasi')} className={`flex items-center gap-1.5 focus:outline-none transition-colors ${getDropdownStyle('informasi')}`}>
                Informasi <svg className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'informasi' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {activeDropdown === 'informasi' && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-7 w-64 bg-white/95 backdrop-blur-xl border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] rounded-2xl overflow-hidden py-3 animate-in fade-in slide-in-from-top-4 duration-300 ring-1 ring-black/5">
                  <Link to="/oprec" onClick={closeAll} className="block px-6 py-3 text-base text-orange-600 font-bold hover:bg-orange-50">Oprec</Link>
                  <Link to="/lokasi" onClick={closeAll} className="block px-6 py-3 text-base text-gray-600 hover:bg-purple-50 hover:text-purple-800">Lokasi</Link>
                  <Link to="/faq" onClick={closeAll} className="block px-6 py-3 text-base text-gray-600 hover:bg-purple-50 hover:text-purple-800">FAQ</Link>
                </div>
              )}
            </div>

            <Link to="/kontak" onClick={closeAll} className={`transition-colors relative group ${getLinkStyle('/kontak')}`}>
              Kontak
              <span className={`absolute -bottom-1.5 left-0 w-0 h-0.5 transition-all group-hover:w-full ${useWhiteText ? 'bg-white' : 'bg-orange-500'}`}></span>
            </Link>
          </div>

          {/* === BALANCER / KANAN (TOMBOL MOBILE DIBIKIN RESPONSIVE) === */}
          <div className={`flex justify-end transition-all duration-500 ease-in-out ${isScrolled ? 'flex-1' : 'w-auto'}`}>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-1.5 sm:p-2 md:p-2.5 rounded-full focus:outline-none transition-colors ${useWhiteText ? 'text-white bg-white/20 hover:bg-white/30' : 'text-purple-900 bg-purple-50 hover:bg-purple-100'}`}
            >
              {/* Ikon garis tiga diperkecil juga di layar HP */}
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} /></svg>
            </button>
          </div>

        </div>

        {/* 📉 SCROLL PROGRESS LINE */}
        <div className={`absolute inset-0 pointer-events-none overflow-hidden transition-all duration-500 ${isScrolled ? 'rounded-full md:rounded-[2.5rem]' : 'rounded-none'}`}>
          <div 
            className="absolute bottom-0 left-0 h-[4px] bg-gradient-to-r from-purple-800 to-orange-500 transition-all duration-150 ease-out shadow-[0_0_12px_rgba(249,115,22,0.4)]"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>

        {/* === MOBILE OVERLAY MENU === */}
        <div className={`lg:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-300 ease-in-out bg-white/95 backdrop-blur-xl shadow-2xl rounded-b-[2.5rem] ${isMobileMenuOpen ? 'max-h-[85vh] opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col gap-2 pb-8 font-bold text-gray-700 overflow-y-auto px-5 pt-5 text-lg md:text-xl">
            <Link to="/" onClick={closeAll} className="py-4 px-5 hover:bg-purple-50 rounded-xl transition-colors">Beranda</Link>
            
            <div className="flex flex-col">
              <button onClick={() => toggleDropdown('m-profil')} className={`flex justify-between items-center py-4 px-5 rounded-xl transition-colors ${activeDropdown === 'm-profil' ? 'bg-purple-50/50 text-purple-800' : 'hover:bg-purple-50'}`}>
                Profil <svg className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === 'm-profil' ? 'rotate-180 text-orange-500' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className={`flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${activeDropdown === 'm-profil' ? 'max-h-80 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                <div className="bg-gray-50 rounded-2xl mx-2 flex flex-col py-3">
                  <Link to="/tentang-kami" onClick={closeAll} className="px-6 py-3.5 text-base md:text-lg hover:text-purple-800">Tentang Kami</Link>
                  <Link to="/team" onClick={closeAll} className="px-6 py-3.5 text-base md:text-lg hover:text-purple-800">Team</Link>
                  <Link to="/staff" onClick={closeAll} className="px-6 py-3.5 text-base md:text-lg hover:text-purple-800">Staff</Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <button onClick={() => toggleDropdown('m-layanan')} className={`flex justify-between items-center py-4 px-5 rounded-xl transition-colors ${activeDropdown === 'm-layanan' ? 'bg-purple-50/50 text-purple-800' : 'hover:bg-purple-50'}`}>
                Layanan <svg className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === 'm-layanan' ? 'rotate-180 text-orange-500' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className={`flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${activeDropdown === 'm-layanan' ? 'max-h-80 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                <div className="bg-gray-50 rounded-2xl mx-2 flex flex-col py-3">
                  <Link to="/tata-tertib" onClick={closeAll} className="px-6 py-3.5 text-base md:text-lg hover:text-purple-800">Tata Tertib</Link>
                  <Link to="/modul" onClick={closeAll} className="px-6 py-3.5 text-base md:text-lg hover:text-purple-800">Modul</Link>
                  <Link to="/software-pajak" onClick={closeAll} className="px-6 py-3.5 text-base md:text-lg hover:text-purple-800">Software Pajak</Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <button onClick={() => toggleDropdown('m-informasi')} className={`flex justify-between items-center py-4 px-5 rounded-xl transition-colors ${activeDropdown === 'm-informasi' ? 'bg-purple-50/50 text-purple-800' : 'hover:bg-purple-50'}`}>
                Informasi <svg className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === 'm-informasi' ? 'rotate-180 text-orange-500' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className={`flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${activeDropdown === 'm-informasi' ? 'max-h-80 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                <div className="bg-gray-50 rounded-2xl mx-2 flex flex-col py-3">
                  <Link to="/oprec" onClick={closeAll} className="px-6 py-3.5 text-base md:text-lg font-bold text-orange-600">Oprec</Link>
                  <Link to="/lokasi" onClick={closeAll} className="px-6 py-3.5 text-base md:text-lg hover:text-purple-800">Lokasi</Link>
                  <Link to="/faq" onClick={closeAll} className="px-6 py-3.5 text-base md:text-lg hover:text-purple-800">FAQ</Link>
                </div>
              </div>
            </div>

            <Link to="/kontak" onClick={closeAll} className="py-4 px-5 hover:bg-purple-50/80 rounded-xl transition-colors">Kontak</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}