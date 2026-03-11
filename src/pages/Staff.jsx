import { useEffect } from 'react';
import PageTransition from '../components/PageTransition';

// =========================================
// DATA DOSEN / STAFF (HANYA 2 ORANG)
// =========================================
const staffData = [
  {
    name: "Dr. Budi Santoso, S.E., M.Ak.",
    role: "Kepala Laboratorium Pajak",
    expertise: "Perpajakan Internasional & Akuntansi Publik",
    email: "budi.santoso@gunadarma.ac.id",
    img: "/img-staff/dosen1.png" // Ganti dengan path foto asli
  },
  {
    name: "Siti Aminah, S.E., M.Sc., BKP.",
    role: "Koordinator Operasional Lab",
    expertise: "Hukum Pajak & Manajemen Risiko Terapan",
    email: "siti.aminah@gunadarma.ac.id",
    img: "/img-staff/dosen2.png" // Ganti dengan path foto asli
  }
];

export default function Staff() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
    <div className="min-h-screen font-sans text-slate-800 pb-32 relative">
      
      {/* === BACKGROUND DOTS (TIDAK DIUBAH SAMA SEKALI) === */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-[#fafafa] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none"></div>

      {/* =========================================
          1. HEADER STAFF (CLEAN & FORMAL)
      ========================================= */}
      <section className="pt-36 md:pt-48 pb-16 relative px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          Pimpinan <span className="text-slate-500 font-light">Laboratorium</span>
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
          Dibimbing oleh tenaga pendidik profesional dengan kepakaran di bidang perpajakan untuk memastikan kualitas kurikulum dan pelayanan laboratorium yang berstandar tinggi.
        </p>
        <div className="w-20 h-1 bg-slate-300 mx-auto mt-10 rounded-full"></div>
      </section>

      {/* =========================================
          2. CARDS SECTION (UKURAN BESAR, TIDAK KEKECILAN)
      ========================================= */}
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Grid 2 kolom, memberikan ruang yang sangat luas untuk masing-masing card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          
          {staffData.map((staff, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-[2rem] border border-slate-200/60 p-2 sm:p-3 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col"
            >
              {/* Container Foto - Rasio Portrait Formal */}
              <div className="relative w-full aspect-[4/5] bg-gradient-to-b from-slate-50 to-slate-100 rounded-[1.5rem] overflow-hidden mb-6 flex items-end justify-center">
                
                {/* Efek Siluet Halus (Elegan, tidak berlebihan) */}
                <img 
                  src={staff.img} 
                  alt="" 
                  loading="lazy"
                  className="absolute w-[85%] h-[85%] object-cover sm:object-contain object-bottom -translate-x-1 opacity-10 grayscale contrast-200 transition-transform duration-700 group-hover:scale-105 group-hover:-translate-x-2 z-0" 
                />

                {/* Foto Utama */}
                <img 
                  src={staff.img} 
                  alt={staff.name} 
                  loading="lazy"
                  onError={(e) => { e.target.src = "https://api.dicebear.com/8.x/initials/svg?seed=Dosen&backgroundColor=f1f5f9&fontFamily=Arial&fontWeight=600" }}
                  className="w-[85%] h-[85%] object-cover sm:object-contain object-bottom drop-shadow-xl transition-transform duration-700 group-hover:scale-105 relative z-10" 
                />
              </div>

              {/* Detail Konten - Tipografi Bersih */}
              <div className="px-6 pb-8 flex flex-col flex-grow text-center">
                <span className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-3">
                  {staff.role}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-2 leading-snug">
                  {staff.name}
                </h3>
                <p className="text-slate-500 text-sm mb-6 flex-grow">
                  {staff.expertise}
                </p>

                {/* Tombol Kontak Formal */}
                <a 
                  href={`mailto:${staff.email}`}
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 bg-slate-50 hover:bg-slate-900 text-slate-700 hover:text-white text-sm font-semibold rounded-xl border border-slate-200 transition-colors duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  Hubungi via Email
                </a>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
    </PageTransition>
  );
}