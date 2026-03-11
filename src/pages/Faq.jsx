import { useState, useEffect } from 'react';
import PageTransition from '../components/PageTransition';

// =========================================
// ICONS (PURE SVG)
// =========================================
const ChevronIcon = ({ className }) => (
  <svg className={`w-6 h-6 shrink-0 transition-transform duration-300 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
  </svg>
);

const ChatBubbleIcon = () => (
  <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
  </svg>
);

// =========================================
// DATA FAQ (DIPERBANYAK SESUAI KONTEKS LAB)
// =========================================
const faqs = [
  { 
    q: "Apa ketentuan jilid modul praktikum?", 
    a: "Modul praktikum wajib dijilid menggunakan Mika Bening di bagian depan dan Buffalo Merah di bagian belakang, serta dilakban hitam di bagian samping." 
  },
  { 
    q: "Kapan jadwal praktikum dimulai?", 
    a: "Jadwal praktikum akan menyesuaikan dengan KRS masing-masing mahasiswa yang tertera di Studentsite. Pastikan Anda mengecek jadwal secara berkala." 
  },
  { 
    q: "Berapa lama batas toleransi keterlambatan?", 
    a: "Toleransi keterlambatan maksimal adalah 15 menit terhitung sejak jadwal praktikum dimulai. Pada minggu ujian, tidak ada toleransi keterlambatan sama sekali." 
  },
  { 
    q: "Bagaimana jika saya berhalangan hadir karena sakit?", 
    a: "Praktikan wajib memberikan surat keterangan dokter maksimal 3 hari setelah jadwal praktikum kepada staff laboratorium. Jika lewat dari batas waktu, akan dianggap tanpa keterangan (Alfa)." 
  },
  { 
    q: "Apakah saya diperbolehkan untuk pindah shift?", 
    a: "Boleh. Pindah shift sementara diberikan maksimal 2 kali kesempatan (kecuali minggu ujian). Pindah shift permanen diberikan maksimal 1 kali kesempatan. Keduanya wajib melapor ke KP kelas maksimal 3 hari sebelum praktikum." 
  },
  { 
    q: "Bagaimana aturan pakaian saat praktikum berlangsung?", 
    a: "Praktikan diwajibkan menggunakan kemeja berkerah atau batik (dimasukkan), celana/rok bahan kain warna hitam, dan menggunakan sepatu tertutup. Bahan kaos, jeans, dan celana kargo sangat dilarang." 
  },
  { 
    q: "Apa yang terjadi jika saya alfa (tanpa keterangan)?", 
    a: "Batas maksimal ketidakhadiran adalah 2 kali. Jika pada ke-3 kalinya Anda tetap alfa, maka Anda akan otomatis di-DELETE dari daftar peserta praktikum." 
  }
];

export default function Faq() {
  // active di-set ke index yang sedang dibuka. null = tutup semua.
  const [active, setActive] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    // Kalau yang diklik adalah yang lagi kebuka, tutup (set null). Kalau bukan, buka index baru.
    setActive(active === index ? null : index);
  };

  return (
    <PageTransition>
    <div className="pt-32 pb-32 min-h-screen bg-[#fafafa] font-sans text-slate-800 relative overflow-hidden">
      
      {/* Background Decor (Biar nggak terlalu polos) */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-800/5 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-12 text-center text-purple-800 underline decoration-orange-500 underline-offset-8">FAQ Praktikum</h1>
          <p className="text-slate-500 mt-4 text-lg font-medium">
            Temukan jawaban cepat untuk pertanyaan umum seputar kegiatan praktikum.
          </p>
        </div>

        {/* FAQ LIST CONTAINER */}
        <div className="space-y-4">
          {faqs.map((f, i) => {
            const isActive = active === i;
            
            return (
              <div 
                key={i} 
                // Interaksi Hover & Active State
                className={`bg-white rounded-[1.5rem] border transition-all duration-300 shadow-sm
                  ${isActive 
                    ? 'border-purple-400 ring-4 ring-purple-50 shadow-md' 
                    : 'border-slate-200 hover:border-orange-300 hover:shadow-md hover:-translate-y-0.5'
                  }
                `}
              >
                {/* QUESTION BUTTON */}
                <button 
                  onClick={() => toggleFaq(i)} 
                  className="w-full px-6 py-6 text-left flex justify-between items-center gap-6 focus:outline-none"
                >
                  <span className={`text-lg font-bold transition-colors duration-300 pr-4 leading-snug
                    ${isActive ? 'text-purple-900' : 'text-slate-800'}
                  `}>
                    {f.q}
                  </span>
                  
                  {/* ICON WRAPPER: Berubah warna dan muter kalau aktif */}
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-300 shrink-0
                    ${isActive ? 'bg-purple-100 text-purple-700' : 'bg-slate-100 text-slate-500'}
                  `}>
                    <ChevronIcon className={isActive ? 'rotate-180' : 'rotate-0'} />
                  </div>
                </button>
                
                {/* ANSWER CONTENT (DIBUAT ANIMASI SLIDE DOWN PAKAI CSS GRID) */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out
                    ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
                  `}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-slate-600 font-medium leading-relaxed border-t border-slate-50 pt-4 mt-2">
                      {f.a}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
        
        {/* FOOTER TEXT INFO */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 font-medium">
            Tidak menemukan jawaban yang Anda cari? <br className="md:hidden" />
            <a href="#" className="text-orange-500 font-bold hover:text-orange-600 underline decoration-2 underline-offset-4 transition-colors">
              Hubungi Staff Laboratorium
            </a>
          </p>
        </div>

      </div>
    </div>
    </PageTransition>
  );
}