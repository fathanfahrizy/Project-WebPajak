import { useEffect, useState, useRef } from 'react';
import PageTransition from '../components/PageTransition';

// === IMPORT DATA JSON DARI FOLDER DATA ===
import softwareData from '../data/softwareData.json';

// =========================================
// CUSTOM ICONS
// =========================================
const DownloadIcon = () => (
  <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
);

const GuideIcon = () => (
  <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
);

const AppIcon = () => (
  <svg className="w-8 h-8 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
);

// =========================================
// KOMPONEN KARTU SOFTWARE (DENGAN SENSOR HP)
// =========================================
const SoftwareCard = ({ app }) => {
  const [isActive, setIsActive] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    let delay;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          delay = setTimeout(() => setIsActive(true), 100);
        } else {
          clearTimeout(delay);
          setIsActive(false);
        }
      },
      // Sensor aktif pas kartu ada di area tengah layar HP
      { rootMargin: "-20% 0px -20% 0px", threshold: 0 } 
    );
    
    if (cardRef.current) observer.observe(cardRef.current);
    return () => {
      if (delay) clearTimeout(delay);
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`group bg-white rounded-[2.5rem] p-8 border transition-all duration-500 flex flex-col justify-between
        /* EFEK PC (MURNI HOVER KURSOR) */
        md:border-slate-200 md:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] md:hover:shadow-xl md:hover:-translate-y-2 md:hover:border-purple-300
        
        /* EFEK HP (AKTIF SAAT DI-SCROLL KE TENGAH) */
        ${isActive 
          ? 'max-md:shadow-xl max-md:-translate-y-2 max-md:border-purple-300' 
          : 'max-md:border-slate-200 max-md:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] max-md:translate-y-0'}
      `}
    >
      <div>
        {/* Header Kartu: Icon & Versi */}
        <div className="flex justify-between items-start mb-8">
          <div className={`${app.theme.bg} ${app.theme.border} border p-4 rounded-2xl ${app.theme.text} transition-transform duration-500
            /* Bikin Ikonnya ikutan membesar pas aktif */
            md:group-hover:scale-110
            ${isActive ? 'max-md:scale-110' : 'max-md:scale-100'}
          `}>
            <AppIcon />
          </div>
          <div className="flex flex-col items-end gap-1.5">
            <span className="bg-slate-100 text-slate-600 font-extrabold px-3 py-1 rounded-full text-[10px] tracking-widest border border-slate-200">
              {app.version}
            </span>
            <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">
              {app.os}
            </span>
          </div>
        </div>

        {/* Deskripsi Aplikasi */}
        <h3 className={`text-2xl font-bold mb-3 transition-colors duration-500
          md:text-slate-900 md:group-hover:text-purple-800
          ${isActive ? 'max-md:text-slate-900' : 'max-md:text-slate-900'}
        `}>
          {app.name}
        </h3>
        <p className="text-slate-500 text-[14px] leading-relaxed mb-8">
          {app.desc}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3 mt-auto">
        {/* Tombol Panduan */}
        {app.guideLink && (
          <a 
            href={app.guideLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 px-4 bg-orange-50 hover:bg-orange-100 text-orange-700 font-bold rounded-xl transition-colors border border-orange-200"
          >
            <GuideIcon />
            <span>Panduan Instalasi</span>
          </a>
        )}
        
        {/* Tombol Download via Drive */}
        <a 
          href={app.linkDrive}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-2 w-full py-3.5 px-4 font-bold rounded-xl transition-all duration-500 shadow-md
            md:bg-slate-900 md:text-white md:hover:bg-purple-900 md:hover:scale-[1.02]
            ${isActive ? 'max-md:bg-slate-900 max-md:text-white max-md:scale-[1.02]' : 'max-md:bg-slate-900 max-md:text-white max-md:scale-100'}
          `}
        >
          <DownloadIcon />
          <span>Download via Drive</span>
        </a>
      </div>

    </div>
  );
};

export default function SoftwarePajak() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div className="pt-32 pb-32 min-h-screen bg-[#fafafa] font-sans text-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* HEADER SECTION */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6 bg-white border border-slate-200 px-5 py-2 rounded-full shadow-sm">
              <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
              <span className="text-slate-600 font-bold uppercase tracking-widest text-xs">Pusat Unduhan Aplikasi</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Software <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Center</span>
            </h1>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Unduh seluruh perangkat lunak yang dibutuhkan untuk menunjang kegiatan praktikum perpajakan. Pastikan perangkat Anda memenuhi spesifikasi yang tertera.
            </p>
          </div>

          {/* GRID KARTU SOFTWARE */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwareData.map((app) => (
              <SoftwareCard key={app.id} app={app} />
            ))}
          </div>

        </div>
      </div>
    </PageTransition>
  );
}