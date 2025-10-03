import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar } from 'lucide-react';

export default function ExperiencePage() {
  return (
    <div className="min-h-screen p-4 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="diary-page p-8 md:p-12 relative">
          <div className="absolute top-4 right-4">
            <Briefcase className="text-blue-300" size={40} opacity={0.3} />
          </div>

          <h2 className="font-handwriting text-4xl md:text-5xl font-bold text-gray-800 mb-8 border-b-4 border-gray-800 pb-2 inline-block">
            Experience
          </h2>

          <div className="space-y-6">
            {portfolioData.experience.map((exp, index) => (
              <div
                key={index}
                className="relative p-6 bg-white rounded-2xl border-2 border-gray-800 shadow-lg hover:shadow-2xl transition-all"
                style={{
                  transform: index % 2 === 0 ? 'rotate(-0.5deg)' : 'rotate(0.5deg)',
                  marginLeft: index % 2 === 0 ? '0' : 'auto',
                  marginRight: index % 2 === 0 ? 'auto' : '0'
                }}
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-yellow-300 rounded-full border-2 border-gray-800 flex items-center justify-center font-handwriting font-bold">
                  {index + 1}
                </div>

                <div className="mb-4">
                  <h3 className="font-handwriting text-2xl font-bold text-gray-800 mb-2">
                    {exp.role}
                  </h3>
                  <p className="font-handwriting text-lg text-gray-700 mb-2">
                    {exp.organization}
                  </p>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={16} />
                    <p className="font-handwriting text-sm">
                      {exp.period}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl border-2 border-dashed border-gray-300">
                  <p className="font-handwriting text-gray-800 leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                <div className="absolute -bottom-2 -right-2 opacity-20">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="15" fill="#ffd97d"/>
                    <path d="M10 20 L15 15 L20 25 L25 10 L30 20" stroke="#ff9b9b" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl border-2 border-gray-800 text-center">
            <p className="font-handwriting text-lg text-gray-800">
              Always learning, always growing, always curious!
            </p>
          </div>

          <div className="absolute bottom-4 left-4 opacity-20">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <path d="M10 30 Q20 20, 30 30 T50 30" stroke="#a8e6cf" strokeWidth="3" fill="none"/>
              <circle cx="30" cy="15" r="6" fill="#ffc3a0"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
