import { useEffect, useState, useRef } from 'react';
import PageTransition from '../components/PageTransition';

// =========================================
// ICONS (PURE SVG)
// =========================================
const EmailIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
  </svg>
);

// =========================================
// KOMPONEN: SCROLL REVEAL CARD
// =========================================
const ContactCard = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.2 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => { if (cardRef.current) observer.unobserve(cardRef.current); };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className={`${className} transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
    >
      {children}
    </div>
  );
};

export default function Kontak() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
    <div className="pt-32 pb-32 min-h-screen bg-[#fafafa] font-sans text-slate-800 relative overflow-hidden">
      
      {/* Background Decor (Aksen halus biar mindful) */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-purple-900/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 bg-white border border-slate-200 px-5 py-2 rounded-full shadow-sm">
            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
            <span className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs">Hubungi Kami</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-6">
            Ada yang bisa <span className="text-purple-900">kami</span> bantu?
          </h1>
          
          <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
            Punya pertanyaan seputar praktikum, pendaftaran asisten, atau butuh bantuan teknis? Tim kami siap merespon pesan Anda.
          </p>
        </div>

        {/* CONTACT GRID */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          
          {/* Card Email */}
          <ContactCard delay={0}>
            <div className="group bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50 hover:border-purple-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center h-full">
              <div className="w-20 h-20 bg-purple-50 text-purple-900 rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:bg-purple-900 group-hover:text-white transition-all duration-500 shadow-inner">
                <EmailIcon />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">Email Resmi</h3>
              <p className="text-slate-500 font-medium mb-8 leading-relaxed">
                Kirimkan pertanyaan atau surat resmi Anda melalui alamat email institusi kami.
              </p>
              <a 
                href="mailto:labpajak@gunadarma.ac.id" 
                className="mt-auto bg-slate-900 text-white font-black px-8 py-4 rounded-2xl hover:bg-purple-900 transition-colors shadow-lg"
              >
                labpajak@gunadarma.ac.id
              </a>
            </div>
          </ContactCard>

          {/* Card Instagram */}
          <ContactCard delay={200}>
            <div className="group bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50 hover:border-orange-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center h-full">
              <div className="w-20 h-20 bg-orange-50 text-orange-600 rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 shadow-inner">
                <InstagramIcon />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">Instagram</h3>
              <p className="text-slate-500 font-medium mb-8 leading-relaxed">
                Ikuti info praktikum terbaru dan kegiatan asisten melalui akun media sosial kami.
              </p>
              <a 
                href="https://instagram.com/taxlab.gunadarma" 
                target="_blank" 
                rel="noreferrer"
                className="mt-auto bg-orange-500 text-white font-black px-8 py-4 rounded-2xl hover:bg-orange-600 transition-colors shadow-lg"
              >
                @taxlab.gunadarma
              </a>
            </div>
          </ContactCard>

        </div>

        {/* INFO TAMBAHAN (Mindful Note) */}
        <div className="max-w-2xl mx-auto bg-purple-900 rounded-[2rem] p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <h4 className="text-white text-xl font-bold mb-4 relative z-10">Waktu Operasional Pesan</h4>
          <p className="text-purple-200 font-medium relative z-10">
            Tim kami akan membalas pesan Anda pada jam kerja operasional Laboratorium (Senin - Sabtu, 08:00 - 17:00 WIB). Mohon menunggu respon dengan sabar.
          </p>
        </div>

      </div>
    </div>
    </PageTransition>
  );
}