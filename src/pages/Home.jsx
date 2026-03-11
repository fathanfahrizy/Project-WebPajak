import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import PageTransition from '../components/PageTransition';

export default function Home() {
  const isOprecOpen = true; 
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  // DATA BERITA MANUAL (Gambar statis HD yang responsif)
  const articles = [
    { 
      title: "Purbaya Buka Suara soal THR Swasta Kena Pajak Tapi ASN Tidak", 
      source: "Detik Finance", 
      date: "Maret 2026", 
      // Thumbnail: Uang / Finansial
      img: "https://images.unsplash.com/photo-1580519542036-ed47c164d1cd?auto=format&fit=crop&w=800&q=80",
      link: "https://finance.detik.com/berita-ekonomi-bisnis/d-8388505/purbaya-buka-suara-soal-thr-swasta-kena-pajak-tapi-asn-tidak"
    },
    { 
      title: "Surat Pemberitahuan Tahunan: Jenis, Cara Menyampaikan, Batas Akhir", 
      source: "Detik Sumut", 
      date: "Maret 2026", 
      // Thumbnail: Dokumen / Menulis Laporan
      img: "https://images.unsplash.com/photo-1586486855514-8c633cc15394?auto=format&fit=crop&w=800&q=80",
      link: "https://www.detik.com/sumut/berita/d-8393244/surat-pemberitahuan-tahunan-jenis-cara-menyampaikan-batas-akhir"
    },
    { 
      title: "Cara Lengkap Aktivasi Akun Coretax Buat Lapor SPT", 
      source: "Detik Finance", 
      date: "Maret 2026", 
      // Thumbnail: Sistem Digital / Laptop
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      link: "https://finance.detik.com/berita-ekonomi-bisnis/d-8310031/cara-lengkap-aktivasi-akun-coretax-buat-lapor-spt"
    },
  ];

  // Lock scroll saat modal terbuka
  useEffect(() => {
    if (isModalOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isModalOpen]);

  return (
    <PageTransition>
    <div className="bg-[#fafafa] font-sans text-gray-800 scroll-smooth relative z-0">
      
      {/* === BACKGROUND DOTS === */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[#fafafa] bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px]"></div>

      {/* =========================================
          1. HERO SECTION
      ========================================= */}
      <section className="relative pt-32 md:pt-36 pb-20 lg:pb-24 bg-purple-900 border-b-[12px] border-orange-500 overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-gradient-to-bl from-purple-800 to-transparent rounded-full opacity-60 translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
            
            <div className="w-full lg:w-6/12 flex flex-col justify-center mt-6 lg:mt-0">

              <h1 className="text-4xl md:text-5xl lg:text-[3.8rem] font-black text-white leading-[1.1] mb-6 tracking-tighter">
                Laboratorium <br/> 
                <span className="text-orange-500">Akuntansi Lanjut B.</span>
              </h1>
              
              <p className="text-purple-100/90 text-base md:text-lg font-medium mb-8 max-w-lg leading-relaxed text-justify">
                Fasilitas praktikum perpajakan terpadu. Solusi cerdas pendalaman teori pajak modern ke implementasi standar industri modern.
              </p>

              <div className="hidden lg:flex flex-wrap items-center gap-4">
                <Link to="/modul" className="bg-orange-500 hover:bg-white hover:text-orange-600 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg transition-colors flex items-center gap-3 text-base">
                  Ambil Modul <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </div>
            </div>

            {/* CARD FOTO PREMIUM GLASSMORPHISM */}
            <div className="lg:w-6/12 w-full flex justify-center items-center mt-8 lg:mt-0 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/40 to-purple-500/40 rounded-[3rem] blur-3xl -z-10 opacity-70"></div>
              <div 
                className="relative w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-4 sm:p-5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 group cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                <div className="w-full aspect-[4/3] sm:aspect-video rounded-[1.8rem] overflow-hidden relative shadow-inner">
                  <img 
                    src="\img-team\foto-taxlab.jpg" 
                    alt="Suasana Lab" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                  <div className="absolute inset-0 bg-transparent group-hover:bg-slate-900/30 transition-colors duration-500 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-md text-white p-4 rounded-full opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-500 shadow-2xl border border-white/30">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 px-2 pb-1 flex items-center justify-between">
                   <div>
                     <h4 className="text-white font-bold text-sm sm:text-base tracking-wide">Asisten Laboratorium Lanjut B</h4>
                     <p className="text-orange-400 font-black text-xs sm:text-sm mt-0.5 uppercase tracking-widest">2025/2026</p>
                   </div>
                   <div className="w-10 h-10 bg-white/10 group-hover:bg-orange-500 border border-white/20 group-hover:border-orange-400 rounded-full flex items-center justify-center text-white transition-all shadow-sm">
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v8m0 0v8m0-8h8m-8 0H4" /></svg>
                   </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:hidden flex justify-center mt-4 relative z-20">
              <Link to="/modul" className="bg-orange-500 hover:bg-white hover:text-orange-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition-colors flex items-center gap-3 text-base w-full justify-center">
                Ambil Modul <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          2. PROFIL BOX 
      ========================================= */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="mb-10 border-b border-gray-200 pb-4">
          <h2 className="text-sm font-black text-orange-500 uppercase tracking-widest mb-1">Informasi Umum</h2>
          <h3 className="text-3xl font-black text-gray-900">Profil Laboratorium</h3>
        </div>
        
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 bg-white rounded-xl p-10 lg:p-14 border border-gray-100 shadow-sm flex flex-col justify-center hover:border-purple-300 transition-colors">
            <h3 className="text-3xl md:text-4xl font-black text-purple-900 mb-6">Pusat Studi & Praktik Pajak Terpadu</h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed text-justify">
              Laboratorium Akuntansi Lanjut B berdedikasi untuk menjembatani kesenjangan antara teori akademis dan kebutuhan industri perpajakan. Kami memfasilitasi mahasiswa dengan simulasi pelaporan pajak berbasis Coretax dan e-SPT.
            </p>
            <Link to="/tentang-kami" className="text-orange-500 font-bold hover:text-orange-600 flex items-center gap-2 w-max border-b-2 border-orange-500 pb-1">
              Baca Sejarah & Visi Misi Lengkap <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6">
            {isOprecOpen && (
              <div className="bg-orange-50 rounded-xl p-8 border border-orange-100 flex-grow flex flex-col justify-center hover:border-orange-300 transition-colors shadow-sm">
                <span className="bg-orange-500 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-widest mb-4 w-max">Rekrutmen Buka</span>
                <h3 className="text-2xl font-black text-gray-900 mb-3">Oprec Asisten Lab</h3>
                <p className="text-gray-600 mb-6">Pendaftaran asisten angkatan 2026 telah dibuka. Persiapkan dirimu.</p>
                <Link to="/oprec" className="bg-orange-500 text-white font-bold px-6 py-3 rounded-lg text-center hover:bg-orange-600 transition-colors shadow-sm">
                  Lihat Persyaratan
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================
          3. LAYANAN PRAKTIKUM
      ========================================= */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 border-b border-gray-200 pb-4 text-center">
            <h2 className="text-sm font-black text-purple-800 uppercase tracking-widest mb-1">Fasilitas Mahasiswa</h2>
            <h3 className="text-3xl font-black text-gray-900">Layanan Praktikum</h3>
          </div>

          <div className="flex flex-col gap-12">
            
            <div className="grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 bg-white rounded-xl p-10 lg:p-14 border border-gray-100 shadow-sm flex flex-col justify-center order-2 lg:order-1 hover:border-purple-300 transition-colors">
                <h3 className="text-3xl md:text-4xl font-black text-purple-900 mb-6">Aturan & Ketentuan Praktikum</h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed text-justify">
                  Pedoman wajib bagi seluruh praktikan. Mencakup aturan berpakaian, batas keterlambatan, format penjilidan laporan, serta sanksi pelanggaran demi menjaga kedisiplinan dan kelancaran kegiatan praktikum.
                </p>
                <Link to="/tata-tertib" className="text-orange-500 font-bold hover:text-orange-600 flex items-center gap-2 w-max border-b-2 border-orange-500 pb-1">
                  Baca Tata Tertib Lengkap <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
              <div className="lg:col-span-4 bg-slate-100 rounded-xl border border-gray-200 overflow-hidden h-64 lg:h-auto order-1 lg:order-2 shadow-sm">
                <img src="/img-team/TataTertib.png" alt="Tata Tertib" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4 bg-slate-100 rounded-xl border border-gray-200 overflow-hidden h-64 lg:h-auto shadow-sm">
                <img src="/img-team/Software.png" alt="Software Pajak" className="w-full h-full object-cover" />
              </div>
              <div className="lg:col-span-8 bg-white rounded-xl p-10 lg:p-14 border border-gray-100 shadow-sm flex flex-col justify-center hover:border-purple-300 transition-colors">
                <h3 className="text-3xl md:text-4xl font-black text-purple-900 mb-6">Pusat Unduhan Software</h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed text-justify">
                  Akses langsung ke berbagai aplikasi pajak yang digunakan selama masa praktikum. Mulai dari e-SPT PPh, e-Faktur, hingga patch update terbaru yang dijamin aman dan bebas virus.
                </p>
                <Link to="/software-pajak" className="text-orange-500 font-bold hover:text-orange-600 flex items-center gap-2 w-max border-b-2 border-orange-500 pb-1">
                  Akses Halaman Software <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 bg-white rounded-xl p-10 lg:p-14 border border-gray-100 shadow-sm flex flex-col justify-center order-2 lg:order-1 hover:border-purple-300 transition-colors">
                <h3 className="text-3xl md:text-4xl font-black text-purple-900 mb-6">Materi & Modul Pembelajaran</h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed text-justify">
                  Buku panduan komprehensif berformat PDF yang disusun khusus oleh tim ahli kami. Modul ini menjadi referensi utama praktikan dalam memahami studi kasus riil pelaporan pajak.
                </p>
                <Link to="/modul" className="text-orange-500 font-bold hover:text-orange-600 flex items-center gap-2 w-max border-b-2 border-orange-500 pb-1">
                  Unduh Modul Sekarang <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
              <div className="lg:col-span-4 bg-slate-100 rounded-xl border border-gray-200 overflow-hidden h-64 lg:h-auto order-1 lg:order-2 shadow-sm">
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80" alt="Modul Praktikum" className="w-full h-full object-cover" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          4. NEWS / ARTIKEL BOX (MANUAL/HARDCODE & RESPONSIVE)
      ========================================= */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-10 gap-4 sm:gap-6 border-b border-gray-200 pb-4">
            <div>
              <h2 className="text-sm font-black text-orange-500 uppercase tracking-widest mb-1">Berita Perpajakan</h2>
              <h3 className="text-3xl font-black text-gray-900">Wawasan Terkini</h3>
            </div>
            <a href="https://finance.detik.com/pajak" target="_blank" rel="noreferrer" className="text-purple-800 font-bold hover:text-orange-500 text-sm uppercase tracking-wide group flex items-center gap-1 transition-colors">
              Lihat Web Detik <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((art, i) => (
              <a key={i} href={art.link} target="_blank" rel="noreferrer" className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col group hover:shadow-md hover:border-purple-200 transition-all cursor-pointer">
                
                {/* CONTAINER GAMBAR RESPONSIF (aspect ratio disesuaikan biar proporsional di HP & PC) */}
                <div className="w-full aspect-[4/3] sm:aspect-video overflow-hidden relative bg-slate-200">
                  <img src={art.img} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3 border-b border-gray-100 pb-3">
                    <span className="text-orange-600 font-bold text-[10px] uppercase tracking-widest">{art.source}</span>
                    <span className="text-gray-400 text-xs font-medium">{art.date}</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-purple-800 transition-colors line-clamp-3">{art.title}</h4>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          5. LOKASI BOX
      ========================================= */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-purple-900 rounded-xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-lg">
            <div className="md:w-1/2 text-white">
              <h2 className="text-sm font-bold text-orange-400 uppercase tracking-widest mb-2">Informasi Akses</h2>
              <h3 className="text-4xl font-black mb-6">Lokasi Laboratorium</h3>
              <p className="text-purple-200 font-medium text-lg leading-relaxed mb-8">Gedung Laboratorium Terpadu Universitas Gunadarma, Jl. Margonda Raya No. 100, Depok, Jawa Barat.</p>
              <Link to="/lokasi" className="inline-block bg-white text-purple-900 px-8 py-3.5 rounded-lg font-bold hover:bg-orange-500 hover:text-white transition-colors shadow-sm">
                Lihat Detail Peta
              </Link>
            </div>
            <div className="md:w-1/2 w-full">
               <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" alt="Gedung Kampus" className="w-full h-64 object-cover rounded-lg shadow-inner opacity-90" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          6. FAQ & KONTAK
      ========================================= */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-sm font-black text-purple-800 uppercase tracking-widest mb-2">Pusat Bantuan</h2>
          <h3 className="text-3xl font-black text-gray-900 mb-6">Butuh Informasi Lebih Lanjut?</h3>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            Jika Anda memiliki kendala terkait instalasi software, aturan praktikum, atau pertanyaan umum lainnya, silakan merujuk pada halaman FAQ atau hubungi tim kami secara langsung.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/faq" className="bg-white text-purple-900 border border-purple-200 font-bold px-8 py-3.5 rounded-lg hover:border-purple-400 transition-colors shadow-sm">
              Baca FAQ
            </Link>
            <Link to="/kontak" className="bg-orange-500 text-white font-bold px-8 py-3.5 rounded-lg hover:bg-orange-600 transition-colors shadow-sm">
              Hubungi Kontak
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================
          MODAL INTERAKTIF
      ========================================= */}
      {isModalOpen && createPortal(
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6" 
          onClick={() => setIsModalOpen(false)}
        >
          <button 
            className="fixed top-6 right-6 md:top-8 md:right-8 z-[10000] text-white/70 hover:text-white transition-all bg-white/10 hover:bg-orange-500 p-2.5 md:p-3 rounded-full backdrop-blur-md border border-white/20" 
            onClick={() => setIsModalOpen(false)}
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          <div className="relative flex flex-col items-center justify-center w-full max-w-7xl animate-[fadeIn_0.2s_ease-out]">
            <img 
              src="\img-team\foto-taxlab.jpg" 
              alt="Lab Full View" 
              className="max-w-[90vw] max-h-[85vh] w-auto h-auto object-contain rounded-xl md:rounded-2xl shadow-2xl border border-white/10 cursor-default" 
              onClick={(e) => e.stopPropagation()} 
            />
            
            <p className="text-white/90 mt-6 font-bold tracking-widest uppercase text-xs md:text-sm bg-black/50 px-6 py-2.5 rounded-full border border-white/10">
              Suasana Laboratorium Akuntansi Lanjut B
            </p>
          </div>
        </div>,
        document.body
      )}

    </div>
    </PageTransition>
  );
}