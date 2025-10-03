import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Github, Linkedin, Mail, Phone, FileText } from 'lucide-react';

export default function HomePage() {
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
              {portfolioData.name}
            </h1>
            <p className="font-mono text-lg md:text-xl text-gray-600 italic">
              {portfolioData.tagline}
            </p>
          </div>

          <div className="my-8 border-t-2 border-dashed border-gray-400" />

          <div className="text-center mb-8">
            <p className="font-handwriting text-xl md:text-2xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Welcome to my little corner of the internet! I'm a CS & AI student who loves building things that blend creativity with code.
              Grab a virtual chai and explore my work!
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href={`mailto:${portfolioData.email}`}
              className="flex items-center gap-2 px-4 py-2 bg-yellow-200 hover:bg-yellow-300 rounded-lg border-2 border-gray-800 font-handwriting transition-all hover:scale-105 active:scale-95 shadow-md"
            >
              <Mail size={18} />
              Email
            </a>
            <a
              href={`https://${portfolioData.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-200 hover:bg-blue-300 rounded-lg border-2 border-gray-800 font-handwriting transition-all hover:scale-105 active:scale-95 shadow-md"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href={`https://${portfolioData.github}`}
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
              <h3 className="font-handwriting font-bold text-lg mb-2 text-gray-800">Research</h3>
              <p className="font-handwriting text-sm text-gray-700">
                Working on XAI for melanoma detection at DTU
              </p>
            </div>

            <div className="p-4 bg-green-100 rounded-xl border-2 border-gray-800 transform rotate-1 hover:rotate-0 transition-transform">
              <h3 className="font-handwriting font-bold text-lg mb-2 text-gray-800">Development</h3>
              <p className="font-handwriting text-sm text-gray-700">
                Building AI-powered web apps & creative interfaces
              </p>
            </div>

            <div className="p-4 bg-yellow-100 rounded-xl border-2 border-gray-800 transform -rotate-1 hover:rotate-0 transition-transform">
              <h3 className="font-handwriting font-bold text-lg mb-2 text-gray-800">Design</h3>
              <p className="font-handwriting text-sm text-gray-700">
                UI/UX projects with a quirky, human touch
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
