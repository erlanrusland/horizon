import { Book } from 'lucide-react';

// Pastikan ada kata 'export' sebelum 'const'
export const EmptyState = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-blue-500 blur-[100px] opacity-20" />
        <Book size={120} strokeWidth={0.5} className="text-slate-200 dark:text-slate-800 relative z-10" />
      </div>
      <h2 className="text-3xl font-black tracking-tight mb-2">Pilih Materi Kuliah</h2>
      <p className="text-slate-400 font-medium max-w-xs">
        Buka sidebar untuk menelusuri folder dan mulai membaca catatanmu, Erlan.
      </p>
    </div>
  );
};