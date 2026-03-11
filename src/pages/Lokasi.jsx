import { useState, useEffect } from 'react';
import PageTransition from '../components/PageTransition';

// =========================================
// ICONS (PURE SVG)
// =========================================
const SearchIcon = () => (
  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// =========================================
// DATA LOKASI KAMPUS (MAP URL FIXED)
// =========================================
const locationsData = [
  {
    id: 1,
    title: "LAB AKUNTANSI - KAMPUS H",
    address: "Jl. Akses UI, Kelapa Dua, Kec. Cimanggis, Kota Depok, Jawa Barat 16451",
    status: "Buka",
    // Target: Universitas Gunadarma Kampus H
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.3458925585566!2d106.83842107418296!3d-6.349216062115163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec06967732a3%3A0xc34e0689622d103!2sUniversitas%20Gunadarma%20Kampus%20H!5e0!3m2!1sid!2sid!4v1710000000001",
    directionUrl: "https://www.google.com/maps/place/Gunadarma+University+Library/@-6.3526999,106.8377112,19z/data=!4m6!3m5!1s0x2e69ec11a562ba21:0xb3161aef36b1ca!8m2!3d-6.3527193!4d106.8376682!16s%2Fg%2F1tc_ywzb?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDMwNS4wIKXMDSoASAFQAw%3D%3D",
    image: "/img-team/foto-angkatan.jpg", 
    hours: [
      { day: "Senin", time: "08:00 - 17:00" },
      { day: "Selasa", time: "08:00 - 17:00" },
      { day: "Rabu", time: "08:00 - 17:00" },
      { day: "Kamis", time: "08:00 - 17:00" },
      { day: "Jumat", time: "08:00 - 17:00" },
      { day: "Sabtu", time: "08:00 - 12:00" },
      { day: "Minggu", time: "Tutup" }
    ],
    facilities: ["Layanan Lab Praktikum", "PC All-in-One", "Ruang Ber-AC", "Proyektor & Audio", "Koneksi Internet / LAN"]
  },
  {
    id: 2,
    title: "LAB AKUNTANSI - KAMPUS E",
    address: "Jl. Komp. Timah No.9, Tugu, Kec. Cimanggis, Kota Depok, Jawa Barat 16451",
    status: "Buka",
    // Target: Universitas Gunadarma Kampus E
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.303986427506!2d106.837899774183!3d-6.354638062164426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec1107572791%3A0x629532576c029377!2sUniversitas%20Gunadarma%20Kampus%20E!5e0!3m2!1sid!2sid!4v1710000000002",
    directionUrl: "https://www.google.com/maps/place/University+Gunadarma+Campus+E/@-6.3539253,106.8356261,16.75z/data=!4m14!1m7!3m6!1s0x2e69ec11a562ba21:0xb3161aef36b1ca!2sGunadarma+University+Library!8m2!3d-6.3527193!4d106.8376682!16s%2Fg%2F1tc_ywzb!3m5!1s0x2e69ec475427cefd:0xc4e7eee0f871687!8m2!3d-6.3545526!4d106.8415884!16s%2Fg%2F1tg586j4?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDMwNS4wIKXMDSoASAFQAw%3D%3D",
    image: "/img-team/foto-angkatan.jpg",
    hours: [
      { day: "Senin", time: "08:00 - 17:00" },
      { day: "Selasa", time: "08:00 - 17:00" },
      { day: "Rabu", time: "08:00 - 17:00" },
      { day: "Kamis", time: "08:00 - 17:00" },
      { day: "Jumat", time: "08:00 - 17:00" },
      { day: "Sabtu", time: "08:00 - 12:00" },
      { day: "Minggu", time: "Tutup" }
    ],
    facilities: ["Layanan Lab Praktikum", "PC Desktop", "Ruang Ber-AC", "Papan Tulis Kaca", "Koneksi Internet"]
  },
  {
    id: 3,
    title: "LAB AKUNTANSI - KAMPUS J",
    address: "Jl. KH. Noer Ali, Kalimalang, Kota Bekasi, Jawa Barat 17145",
    status: "Buka",
    // Target: Universitas Gunadarma Kampus J1
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1130386221575!2d106.97237937418218!3d-6.248834961186715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d009230537f%3A0x7d6f519520448e8!2sUniversitas%20Gunadarma%20Kampus%20J1!5e0!3m2!1sid!2sid!4v1710000000003",
    directionUrl: "https://www.google.com/maps/place/Gunadarma+University+Campus+J1/@-6.2492077,106.9678441,17z/data=!3m1!4b1!4m6!3m5!1s0x2e698c5204032a97:0x7dd864ce65061cd8!8m2!3d-6.249213!4d106.970419!16s%2Fg%2F1tdhp3n9?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDMwNS4wIKXMDSoASAFQAw%3D%3D",
    image: "/img-team/foto-angkatan.jpg",
    hours: [
      { day: "Senin", time: "08:00 - 17:00" },
      { day: "Selasa", time: "08:00 - 17:00" },
      { day: "Rabu", time: "08:00 - 17:00" },
      { day: "Kamis", time: "08:00 - 17:00" },
      { day: "Jumat", time: "08:00 - 17:00" },
      { day: "Sabtu", time: "08:00 - 12:00" },
      { day: "Minggu", time: "Tutup" }
    ],
    facilities: ["Layanan Lab Praktikum", "PC Terhubung Jaringan", "Ruang Ber-AC", "Proyektor", "Akses Jurnal"]
  },
  {
    id: 4,
    title: "LAB AKUNTANSI - KAMPUS C",
    address: "Jl. Salemba Tengah No.11, Paseban, Senen, Kota Jakarta Pusat, DKI Jakarta 10440",
    status: "Tutup",
    // Target: Universitas Gunadarma Kampus C
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4954497479717!2d106.8465057741817!3d-6.198170860718503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4699f8d1661%3A0x334460787e9142e0!2sUniversitas%20Gunadarma%20Kampus%20C!5e0!3m2!1sid!2sid!4v1710000000004",
    directionUrl: "https://www.google.com/maps/place/Gunadarma+University+Campus+C/@-6.1970124,106.8495202,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f468146eb42b:0xe44e7c8794de2787!8m2!3d-6.1970177!4d106.8520951!16s%2Fg%2F11b6sj7ctr?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDMwNS4wIKXMDSoASAFQAw%3D%3D",
    image: "/img-team/foto-angkatan.jpg",
    hours: [
      { day: "Senin", time: "08:00 - 17:00" },
      { day: "Selasa", time: "08:00 - 17:00" },
      { day: "Rabu", time: "08:00 - 17:00" },
      { day: "Kamis", time: "08:00 - 17:00" },
      { day: "Jumat", time: "08:00 - 17:00" },
      { day: "Sabtu", time: "08:00 - 12:00" },
      { day: "Minggu", time: "Tutup" }
    ],
    facilities: ["Layanan Lab Praktikum", "Ruang Belajar Bersama", "Ruang Ber-AC", "Koneksi Wi-Fi"]
  },
  {
    id: 5,
    title: "LAB AKUNTANSI - KAMPUS L",
    address: "Jl. Raya Cengkareng, Rawa Buaya, Cengkareng, Kota Jakarta Barat, DKI Jakarta 11740",
    status: "Buka",
    // Target: Universitas Gunadarma Kampus L
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.866030588267!2d106.74360337418131!3d-6.148671460269557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f62615456f5d%3A0xc15c92f986427847!2sUniversitas%20Gunadarma%20Kampus%20L!5e0!3m2!1sid!2sid!4v1710000000005",
    directionUrl: "https://www.google.com/maps/place/Universitas+Gunadarma/@-6.1371666,106.732861,17z/data=!3m1!4b1!4m6!3m5!1s0x2e6a1d5821b39347:0x8d2bbf732ee7597a!8m2!3d-6.1371719!4d106.7354359!16s%2Fg%2F1pxwc708k?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDMwNS4wIKXMDSoASAFQAw%3D%3D",
    image: "/img-team/foto-angkatan.jpg",
    hours: [
      { day: "Senin", time: "08:00 - 17:00" },
      { day: "Selasa", time: "08:00 - 17:00" },
      { day: "Rabu", time: "08:00 - 17:00" },
      { day: "Kamis", time: "08:00 - 17:00" },
      { day: "Jumat", time: "08:00 - 17:00" },
      { day: "Sabtu", time: "08:00 - 12:00" },
      { day: "Minggu", time: "Tutup" }
    ],
    facilities: ["Layanan Lab Praktikum", "PC Desktop", "Ruang Ber-AC", "Proyektor Utama"]
  }
];

export default function Lokasi() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLocation, setActiveLocation] = useState(locationsData[0]);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isModalOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isModalOpen]);

  const filteredLocations = locationsData.filter(loc => 
    loc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    loc.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOpenModal = (loc) => {
    setModalData(loc);
    setIsModalOpen(true);
  };

  return (
    <PageTransition>
    <>
      <div className="pt-32 pb-24 min-h-screen bg-[#fafafa] font-sans text-slate-800 flex flex-col relative z-0">
        
        {/* HEADER TEXT */}
        <div className="max-w-7xl mx-auto w-full px-6 mb-10 text-center lg:text-left">
          <h1 className="text-4xl md:text-[2.75rem] font-extrabold text-slate-900 tracking-tight mb-3">
            Lokasi
          </h1>
          <p className="text-slate-500 text-lg md:text-xl font-medium">
            Cari dan temukan letak laboratorium di berbagai region.
          </p>
        </div>

        {/* CONTAINER UTAMA */}
        <div className="max-w-7xl mx-auto w-full px-6 flex-grow flex flex-col">
          <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-200 overflow-hidden flex flex-col lg:flex-row h-auto lg:h-[75vh]">
            
            {/* KOLOM KIRI: SEARCH & LIST */}
            <div className="w-full lg:w-[35%] flex flex-col border-b lg:border-b-0 lg:border-r border-slate-200 bg-white z-10">
              
              <div className="p-6 border-b border-slate-100 bg-white">
                <div className="relative flex items-center bg-slate-50 rounded-xl border border-transparent focus-within:border-slate-200 focus-within:bg-white transition-all">
                  <input 
                    type="text" 
                    placeholder="Cari Lokasi Kampus..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent text-slate-800 px-5 py-3.5 focus:outline-none font-medium placeholder-slate-400"
                  />
                  <div className="absolute right-4">
                    <SearchIcon />
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto custom-scrollbar p-2">
                {filteredLocations.length > 0 ? (
                  filteredLocations.map((loc) => (
                    <div 
                      key={loc.id} 
                      onClick={() => setActiveLocation(loc)}
                      className={`p-6 cursor-pointer border-b border-slate-100 last:border-0 transition-all duration-300 relative group
                        ${activeLocation.id === loc.id ? 'bg-slate-50' : 'hover:bg-slate-50/50'}
                      `}
                    >
                      <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300
                        ${activeLocation.id === loc.id ? 'bg-orange-500' : 'bg-transparent group-hover:bg-slate-200'}
                      `}></div>

                      <div className="flex items-center justify-between gap-3 mb-3">
                        <h3 className={`font-black text-lg tracking-wide transition-colors
                          ${activeLocation.id === loc.id ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'}
                        `}>
                          {loc.title}
                        </h3>
                        <div className={`inline-flex shrink-0 items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider
                          ${loc.status === 'Buka' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-500'}
                        `}>
                          <div className={`w-1.5 h-1.5 rounded-full ${loc.status === 'Buka' ? 'bg-emerald-500' : 'bg-slate-400'}`}></div>
                          {loc.status}
                        </div>
                      </div>

                      <p className="text-slate-500 text-sm leading-relaxed mb-5 pr-2 line-clamp-2">
                        {loc.address}
                      </p>

                      <div className="flex flex-wrap gap-3">
                        <a href={loc.directionUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2.5 rounded-xl text-sm font-bold transition-colors w-full sm:w-auto shadow-sm">
                          <MapPinIcon /> Get Direction
                        </a>
                        
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOpenModal(loc);
                          }}
                          className="border-2 border-slate-200 hover:border-slate-800 text-slate-700 hover:text-slate-900 px-4 py-2.5 rounded-xl text-sm font-bold transition-colors w-full sm:w-auto"
                        >
                          More Info
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-8 text-center text-slate-400 font-medium">
                    Lokasi tidak ditemukan.
                  </div>
                )}
              </div>
            </div>

            {/* KOLOM KANAN: MAPS (LINK DIPERBAIKI) */}
            <div className="w-full lg:w-[65%] h-[50vh] lg:h-full bg-slate-100 relative overflow-hidden">
              {activeLocation ? (
                <iframe
                  key={activeLocation.id} // Re-render iframe saat lokasi ganti
                  title={`Map of ${activeLocation.title}`}
                  src={activeLocation.mapUrl}
                  className="w-full h-full border-0" 
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-400 font-medium">
                  Pilih lokasi untuk melihat peta
                </div>
              )}
              <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-slate-900/10 to-transparent pointer-events-none hidden lg:block"></div>
            </div>

          </div>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          .custom-scrollbar::-webkit-scrollbar { width: 5px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #cbd5e1; }
        `}} />
      </div>

      {/* =========================================
          MODAL "MORE INFO"
      ========================================= */}
      {isModalOpen && modalData && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm cursor-pointer transition-opacity" onClick={() => setIsModalOpen(false)}></div>
          <div className="bg-white w-full max-w-4xl rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] relative z-10 flex flex-col md:flex-row overflow-hidden animate-in zoom-in-95 duration-300 max-h-[90vh] lg:max-h-[80vh]">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 z-20 w-10 h-10 bg-white hover:bg-slate-100 text-slate-600 rounded-full flex items-center justify-center shadow-sm transition-colors border border-slate-200">
               <CloseIcon />
            </button>
            <div className="w-full md:w-5/12 h-64 md:h-auto relative bg-slate-100 shrink-0">
               <img src={modalData.image} className="w-full h-full object-cover" alt={modalData.title} onError={(e) => { e.target.src = "https://placehold.co/600x800/1e293b/ffffff?text=FOTO+GEDUNG" }} />
            </div>
            <div className="w-full md:w-7/12 p-8 lg:p-10 overflow-y-auto custom-scrollbar flex flex-col">
               <h2 className="text-[1.35rem] font-black text-slate-900 mb-1">Detail Lokasi</h2>
               <div className="flex flex-wrap items-center gap-3 mb-2 mt-3">
                  <h3 className="font-black text-lg text-slate-800 uppercase tracking-tight">{modalData.title}</h3>
                  <div className={`inline-flex shrink-0 items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider ${modalData.status === 'Buka' ? 'bg-orange-100 text-orange-700' : 'bg-slate-200 text-slate-600'}`}>
                        <div className={`w-2 h-2 rounded-full ${modalData.status === 'Buka' ? 'bg-orange-500 animate-pulse' : 'bg-slate-500'}`}></div>
                        {modalData.status}
                  </div>
               </div>
               <p className="text-slate-600 text-[15px] leading-relaxed mb-8 border-b border-slate-100 pb-6">{modalData.address}</p>
               <h4 className="font-extrabold text-slate-900 mb-4 text-base">Jam Operasional</h4>
               <div className="grid grid-cols-1 gap-2 mb-8 text-[14px] text-slate-600 font-medium">
                  {modalData.hours.map((h, i) => (
                     <div key={i} className="flex">
                        <span className="w-24 text-slate-500">{h.day}</span>
                        <span className={h.time === "Tutup" ? "text-rose-500 font-bold" : "text-slate-800"}>{h.time}</span>
                     </div>
                  ))}
               </div>
               <h4 className="font-extrabold text-slate-900 mb-3 text-base">Fasilitas tersedia:</h4>
               <ul className="list-disc pl-5 space-y-1.5 mb-10 text-[14px] font-bold text-slate-700">
                  {modalData.facilities.map((f, i) => (<li key={i}>{f}</li>))}
               </ul>
               <div className="mt-auto pt-2">
                  <a href={modalData.directionUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-orange-500 text-slate-50 font-black px-8 py-3.5 rounded-xl hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg w-fit">
                     <MapPinIcon /> Get Direction
                  </a>
               </div>
            </div>
          </div>
        </div>
      )}
    </>
    </PageTransition>
  );
}