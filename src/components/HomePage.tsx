import React, { useState } from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export default function HomePage() {
  const [chaiLevel, setChaiLevel] = useState(3);

  const handleChaiClick = () => {
    if (chaiLevel > 0) {
      setChaiLevel(chaiLevel - 1);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="diary-page p-8 md:p-12 relative">
          <div className="absolute top-4 right-4 opacity-20">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <path d="M20 30 Q30 20, 40 30 T60 30" stroke="#333" strokeWidth="2" strokeLinecap="round" fill="none"/>
              <circle cx="25" cy="50" r="12" fill="#ffd97d" opacity="0.5"/>
              <path d="M55 55 L65 45 M55 45 L65 55" stroke="#ff9b9b" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>

          <div className="text-center mb-8">
            <h1 className="font-handwriting text-5xl md:text-7xl font-bold text-gray-800 mb-2">
              Keerat Kaur
            </h1>
            <p className="font-mono text-lg md:text-xl text-gray-600 italic">
              print("Hello, world!")
            </p>
          </div>

          <div className="my-8 border-t-2 border-dashed border-gray-400" />

          <div className="text-center mb-8 flex items-center justify-center gap-4 flex-wrap">
            <p className="font-handwriting text-xl md:text-2xl text-gray-700 leading-relaxed max-w-2xl">
              Welcome to my little corner of the internet! I'm a CS & AI student who loves building things that blend creativity with code.
              Grab a virtual chai and explore my work!
            </p>

            <button
              onClick={handleChaiClick}
              className="relative cursor-pointer hover:scale-110 transition-transform active:scale-95"
              disabled={chaiLevel === 0}
            >
              <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
                <rect x="10" y="20" width="35" height="45" rx="5" fill="#f5deb3" stroke="#8B4513" strokeWidth="2"/>
                <path d="M45 30 Q55 30, 55 40 Q55 50, 45 50" stroke="#8B4513" strokeWidth="2" fill="none"/>

                {chaiLevel >= 1 && (
                  <rect x="12" y="50" width="31" height="13" fill="#D2691E" opacity="0.8"/>
                )}
                {chaiLevel >= 2 && (
                  <rect x="12" y="37" width="31" height="13" fill="#D2691E" opacity="0.8"/>
                )}
                {chaiLevel >= 3 && (
                  <rect x="12" y="24" width="31" height="13" fill="#D2691E" opacity="0.8"/>
                )}

                {chaiLevel > 0 && (
                  <>
                    <path d="M15 15 Q17 10, 19 15" stroke="#A0A0A0" strokeWidth="1.5" fill="none" opacity="0.6"/>
                    <path d="M25 12 Q27 7, 29 12" stroke="#A0A0A0" strokeWidth="1.5" fill="none" opacity="0.6"/>
                    <path d="M35 15 Q37 10, 39 15" stroke="#A0A0A0" strokeWidth="1.5" fill="none" opacity="0.6"/>
                  </>
                )}
              </svg>

              {chaiLevel === 0 && (
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <span className="bg-green-200 px-3 py-1 rounded-full text-sm font-handwriting font-bold border-2 border-gray-800">
                    Yum! 😋
                  </span>
                </div>
              )}
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="mailto:itskeeratkaur@gmail.com"
              className="flex items-center gap-2 px-4 py-2 bg-yellow-200 hover:bg-yellow-300 rounded-lg border-2 border-gray-800 font-handwriting transition-all hover:scale-105 active:scale-95 shadow-md"
            >
              <Mail size={18} />
              Email
            </a>
            <a
              href="https://linkedin.com/in/keeratkaurbhatia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-200 hover:bg-blue-300 rounded-lg border-2 border-gray-800 font-handwriting transition-all hover:scale-105 active:scale-95 shadow-md"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href="https://github.com/keeratkaurbhatia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg border-2 border-gray-800 font-handwriting transition-all hover:scale-105 active:scale-95 shadow-md"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href="/Keerat's Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-green-200 hover:bg-green-300 rounded-lg border-2 border-gray-800 font-handwriting transition-all hover:scale-105 active:scale-95 shadow-md"
            >
              <FileText size={18} />
              Resume
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="p-4 bg-red-100 rounded-xl border-2 border-gray-800 transform -rotate-1 hover:rotate-0 transition-transform">
              <h3 className="font-handwriting font-bold text-lg mb-2 text-gray-800">AI & Research</h3>
              <p className="font-handwriting text-sm text-gray-700">
                Exploring XAI techniques in healthcare & NLP projects
              </p>
            </div>

            <div className="p-4 bg-green-100 rounded-xl border-2 border-gray-800 transform rotate-1 hover:rotate-0 transition-transform">
              <h3 className="font-handwriting font-bold text-lg mb-2 text-gray-800">Full-Stack Dev</h3>
              <p className="font-handwriting text-sm text-gray-700">
                Building web apps with React, Flask & beyond
              </p>
            </div>

            <div className="p-4 bg-yellow-100 rounded-xl border-2 border-gray-800 transform -rotate-1 hover:rotate-0 transition-transform">
              <h3 className="font-handwriting font-bold text-lg mb-2 text-gray-800">UI/UX Design</h3>
              <p className="font-handwriting text-sm text-gray-700">
                Crafting delightful user experiences in Figma
              </p>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 opacity-30">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="30" r="25" stroke="#ff9b9b" strokeWidth="2" fill="none" strokeDasharray="4 4"/>
              <path d="M20 30 L25 25 L30 35 L35 20 L40 30" stroke="#ffd97d" strokeWidth="2" fill="none"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
