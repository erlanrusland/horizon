import { ArrowRight, Sparkles, LayoutDashboard, Search, FileText } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

export const Hero = ({ onStart }: HeroProps) => {
  return (
    <>
      {/* --- HERO SECTION UTAMA --- */}
      <header className="pt-40 pb-24 md:pt-52 md:pb-32 px-6 text-center animate-in fade-in zoom-in-95 duration-700">
        <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-black uppercase tracking-[0.2em] animate-bounce-subtle">
          V.1 2026
        </div>
        
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-10 tracking-[-0.05em] leading-[0.85] uppercase dark:text-white">
          Keep Your <br />
          <span className="text-blue-600 dark:text-blue-500 leading-none">Knowledge.</span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-slate-500 dark:text-slate-400 mb-14 max-w-3xl mx-auto font-medium leading-relaxed">
          Mendokumentasikan catatan dengan ErlandNotes di Horizon dengan cerdas untuk merangkum seluruh materi kuliah secara otomatis dan terstruktur.
        </p>
        
        <button 
          onClick={onStart}
          className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-black text-xl rounded-3xl hover:scale-105 transition-all shadow-[0_20px_50px_rgba(37,99,235,0.3)] hover:shadow-[0_25px_60px_rgba(37,99,235,0.4)] overflow-hidden active:scale-95"
        >
          <span className="relative z-10 flex items-center gap-4">
            MULAI EKSPLORASI 
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </span>
          {/* Efek Hover Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </header>

      {/* --- FEATURE SECTION --- */}
      <section className="bg-slate-50 dark:bg-slate-900 py-24 px-6 md:px-8 lg:px-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-12 dark:text-white">
            Tentang Erland<span className="text-blue-600">Notes</span>..!
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {/* Feature Card 1 */}
            <div className="bg-white dark:bg-slate-950 p-8 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800 transform hover:scale-105 transition-transform duration-300 ease-out group">
              <Sparkles size={48} className="text-blue-600 mb-6 mx-auto group-hover:rotate-12 transition-transform" />
              <h3 className="text-2xl font-black mb-3 dark:text-white">Catatan Cerdas</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                Catatanmu terorganisir otomatis dalam folder, memudahkan navigasi ke materi spesifik.
              </p>
            </div>
            {/* Feature Card 2 */}
            <div className="bg-white dark:bg-slate-950 p-8 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800 transform hover:scale-105 transition-transform duration-300 ease-out group">
              <LayoutDashboard size={48} className="text-emerald-600 mb-6 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black mb-3 dark:text-white">Tampilan Intuitif</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                Antarmuka bersih dan modern fokus pada kontenmu tanpa gangguan.
              </p>
            </div>
            {/* Feature Card 3 */}
            <div className="bg-white dark:bg-slate-950 p-8 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800 transform hover:scale-105 transition-transform duration-300 ease-out group">
              <FileText size={48} className="text-purple-600 mb-6 mx-auto group-hover:-translate-y-1 transition-transform" />
              <h3 className="text-2xl font-black mb-3 dark:text-white">Dukungan Multi-Format</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                Mendukung Markdown, HTML, dan Plain Text untuk fleksibilitas dokumentasi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER (Opsional) --- */}
      <footer className="py-12 text-center text-slate-400 text-sm bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 animate-in fade-in duration-1000 delay-300">
        <p>&copy; 2026 HorizonNotes by Erlan. All rights reserved.</p>
      </footer>
    </>
  );
};