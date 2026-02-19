// src/components/Reader/EmptyState.tsx

// 1. Definisikan interface untuk props
interface EmptyStateProps {
  onOpenSidebar: () => void;
}

// 2. Gunakan interface tersebut pada komponen
export const EmptyState = ({ onOpenSidebar }: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-8">
      <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-full mb-6">
        {/* Icon folder/file */}
        <svg width={48} height={48} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-slate-400">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>
      
      <h3 className="text-xl font-bold dark:text-white mb-2">Pilih Catatan</h3>
      <p className="text-slate-500 max-w-xs mb-8">
        Silakan pilih salah satu file di sidebar untuk mulai membaca dokumentasi.
      </p>

      {/* 3. Gunakan function onOpenSidebar di sini (biasanya untuk tampilan mobile) */}
      <button 
        onClick={onOpenSidebar}
        className="md:hidden px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all"
      >
        Buka Sidebar
      </button>
    </div>
  );
};