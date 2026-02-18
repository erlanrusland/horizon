import ReactMarkdown from 'react-markdown';
import { Notebook } from 'lucide-react';
import { type Note } from '../../utils/loader';

interface NoteReaderProps {
  note: Note;
}

export const NoteReader = ({ note }: NoteReaderProps) => {
  return (
    <article className="max-w-4xl mx-auto animate-in fade-in zoom-in-95 duration-700">
      <header className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
            note.extension === 'md' ? 'bg-blue-100 text-blue-600' : 
            note.extension === 'html' ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-600'
          }`}>
            {note.extension}
          </div>
          <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-[-0.04em] leading-[0.95] dark:text-white">
          {note.fileName.replace(/\.[^/.]+$/, "")}
        </h1>
        
        <div className="flex items-center gap-4 text-slate-400">
          <Notebook size={16} />
          <span className="text-sm font-medium italic">
            Dokumentasi Erlan — Terakhir disinkronkan hari ini
          </span>
        </div>
      </header>

      {/* Konten Utama */}
      <div className="prose prose-slate dark:prose-invert max-w-none 
        prose-h2:text-3xl prose-h2:font-black prose-h2:tracking-tight 
        prose-p:text-lg prose-p:leading-relaxed prose-p:text-slate-600 dark:prose-p:text-slate-400
        prose-pre:bg-slate-900 prose-pre:rounded-3xl prose-pre:p-8 prose-pre:shadow-2xl">
        
        {note.extension === 'html' ? (
          <div className="revert-tailwind" dangerouslySetInnerHTML={{ __html: note.content }} />
        ) : note.extension === 'txt' ? (
          <pre className="font-mono text-sm leading-relaxed whitespace-pre-wrap">
            {note.content}
          </pre>
        ) : (
          <ReactMarkdown>{note.content}</ReactMarkdown>
        )}
      </div>
    </article>
  );
};