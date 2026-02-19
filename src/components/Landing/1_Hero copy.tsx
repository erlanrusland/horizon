import { ArrowRight, Sparkles, LayoutDashboard, FileText } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

export const Hero = ({ onStart }: HeroProps) => {
  return (
    <div className="overflow-x-hidden">
      {/* --- HERO SECTION UTAMA --- */}
      {/* Padding disesuaikan: pt-32 untuk mobile agar tidak terlalu jauh ke bawah */}
      <header className="pt-32 pb-20 md:pt-52 md:pb-32 px-6 text-center animate-in fade-in zoom-in-95 duration-700">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] animate-bounce-subtle">
          V.1 2026
        </div>
        
        {/* Ukuran teks disesuaikan: text-5xl di mobile (sm), text-7xl+ di layar besar */}
        <h1 className="text-[12vw] sm:text-7xl md:text-8xl lg:text-9xl font-black mb-6 md:mb-10 tracking-tighter leading-[0.85] uppercase dark:text-white break-words">
        Keep Your <br />
        <span className="text-blue-600 dark:text-blue-500 block sm:text-5xl">
          Knowledge.
        </span>
        </h1>
        
        {/* Deskripsi lebih ramping di mobile */}
        <p className="text-base md:text-xl lg:text-2xl text-slate-500 dark:text-slate-400 mb-10 md:mb-14 max-w-2xl mx-auto font-medium leading-relaxed px-4 md:px-0">
          Mendokumentasikan catatan dengan <span className="text-slate-800 dark:text-slate-200 font-bold">ErlandNotes</span> secara cerdas, otomatis, dan terstruktur.
        </p>
        
        <button 
          onClick={onStart}
          className="group relative w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-black text-lg md:text-xl rounded-2xl md:rounded-3xl hover:scale-105 transition-all shadow-[0_20px_50px_rgba(37,99,235,0.3)] active:scale-95 overflow-hidden"
        >
          <span className="relative z-10 flex items-center justify-center gap-3">
            MULAI EKSPLORASI 
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </header>

      {/* --- FEATURE SECTION --- */}
      <section className="bg-slate-50/50 dark:bg-slate-900/50 py-20 px-6 md:px-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-12 text-center dark:text-white">
            Tentang Erland<span className="text-blue-600">Notes</span>
          </h2>
          
          {/* Grid: 1 kolom di mobile, 3 di desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {/* Feature Card 1 */}
            <div className="bg-white dark:bg-slate-950 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <Sparkles size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-3 dark:text-white">Catatan Cerdas</h3>
              <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                Terorganisir otomatis dalam folder, memudahkan navigasi ke materi spesifik.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white dark:bg-slate-950 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <LayoutDashboard size={28} className="text-emerald-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-3 dark:text-white">Tampilan Intuitif</h3>
              <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                Antarmuka bersih dan modern fokus pada kontenmu tanpa gangguan.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white dark:bg-slate-950 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-purple-50 dark:bg-purple-900/20 rounded-2xl flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform">
                <FileText size={28} className="text-purple-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-3 dark:text-white">Multi-Format</h3>
              <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                Mendukung Markdown, HTML, dan Plain Text untuk fleksibilitas dokumentasi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-10 text-center text-slate-400 text-xs bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
        <p className="tracking-widest uppercase">© 2026 Erland-Horizon Notes • Erlan</p>
      </footer>
    </div>
  );
};