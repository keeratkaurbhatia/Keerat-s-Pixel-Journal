import React from 'react';

interface StickyNote {
  id: string;
  label: string;
  color: string;
  rotation: string;
}

interface StickyNoteNavProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const stickyNotes: StickyNote[] = [
  { id: 'home', label: 'Home', color: '#ffd97d', rotation: '-rotate-2' },
  { id: 'about', label: 'About Me', color: '#ff9b9b', rotation: 'rotate-1' },
  { id: 'experience', label: 'Experience', color: '#a8e6cf', rotation: '-rotate-1' },
  { id: 'projects', label: 'Projects', color: '#ffc3a0', rotation: 'rotate-2' },
  { id: 'extracurriculars', label: 'Beyond Code', color: '#f9d5e5', rotation: '-rotate-2' },
  { id: 'skills', label: 'Skills', color: '#b4a7d6', rotation: '-rotate-3' },
  { id: 'contact', label: 'Contact', color: '#ffabab', rotation: 'rotate-1' }
];

export default function StickyNoteNav({ currentPage, onNavigate }: StickyNoteNavProps) {
  return (
    <div className="fixed top-4 left-4 right-4 z-50 flex flex-wrap gap-3 justify-center md:justify-start">
      {stickyNotes.map((note) => (
        <button
          key={note.id}
          onClick={() => onNavigate(note.id)}
          className={`${note.rotation} transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95`}
          style={{
            backgroundColor: note.color,
            boxShadow: currentPage === note.id
              ? '0 8px 16px rgba(0,0,0,0.3)'
              : '0 4px 8px rgba(0,0,0,0.15)'
          }}
        >
          <div className="relative px-4 py-3 min-w-[80px]">
            <div
              className="absolute top-1 left-1/2 transform -translate-x-1/2 w-8 h-3 bg-white/30 rounded-sm"
              style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}
            />

            <div className={`font-handwriting text-sm md:text-base ${
              currentPage === note.id ? 'font-bold scale-105' : ''
            }`}>
              {note.label}
            </div>

            {currentPage === note.id && (
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gray-800/40 rounded-full" />
            )}
          </div>
        </button>
      ))}
    </div>
  );
}
