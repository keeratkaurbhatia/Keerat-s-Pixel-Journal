import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Sparkles } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen p-4 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="diary-page p-8 md:p-12 relative">
          <div className="absolute top-4 right-4">
            <Sparkles className="text-yellow-400" size={40} fill="currentColor" opacity={0.3} />
          </div>

          <h2 className="font-handwriting text-4xl md:text-5xl font-bold text-gray-800 mb-8 border-b-4 border-gray-800 pb-2 inline-block">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {portfolioData.projects.map((project, index) => (
              <div
                key={index}
                className="group relative p-6 bg-white rounded-2xl border-2 border-gray-800 shadow-lg hover:shadow-2xl transition-all"
                style={{
                  transform: index % 2 === 0 ? 'rotate(-0.5deg)' : 'rotate(0.5deg)',
                  background: index % 4 === 0 ? '#fff9e6' :
                             index % 4 === 1 ? '#e6f9ff' :
                             index % 4 === 2 ? '#ffe6f0' : '#f0ffe6'
                }}
              >
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full border-2 border-gray-800 flex items-center justify-center">
                  <Sparkles size={18} className="text-gray-800" />
                </div>

                <h3 className="font-handwriting text-2xl font-bold text-gray-800 mb-3 pr-8">
                  {project.title}
                </h3>

                <p className="font-handwriting text-gray-700 leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800 text-white rounded-full font-handwriting text-xs border-2 border-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-200 to-blue-300 hover:from-blue-300 hover:to-blue-400 rounded-lg border-2 border-gray-800 font-handwriting font-bold transition-all hover:scale-105 active:scale-95 shadow-md"
                  >
                    View Project
                    <ExternalLink size={16} />
                  </a>
                )}

                <div className="absolute -bottom-2 -left-2 opacity-10 pointer-events-none">
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                    <circle cx="25" cy="25" r="20" stroke="#333" strokeWidth="2" strokeDasharray="3 3"/>
                    <path d="M15 25 L20 20 L25 30 L30 15 L35 25" stroke="#333" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl border-2 border-gray-800 text-center">
            <p className="font-handwriting text-lg text-gray-800">
              Each project tells a story and solves a real problem!
            </p>
          </div>

          <div className="absolute bottom-4 right-4 opacity-20">
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
              <path d="M10 35 Q35 10, 60 35" stroke="#ffd97d" strokeWidth="3" fill="none"/>
              <circle cx="20" cy="30" r="5" fill="#ff9b9b"/>
              <circle cx="50" cy="30" r="5" fill="#a8e6cf"/>
              <path d="M25 50 L30 45 L35 55 L40 40 L45 50" stroke="#ffc3a0" strokeWidth="2" fill="none"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
