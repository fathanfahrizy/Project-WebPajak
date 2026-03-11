import { useEffect, useState, useRef } from 'react';
import modulData from '../data/modulData.json';
import PageTransition from '../components/PageTransition';

// =========================================
// CUSTOM ICONS
// =========================================
const PdfIcon = () => (
  <svg className="w-8 h-8 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M8.267 14.68c-.184 0-.308.018-.372.036v1.178c.076.018.171.023.302.023.479 0 .774-.242.774-.651 0-.366-.254-.586-.704-.586zm3.487.012c-.2 0-.33.018-.407.036v2.61c.077.018.201.018.313.018.817.06.31 1.09.31 1.714 0 .857-.473 1.152-1.212 1.152H12v-4.93h1.22c.982 0 1.64.444 1.64 1.346 0 .61-.314 1.054-.833 1.258V16c.84.15 1.408.77 1.408 1.644 0 .976-.787 1.46-1.93 1.46H12v-4.412h-1.52zm-3.487 1.583c-.473 0-.822.041-1.071.077v-3.32h1.61c.964 0 1.526.438 1.526 1.153 0 .74-.597 1.154-1.396 1.154h-.669v.936zm8.817-1.583h-1.26v4.412h1.26v-1.61h1.343v-1.124h-1.343v-1.678zm-4.72 1.94c.48 0 .817-.23.817-.645 0-.42-.326-.62-.8-.62h-.426v1.265h.41zm11.636-8.649v12.01c0 1.096-.896 1.986-2 1.986H6c-1.104 0-2-.89-2-1.986V3.986C4 2.89 4.896 2 6 2h8.01L24 9.986zm-5.99-5.99v4.004h4.004L18.01 3.996zM22 20.006V10h-6V4H6v16.006h16z"/></svg>
);

const ViewIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
);

const FolderIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
);

const FilterIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
);

// =========================================
// KOMPONEN KARTU MODUL (SUDAH ADA SENSOR HP)
// =========================================
const ModulCard = ({ modul }) => {
  const [fileSize, setFileSize] = useState("Loading...");
  const [fileExt, setFileExt] = useState("FILE");
  
  // === STATE UNTUK SENSOR HP ===
  const [isActive, setIsActive] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    let delay;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          delay = setTimeout(() => setIsActive(true), 150);
        } else {
          clearTimeout(delay);
          setIsActive(false);
        }
      },
      // Titik pemicu: pas kartu masuk di 25% tengah layar HP
      { rootMargin: "-25% 0px -25% 0px", threshold: 0 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => {
      if (delay) clearTimeout(delay);
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  useEffect(() => {
    const extension = modul.link.split('.').pop().toUpperCase();
    setFileExt(extension);

    const fetchFileSize = async () => {
      try {
        const response = await fetch(modul.link, { method: 'HEAD' });
        if (response.ok) {
          const bytes = response.headers.get('content-length');
          if (bytes) {
            const mbSize = (bytes / (1024 * 1024)).toFixed(2);
            setFileSize(`${mbSize} MB`);
          } else {
            setFileSize("Unknown Size");
          }
        } else {
          setFileSize("File Not Found");
        }
      } catch (error) {
        setFileSize("Failed to load");
      }
    };

    fetchFileSize();
  }, [modul.link]);

  return (
    <div 
      ref={cardRef}
      className={`group bg-white rounded-[2rem] p-8 border transition-all duration-300 flex flex-col justify-between
        /* EFEK PC (MURNI HOVER KURSOR) */
        md:border-slate-200 md:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] md:hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] md:hover:-translate-y-1
        
        /* EFEK HP (AKTIF SAAT DI-SCROLL KE TENGAH) */
        ${isActive 
          ? 'max-md:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)] max-md:-translate-y-1 max-md:border-purple-200' 
          : 'max-md:border-slate-200 max-md:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] max-md:translate-y-0'}
      `}
    >
      <div>
        <div className="flex justify-between items-start mb-6">
          <div className={`p-4 rounded-2xl border transition-colors duration-300 text-rose-500
            /* EFEK ICON PC */
            md:bg-rose-50 md:border-rose-100 md:group-hover:bg-rose-100
            /* EFEK ICON HP */
            ${isActive ? 'max-md:bg-rose-100 max-md:border-rose-200' : 'max-md:bg-rose-50 max-md:border-rose-100'}
          `}>
            <PdfIcon />
          </div>
          
          <div className="flex flex-col items-end gap-2">
            <span className="bg-slate-100 text-slate-500 font-bold px-3 py-1 rounded-full text-[11px] tracking-wider border border-slate-200">
              {fileExt} DOCUMENT
            </span>
          </div>
        </div>

        <h2 className={`text-2xl font-bold mb-3 transition-colors duration-300
          /* EFEK TEKS PC */
          md:text-slate-900 md:group-hover:text-purple-900
          /* EFEK TEKS HP */
          ${isActive ? 'max-md:text-purple-900' : 'max-md:text-slate-900'}
        `}>
          {modul.title}
        </h2>
        <p className="text-slate-500 text-[15px] leading-relaxed mb-8 line-clamp-3">
          {modul.description}
        </p>
      </div>

      <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="flex flex-wrap gap-3">
          <div className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg flex items-center gap-2">
            <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Size:</span>
            <span className="text-slate-700 text-sm font-bold">{fileSize}</span>
          </div>
          <div className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg flex items-center gap-2">
            <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Pages:</span>
            <span className="text-slate-700 text-sm font-bold">{modul.pages}</span>
          </div>
        </div>

        <a 
          href={modul.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-purple-900 text-white font-bold py-3 px-6 rounded-xl transition-colors duration-300 shadow-sm"
        >
          <ViewIcon />
          <span>Baca Modul</span>
        </a>
      </div>
    </div>
  );
};

export default function Modul() {
  const [activeFilter, setActiveFilter] = useState("Semua Kelas");

  const filterCategories = ["Semua Kelas", ...new Set(modulData.map(item => item.classCode))];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredModuls = activeFilter === "Semua Kelas" 
    ? modulData 
    : modulData.filter(modul => modul.classCode === activeFilter);

  return (
    <PageTransition>
    <div className="pt-32 pb-32 min-h-screen bg-[#fafafa] font-sans text-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6 bg-white border border-slate-200 px-5 py-2 rounded-full shadow-sm">
            <div className="text-orange-500"><FolderIcon /></div>
            <span className="text-slate-600 font-bold uppercase tracking-widest text-xs">Pusat Unduhan</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Modul <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Praktikum</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Pilih kelas Anda pada filter di bawah untuk menemukan modul praktikum yang sesuai.
          </p>
        </div>

        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-2 mb-4 text-slate-400">
            <FilterIcon />
            <span className="text-sm font-bold uppercase tracking-widest">Filter Berdasarkan Kelas</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {filterCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 border shadow-sm ${
                  activeFilter === category
                    ? "bg-orange-500 text-white border-orange-600 shadow-orange-500/20 translate-y-[-1px]"
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-purple-900"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredModuls.length > 0 ? (
            filteredModuls.map((modul) => (
              <ModulCard key={modul.id} modul={modul} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-slate-500 text-lg">Modul untuk kelas ini belum tersedia.</p>
            </div>
          )}
        </div>

      </div>
    </div>
    </PageTransition>
  );
}