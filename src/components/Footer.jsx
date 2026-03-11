export default function Footer() {
  return (
    <footer className="bg-indigo-950 pt-16 pb-8 border-t-4 border-orange-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-extrabold text-white mb-4 tracking-tight">
              Tax<span className="text-orange-500">Lab</span>
            </h3>
            <p className="text-indigo-200/80 leading-relaxed max-w-md font-medium">
              Laboratorium Akuntansi Lanjut B.<br/>
              Platform terpadu untuk kebutuhan modul, panduan, dan informasi praktikum perpajakan mahasiswa.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Akses Cepat</h4>
            <ul className="space-y-4 font-medium">
              <li>
                <a href="#tata-tertib" className="text-indigo-200/80 hover:text-orange-400 transition-colors">
                  Peraturan & Tata Tertib
                </a>
              </li>
              <li>
                <a href="#unduhan" className="text-indigo-200/80 hover:text-orange-400 transition-colors">
                  Unduhan Modul (PDF)
                </a>
              </li>
              <li>
                <a href="/oprec" className="text-orange-400 hover:text-orange-300 transition-colors">
                  🔥 Info Recruitment
                </a>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-indigo-900/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-indigo-300/50 text-sm font-medium">
            &copy; 2026 Tax Laboratory Gunadarma. All rights reserved.
          </p>
          <div className="flex gap-4">
             {/* Socmed Icons (Dummy) */}
            <div className="w-8 h-8 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-300/50 cursor-pointer hover:bg-orange-500 hover:text-white transition-colors">IG</div>
            <div className="w-8 h-8 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-300/50 cursor-pointer hover:bg-orange-500 hover:text-white transition-colors">WA</div>
          </div>
        </div>
      </div>
    </footer>
  );
}