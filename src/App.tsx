import { useState, useMemo, } from 'react';
import { Navbar } from "./components/Landing/Navbar";
import { Hero } from "./components/Landing/Hero";
import { Sidebar } from "./components/Sidebar";
import { ReaderHeader } from "./components/Reader/ReaderHeader";
import { NoteReader } from "./components/Reader/NoteReader";
import { EmptyState } from "./components/Reader/EmptyState";
import { getCatatanTree, type Note } from './utils/loader';

function App() {
  const [view, setView] = useState<'landing' | 'reader'>('landing');
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  // --- STATE LOGIN ---
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const MY_SECRET_PASSWORD = "horizonu"; 

  const noteTree = useMemo(() => getCatatanTree(), []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === MY_SECRET_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Password salah, Erlan!');
    }
  };

  // --- RENDER LOGIC ---

  // 1. Tampilan Landing Page
  if (view === 'landing') {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">
        <Navbar onOpenReader={() => setView('reader')} />
        <Hero onStart={() => setView('reader')} />
      </div>
    );
  }

  // 2. Tampilan Form Login (Jika sudah di Reader tapi belum Login)
  if (view === 'reader' && !isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-6">
        <div className="w-full max-w-md bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 animate-in fade-in zoom-in-95 duration-500">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black mb-2 dark:text-white">Restricted Access</h2>
            <p className="text-slate-500 text-sm">Masukkan password untuk membuka Archive.</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password..."
              className="w-full px-6 py-4 bg-slate-100 dark:bg-slate-800 rounded-2xl border-none focus:ring-2 focus:ring-blue-500 dark:text-white outline-none transition-all"
              autoFocus
            />
            {error && <p className="text-red-500 text-xs font-bold ml-2 italic">{error}</p>}
            <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl transition-all active:scale-95 shadow-lg shadow-blue-500/30">
              UNLOCK ARCHIVE
            </button>
            <button 
              type="button"
              onClick={() => setView('landing')}
              className="w-full text-slate-400 text-xs font-bold hover:text-slate-600 transition-colors mt-2"
            >
              KEMBALI KE BERANDA
            </button>
          </form>
        </div>
      </div>
    );
  }

  // 3. Tampilan Reader Utama (Hanya muncul jika isAuthenticated === true)
  return (
    <div className="flex h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-hidden">
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        noteTree={noteTree}
        selectedNote={selectedNote}
        onSelectNote={(note) => {
          setSelectedNote(note);
          if (window.innerWidth < 768) setIsSidebarOpen(false);
        }}
      />

      <main className="flex-1 flex flex-col min-w-0 bg-white dark:bg-slate-950">
        <ReaderHeader 
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={() => setIsSidebarOpen(!isSidebarOpen)}
          selectedNote={selectedNote}
          onBackToLanding={() => setView('landing')}
        />
        
        <div className="flex-1 overflow-y-auto p-8 md:p-20 scroll-smooth custom-scrollbar">
          {selectedNote ? <NoteReader note={selectedNote} /> : <EmptyState />}
        </div>
      </main>
    </div>
  );
}

export default App;