import { useEffect } from 'react';
import PageTransition from '../components/PageTransition';

export default function TentangKami() {
  
  // Efek scroll to top otomatis setiap pindah halaman
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
    <div className="bg-[#fafafa] min-h-screen font-sans text-gray-800 scroll-smooth overflow-hidden pb-32">
      
      {/* === BACKGROUND PATTERN === */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-[#fafafa] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-70"></div>

      {/* =========================================
          1. HERO & TENTANG KAMI (EDITORIAL LAYOUT)
      ========================================= */}
      <section className="pt-36 md:pt-48 pb-16 relative px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* KIRI: TEKS DESKRIPSI (DIRANGKUM JADI LEBIH PUNCHY & MENARIK) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[3px] bg-orange-500"></div>
              <span className="text-orange-500 font-black uppercase tracking-[0.25em] text-sm">Profil Identitas</span>
            </div>
            
            <h1 className="text-5xl md:text-[5.5rem] font-black text-gray-900 leading-[1.05] tracking-tighter mb-8">
              Tentang <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-purple-600">Kami.</span>
            </h1>
            
            {/* Teks Singkat, Padat, Jelas */}
            <div className="space-y-6 text-gray-600 text-lg md:text-xl leading-relaxed text-justify mb-10">
              <p>
                <strong className="text-purple-900 font-black">Laboratorium Akuntansi Lanjut B (Pajak)</strong> adalah fasilitas akademik unggulan di Fakultas Ekonomi Universitas Gunadarma. Kami hadir untuk mengubah teori kelas menjadi pengalaman dunia nyata melalui simulasi perpajakan yang interaktif dan aplikatif.
              </p>
              <p>
                Melalui modul praktikum terstruktur dan penggunaan piranti lunak standar industri, kami membekali mahasiswa dengan keterampilan teknis mutakhir. Tujuan kami satu: mencetak profesional muda yang kompeten dan siap menghadapi tantangan ekosistem perpajakan digital.
              </p>
            </div>

            {/* Fitur Software diubah jadi Tags biar desainnya modern dan ga numpuk di paragraf */}
            <div className="flex flex-wrap gap-3">
              <span className="bg-white border border-purple-100 text-purple-800 text-sm font-bold px-4 py-2 rounded-full shadow-sm">💻 E-Faktur</span>
              <span className="bg-white border border-purple-100 text-purple-800 text-sm font-bold px-4 py-2 rounded-full shadow-sm">📄 E-Form</span>
              <span className="bg-white border border-purple-100 text-purple-800 text-sm font-bold px-4 py-2 rounded-full shadow-sm">📕 Adobe Acrobat</span>
            </div>
          </div>

          {/* KANAN: OVERLAPPING IMAGES (GAYA AGENCY) */}
          <div className="lg:col-span-5 relative h-[400px] md:h-[550px] w-full mt-10 lg:mt-0">
            {/* Dekorasi Blob Belakang */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange-300/30 rounded-full blur-[80px] z-0"></div>
            
            {/* Gambar Utama (Miring dikit) */}
            <div className="absolute top-0 right-0 w-[90%] h-[85%] rounded-[2rem] overflow-hidden shadow-2xl z-10 border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-700">
              <div className="absolute inset-0 bg-purple-900/10 mix-blend-multiply z-10 hover:bg-transparent transition-colors duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1577415124269-b911cff4074f?w=800&q=80" 
                alt="Fasilitas Lab Pajak" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Gambar Kecil (Numpuk di bawah kiri) */}
            <div className="absolute bottom-4 -left-4 w-[65%] h-[50%] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)] z-20 border-4 border-white transform -rotate-3 hover:rotate-0 hover:-translate-y-2 transition-all duration-700 hidden sm:block">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80" 
                alt="Simulasi Perpajakan" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          2. VISI & MISI (BENTO GRID DESIGN)
      ========================================= */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* CARD VISI (DARK MODE) */}
          <div className="lg:col-span-5 bg-purple-900 rounded-[2.5rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden flex flex-col justify-center group border border-purple-800">
            {/* Aksesoris Quote Tipis di Background */}
            <div className="absolute -top-6 -right-2 text-[12rem] font-serif leading-none text-purple-800/60 opacity-50 group-hover:scale-110 transition-transform duration-700 pointer-events-none">"</div>
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 to-yellow-400"></div>

            <h2 className="relative z-10 text-xl font-black text-orange-400 mb-8 uppercase tracking-[0.25em] flex items-center gap-3">
              <span className="w-8 h-[2px] bg-orange-400"></span> Visi
            </h2>
            
            <p className="relative z-10 text-2xl md:text-3xl font-bold leading-snug tracking-tight text-purple-50 italic">
              "Pada tahun 2012, mewujudkan Program Studi akuntansi berbasis tekhnologi informasi dan komunikasi terkemuka di Indonesia yang kontribusinya di bidang <span className="text-white underline decoration-orange-500 decoration-4 underline-offset-4">Pendidikan, Penelitian dan Pengabdian masyarakat</span> diakui (Recognized) di tingkat regional maupun Internasional."
            </p>
          </div>

          {/* CARD MISI (LIGHT MODE WITH BIG NUMBERS) */}
          <div className="lg:col-span-7 bg-white rounded-[2.5rem] p-10 md:p-12 shadow-xl border border-gray-100 flex flex-col justify-center">
            <h2 className="text-xl font-black text-purple-900 mb-8 uppercase tracking-[0.25em] flex items-center gap-3">
              <span className="w-8 h-[2px] bg-purple-900"></span> Misi
            </h2>

            <div className="space-y-6">
              {/* Misi Poin 1 */}
              <div className="flex items-start gap-4 sm:gap-6 group">
                <div className="text-4xl md:text-5xl font-black text-gray-200 group-hover:text-orange-500 transition-colors duration-300 leading-none shrink-0 mt-1">
                  01
                </div>
                <p className="text-base md:text-lg text-gray-700 font-medium leading-relaxed group-hover:text-gray-900 transition-colors">
                  Menyelenggarakan pendidikan tinggi akuntansi berbasis tekhnologi informasi dan komunikasi yang berkualitas dalam rangka meningkatkan daya saing bangsa.
                </p>
              </div>

              <div className="w-full h-px bg-gray-100"></div>

              {/* Misi Poin 2 */}
              <div className="flex items-start gap-4 sm:gap-6 group">
                <div className="text-4xl md:text-5xl font-black text-gray-200 group-hover:text-orange-500 transition-colors duration-300 leading-none shrink-0 mt-1">
                  02
                </div>
                <p className="text-base md:text-lg text-gray-700 font-medium leading-relaxed group-hover:text-gray-900 transition-colors">
                  Menciptakan suasana akademik yang berkesinambungan dan mendukung kegiatan penelitian yang bertaraf internasional dan bermanfaat bagi kesejahteraan umat manusia.
                </p>
              </div>

              <div className="w-full h-px bg-gray-100"></div>

              {/* Misi Poin 3 */}
              <div className="flex items-start gap-4 sm:gap-6 group">
                <div className="text-4xl md:text-5xl font-black text-gray-200 group-hover:text-orange-500 transition-colors duration-300 leading-none shrink-0 mt-1">
                  03
                </div>
                <p className="text-base md:text-lg text-gray-700 font-medium leading-relaxed group-hover:text-gray-900 transition-colors">
                  Menyelenggarakan kegiatan pengabdian kepada masyarakat sebagai wujud tanggung jawab social institusi.
                </p>
              </div>

              <div className="w-full h-px bg-gray-100"></div>

              {/* Misi Poin 4 */}
              <div className="flex items-start gap-4 sm:gap-6 group">
                <div className="text-4xl md:text-5xl font-black text-gray-200 group-hover:text-orange-500 transition-colors duration-300 leading-none shrink-0 mt-1">
                  04
                </div>
                <p className="text-base md:text-lg text-gray-700 font-medium leading-relaxed group-hover:text-gray-900 transition-colors">
                  Menyelenggarakan kerjasama yang bersinergi dengan berbagai institusi, baik di dalam maupun di luar negeri.
                </p>
              </div>

              <div className="w-full h-px bg-gray-100"></div>

              {/* Misi Poin 5 */}
              <div className="flex items-start gap-4 sm:gap-6 group">
                <div className="text-4xl md:text-5xl font-black text-gray-200 group-hover:text-orange-500 transition-colors duration-300 leading-none shrink-0 mt-1">
                  05
                </div>
                <p className="text-base md:text-lg text-gray-700 font-medium leading-relaxed group-hover:text-gray-900 transition-colors">
                  Mengembangkan institusi dalam rangka merespon berbagai perubahan yang terjadi.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
    </PageTransition>
  );
}