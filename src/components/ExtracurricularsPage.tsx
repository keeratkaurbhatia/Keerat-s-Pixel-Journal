import React from 'react';
import { Award, PenTool, Users, ExternalLink } from 'lucide-react';

export default function ExtracurricularsPage() {
  const extracurriculars = [
    {
      icon: <Award size={32} className="text-yellow-600" />,
      title: "Best Journalist Award",
      organization: "Navyuga Youth Parliament - IGDTUW",
      period: "2025",
      description: "Won the Best Journalist award at the Navyuga Youth Parliament organized at IGDTUW, recognized for exceptional reporting and journalistic skills.",
      color: "from-yellow-100 to-orange-100"
    },
    {
      icon: <PenTool size={32} className="text-purple-600" />,
      title: "Personal Blog",
      organization: "Self-Published",
      period: "Ongoing",
      description: "Maintaining a personal blog where I share my thoughts on technology, creativity, and life as a CS student. Writing about projects, experiences, and everything in between.",
      link: "#",
      color: "from-purple-100 to-pink-100"
    },
    {
      icon: <Users size={32} className="text-blue-600" />,
      title: "B.H.A.V - The Literary Society",
      organization: "IGDTUW",
      period: "October 2024 – Present",
      description: "Active member in Writing Circle, contributing to creative content and literary initiatives. Previously part of Debate Circle (represented college in inter-collegiate debates) and MUN Circle (served as USG External Affairs for IGDTUW MUN 2025).",
      color: "from-blue-100 to-green-100"
    }
  ];

  return (
    <div className="min-h-screen p-4 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="diary-page p-8 md:p-12 relative">
          <div className="absolute top-4 right-4">
            <Award className="text-yellow-400" size={40} fill="currentColor" opacity={0.3} />
          </div>

          <h2 className="font-handwriting text-4xl md:text-5xl font-bold text-gray-800 mb-8 border-b-4 border-gray-800 pb-2 inline-block">
            Extracurriculars
          </h2>

          <div className="space-y-6">
            {extracurriculars.map((item, index) => (
              <div
                key={index}
                className={`relative p-6 bg-gradient-to-br ${item.color} rounded-2xl border-2 border-gray-800 shadow-lg hover:shadow-2xl transition-all`}
                style={{
                  transform: index % 2 === 0 ? 'rotate(-0.5deg)' : 'rotate(0.5deg)'
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-white rounded-lg border-2 border-gray-800 shadow-md">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-handwriting text-2xl font-bold text-gray-800 mb-1">
                      {item.title}
                    </h3>
                    <p className="font-handwriting text-lg text-gray-700 mb-1">
                      {item.organization}
                    </p>
                    <p className="font-handwriting text-sm text-gray-600">
                      {item.period}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white/60 rounded-xl border-2 border-dashed border-gray-300 mb-4">
                  <p className="font-handwriting text-gray-800 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-50 rounded-lg border-2 border-gray-800 font-handwriting font-bold transition-all hover:scale-105 active:scale-95 shadow-md"
                  >
                    Visit Blog
                    <ExternalLink size={16} />
                  </a>
                )}

                <div className="absolute -bottom-2 -right-2 opacity-10">
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                    <circle cx="25" cy="25" r="20" stroke="#333" strokeWidth="2" strokeDasharray="3 3"/>
                    <path d="M15 25 L20 20 L25 30 L30 15 L35 25" stroke="#333" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl border-2 border-gray-800 text-center">
            <p className="font-handwriting text-lg text-gray-800">
              Beyond code: Writing, debating, and telling stories!
            </p>
          </div>

          <div className="absolute bottom-4 left-4 opacity-20">
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
              <path d="M10 35 Q35 10, 60 35" stroke="#ffd97d" strokeWidth="3" fill="none"/>
              <circle cx="25" cy="25" r="7" fill="#ff9b9b"/>
              <circle cx="45" cy="25" r="7" fill="#a8e6cf"/>
              <path d="M20 50 L30 45 L40 55 L50 45 L60 50" stroke="#ffc3a0" strokeWidth="2" fill="none"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
