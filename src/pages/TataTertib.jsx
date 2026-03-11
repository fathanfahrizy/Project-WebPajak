import { useEffect, useState, useRef } from 'react';
import PageTransition from '../components/PageTransition';

// =========================================
// CUSTOM ICONS (NO EMOJI)
// =========================================
const WarningIcon = () => (
  <svg className="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

const CheckIcon = ({ className }) => (
  <svg className={`w-5 h-5 shrink-0 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);

const FemaleIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C9.243 2 7 4.243 7 7c0 2.336 1.603 4.316 3.75 4.863V14.5a3.5 3.5 0 0 0-2.25 6.467V22h7v-1.033A3.5 3.5 0 0 0 13.25 14.5v-2.637C15.397 11.316 17 9.336 17 7c0-2.757-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z"/></svg>
);

const MaleIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C9.243 2 7 4.243 7 7c0 2.757 2.243 5 5 5 2.757 0 5-2.243 5-5 0-2.757-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm-4.75 6a3.5 3.5 0 0 0-3.5 3.5V22h16v-2.5a3.5 3.5 0 0 0-3.5-3.5h-9z"/></svg>
);

// =========================================
// KOMPONEN: LIST ITEM INTERAKTIF 
// (Teks dibikin item solid terus, animasi cuma di kotak & abjad)
// =========================================
const RuleItem = ({ letter, children }) => {
  const [isActive, setIsActive] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      {
        rootMargin: "-30% 0px -30% 0px", 
        threshold: 0
      }
    );
    if (itemRef.current) observer.observe(itemRef.current);
    return () => { if (itemRef.current) observer.unobserve(itemRef.current); };
  }, []);

  return (
    <li 
      ref={itemRef}
      className={`group flex gap-4 sm:gap-5 items-start p-4 rounded-2xl transition-all duration-300 border
        /* === DESKTOP (PC): MURNI HOVER KURSOR === */
        md:border-transparent md:bg-transparent md:translate-y-0
        md:hover:bg-slate-50/80 md:hover:border-slate-100 md:hover:shadow-sm md:hover:-translate-y-0.5
        
        /* === MOBILE (HP): EFEK SCROLL LAYAR === */
        ${isActive 
          ? 'max-md:bg-slate-50/80 max-md:border-slate-100 max-md:shadow-sm max-md:-translate-y-0.5' 
          : 'max-md:border-transparent max-md:translate-y-0'}
      `}
    >
      <span className={`flex items-center justify-center w-7 h-7 rounded-full font-bold text-xs shrink-0 mt-0.5 transition-colors duration-300
        /* DESKTOP */
        md:bg-slate-100 md:text-slate-500 md:group-hover:bg-slate-900 md:group-hover:text-white
        /* MOBILE */
        ${isActive ? 'max-md:bg-slate-900 max-md:text-white' : 'max-md:bg-slate-100 max-md:text-slate-500'}
      `}>
        {letter}
      </span>
      
      {/* INI YANG DIUBAH: TEKS SOLID HITAM, NGGAK ADA TRANSISI WARNA DARI ABU KE HITAM */}
      <div className="leading-relaxed text-[15px] pt-1 text-slate-900">
        {children}
      </div>
    </li>
  );
};

// =========================================
// KOMPONEN: LIST ITEM KHUSUS WARNA MERAH (RULE G)
// =========================================
const SpecialRuleItem = ({ letter, children }) => {
  const [isActive, setIsActive] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsActive(entry.isIntersecting),
      { rootMargin: "-30% 0px -30% 0px", threshold: 0 }
    );
    if (itemRef.current) observer.observe(itemRef.current);
    return () => { if (itemRef.current) observer.unobserve(itemRef.current); };
  }, []);

  return (
    <li 
      ref={itemRef}
      className={`group flex gap-4 sm:gap-5 items-start p-4 rounded-2xl border transition-all duration-300 mt-2
        /* === DESKTOP (PC): MURNI HOVER KURSOR === */
        md:bg-rose-50 md:border-rose-100 md:translate-y-0
        md:hover:border-rose-300 md:hover:bg-rose-100 md:hover:shadow-sm md:hover:-translate-y-0.5
        
        /* === MOBILE (HP): EFEK SCROLL LAYAR === */
        ${isActive 
          ? 'max-md:border-rose-300 max-md:bg-rose-100 max-md:shadow-sm max-md:-translate-y-0.5' 
          : 'max-md:bg-rose-50 max-md:border-rose-100 max-md:translate-y-0'}
      `}
    >
      <span className={`flex items-center justify-center w-7 h-7 rounded-full font-bold text-xs shrink-0 mt-0.5 transition-colors duration-300
        /* DESKTOP */
        md:bg-rose-200 md:text-rose-800 md:group-hover:bg-rose-600 md:group-hover:text-white
        /* MOBILE */
        ${isActive ? 'max-md:bg-rose-600 max-md:text-white' : 'max-md:bg-rose-200 max-md:text-rose-800'}
      `}>
        {letter}
      </span>
      <div className="text-rose-800 leading-relaxed text-[15px] pt-1 font-medium">
        {children}
      </div>
    </li>
  );
};

// =========================================
// HALAMAN UTAMA
// =========================================
export default function TataTertib() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
    <div className="pt-32 pb-32 min-h-screen bg-[#fafafa] font-sans text-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-24">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Tata Tertib <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Praktikum</span>
          </h1>
          <p className="text-slate-500 text-lg">Seluruh praktikan wajib membaca dan mematuhi peraturan berikut.</p>
        </div>

        {/* ====================================
            SECTION 1: KETENTUAN BERPAKAIAN
        ==================================== */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 text-white font-bold text-lg shadow-sm">1</span>
            <h2 className="text-2xl font-bold text-slate-900">Ketentuan Berpakaian</h2>
          </div>
          
          <div className="bg-white p-6 rounded-[1.5rem] shadow-sm border border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8">
              
              {/* KIRI: WANITA */}
              <div>
                {/* --- HEADER TENGAH DENGAN FOTO BINGKAI LINGKARAN --- */}
                <div className="flex flex-col items-center text-center gap-3 mb-6 pb-5 border-b border-slate-100">
                  <div className="w-20 h-20 bg-slate-50 rounded-full border border-slate-200 flex items-center justify-center p-3 shadow-sm">
                    <img src="/img-template/logo-wanita.png" alt="Foto Wanita" className="w-full h-full object-contain drop-shadow-sm" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Praktikan Wanita</h3>
                </div>

                <ul className="flex flex-col gap-2">
                  <RuleItem letter="A">
                    Kemeja berkerah atau batik (dimasukkan). Bukan kaos/blouse/flannel/berkarakter. Tidak ketat & tidak transparan.
                  </RuleItem>
                  <RuleItem letter="B">
                    Rok hitam berbahan kain & bersleting (bukan kaos).
                  </RuleItem>
                  <RuleItem letter="C">
                    Panjang rok di bawah lutut (non-hijab) atau menutupi mata kaki (berhijab).
                  </RuleItem>
                  <RuleItem letter="D">
                    Wajib memakai kerudung segi empat (bagi yang berhijab).
                  </RuleItem>
                </ul>
              </div>

              {/* KANAN: PRIA */}
              <div>
                {/* --- HEADER TENGAH DENGAN FOTO BINGKAI LINGKARAN --- */}
                <div className="flex flex-col items-center text-center gap-3 mb-6 pb-5 border-b border-slate-100">
                  <div className="w-20 h-20 bg-slate-50 rounded-full border border-slate-200 flex items-center justify-center p-3 shadow-sm">
                    <img src="/img-template/logo-laki.png" alt="Foto Pria" className="w-full h-full object-contain drop-shadow-sm" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Praktikan Pria</h3>
                </div>

                <ul className="flex flex-col gap-2">
                  <RuleItem letter="A">
                    Kemeja berkerah atau batik (tidak bermotif bola). Bukan berbahan kaos/flanel/berkarakter.
                  </RuleItem>
                  <RuleItem letter="B">
                    Celana panjang hitam bahan kain. Bukan hipster / kargo / celana gunung / gombrong / chino.
                  </RuleItem>
                  <RuleItem letter="C">
                    Panjang celana wajib menutupi mata kaki.
                  </RuleItem>
                </ul>
              </div>

            </div>

            {/* Peringatan Tambahan */}
            <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl flex gap-4 items-start shadow-sm mx-2 mb-2">
              <div className="text-amber-500 mt-0.5"><WarningIcon /></div>
              <div className="flex flex-col gap-1.5">
                <span className="font-bold uppercase tracking-widest text-amber-800 text-sm">Peringatan Tambahan</span>
                <p className="text-amber-900 text-[15px] leading-relaxed">
                  Tidak menggunakan perhiasan yang berlebihan (termasuk tindik) kecuali jam tangan. Bagi praktikan yang berambut panjang/gondrong <strong className="font-bold">wajib diikat</strong> selama praktikum berlangsung.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================
            SECTION 2, 3, 4 (TIDAK DISENTUH SAMA SEKALI)
        ==================================== */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 text-white font-bold text-lg shadow-sm">2</span>
            <h2 className="text-2xl font-bold text-slate-900">Ketentuan Umum</h2>
          </div>
          
          <div className="bg-white p-6 rounded-[1.5rem] shadow-sm border border-slate-200">
            <ul className="flex flex-col gap-2">
              {[
                <>Seluruh praktikan wajib berpakaian rapih sesuai dengan peraturan yang ada.</>,
                <>Seluruh praktikan wajib membawa <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 font-extrabold text-[11px] tracking-wider rounded-full border border-slate-200 shadow-sm mx-1.5 align-middle">KRS AKTIF</span> di minggu pertama praktikum dan minggu ujian.</>,
                <>Seluruh praktikan wajib membawa <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 font-extrabold text-[11px] tracking-wider rounded-full border border-slate-200 shadow-sm mx-1.5 align-middle">MODUL BERJILID BENING DAN MERAH</span> (download pada website) serta <span className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4">BUKU TULIS KECIL BERSAMPUL POLOS COKLAT</span>.</>,
                <>Seluruh praktikan wajib mengerjakan <span className="font-semibold text-slate-900">LAPORAN PENDAHULUAN</span> sebelum praktikum dan mengerjakan <span className="font-semibold text-slate-900">TUGAS AKHIR</span> di rumah.</>,
                <>Seluruh praktikan wajib mematuhi tata tertib, bersikap sopan santun, serta menjaga kebersihan ruang praktikum.</>
              ].map((text, idx) => (
                <RuleItem key={idx} letter={String.fromCharCode(97 + idx)}>
                  {text}
                </RuleItem>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 text-white font-bold text-lg shadow-sm">3</span>
            <h2 className="text-2xl font-bold text-slate-900">Keterlambatan dan Absensi</h2>
          </div>
          
          <div className="bg-white p-6 rounded-[1.5rem] shadow-sm border border-slate-200">
            <ul className="flex flex-col gap-2">
              {[
                <>Toleransi keterlambatan <span className="font-bold text-slate-900">15 menit</span> terhitung sejak jadwal praktikum dimulai.</>,
                <>Jika lewat batas waktu pengerjaan Laporan Pendahuluan, berlaku sanksi penambahan tugas.</>,
                <><span className="font-bold text-rose-600">Tidak ada toleransi keterlambatan</span> pada minggu ujian.</>,
                <>Izin wajib membuat surat izin bertanda tangan orang tua, dibawa saat praktikum selanjutnya.</>,
                <>Sakit wajib memberikan surat keterangan dokter maksimal <span className="font-bold text-slate-900">3 hari</span> setelah praktikum (jika tidak, dianggap tanpa keterangan).</>,
                <>Tanpa keterangan wajib membuat video penjelasan materi dan mengunggahnya pada akun Instagram masing-masing.</>,
              ].map((text, idx) => (
                <RuleItem key={idx} letter={String.fromCharCode(97 + idx)}>
                  {text}
                </RuleItem>
              ))}
              
              <SpecialRuleItem letter="g">
                Batas maksimal ketidakhadiran <span className="font-bold">2 kali</span>, jika pada ke-3 kalinya tetap tidak hadir maka praktikan akan di <span className="bg-rose-600 text-white font-black px-2 py-0.5 rounded text-sm tracking-wider mx-1 shadow-sm">DELETE</span> dari praktikum.
              </SpecialRuleItem>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 text-white font-bold text-lg shadow-sm">4</span>
            <h2 className="text-2xl font-bold text-slate-900">Ketentuan Pindah Shift</h2>
          </div>
          
          <div className="bg-white p-6 rounded-[1.5rem] shadow-sm border border-slate-200">
            <ul className="flex flex-col gap-2">
              {[
                <>Pindah Shift sementara dilakukan pada minggu bersangkutan, hanya diberikan <span className="font-bold text-slate-900">2 kali kesempatan</span>. Tidak berlaku pada minggu ujian.</>,
                <>Pindah shift tetap dilakukan pada minggu dimulainya pindah shift sampai ujian. Hanya diberikan <span className="font-bold text-slate-900">1 kali kesempatan</span> dan sifatnya permanen.</>,
                <>Wajib menghubungi KP kelas maksimal <span className="font-bold text-slate-900">3 hari sebelum praktikum</span> dengan memberikan alasan serta bukti yang jelas.</>
              ].map((text, idx) => (
                <RuleItem key={idx} letter={String.fromCharCode(97 + idx)}>
                  {text}
                </RuleItem>
              ))}
            </ul>
          </div>
        </section>

      </div>
    </div>
    </PageTransition>
  );
}