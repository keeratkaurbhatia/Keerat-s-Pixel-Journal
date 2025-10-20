import React from 'react';
import { GraduationCap, Heart } from 'lucide-react';

export default function AboutPage() {
  const education = [
    {
      institution: "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
      degree: "Bachelor of Technology in Computer Science and Artificial Intelligence",
      period: "2024-28",
      cgpa: "9.93",
      location: "Kashmere Gate, New Delhi"
    },
    {
      institution: "IIT Ropar",
      degree: "Minor in AI",
      period: "2024-25",
      cgpa: "9.5",
      location: "Ropar, Punjab"
    }
  ];

  return (
    <div className="min-h-screen p-4 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="diary-page p-8 md:p-12 relative">
          <div className="absolute top-4 right-4">
            <Heart className="text-red-300" size={40} fill="currentColor" opacity={0.3} />
          </div>

          <h2 className="font-handwriting text-4xl md:text-5xl font-bold text-gray-800 mb-8 border-b-4 border-gray-800 pb-2 inline-block">
            About Me
          </h2>

          <div className="space-y-6">
            <div className="p-6 bg-yellow-50 rounded-2xl border-2 border-dashed border-gray-400">
              <p className="font-handwriting text-lg text-gray-800 leading-relaxed">
                Hey there! I'm Keerat, a first-year Computer Science and AI student at IGDTUW with a minor in AI from IIT Ropar. I'm passionate about building things that matter—whether it's exploring Explainable AI in melanoma detection research, developing full-stack web applications, or designing interfaces that feel like a warm hug.
              </p>
              <p className="font-handwriting text-lg text-gray-800 leading-relaxed mt-4">
                I love diving into creative projects that blend tech with storytelling. From translating Punjabi proverbs with NLP to designing quirky productivity apps with a desi twist, I'm all about making tech more human and accessible.
              </p>
              <p className="font-handwriting text-lg text-gray-800 leading-relaxed mt-4">
                When I'm not coding, you'll find me writing for my college's literary society, debating at MUN conferences, or doodling in my diary (which inspired this very website!). I believe in learning by doing, staying curious, and adding a sprinkle of whimsy to everything I create.
              </p>
            </div>

            <div className="my-8 flex items-center gap-4">
              <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
              <GraduationCap className="text-gray-600" size={32} />
              <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
            </div>

            <div>
              <h3 className="font-handwriting text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Education
              </h3>

              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="p-5 bg-white rounded-xl border-2 border-gray-800 shadow-md hover:shadow-xl transition-shadow"
                    style={{
                      transform: index % 2 === 0 ? 'rotate(-0.5deg)' : 'rotate(0.5deg)'
                    }}
                  >
                    <h4 className="font-handwriting font-bold text-xl text-gray-800 mb-2">
                      {edu.institution}
                    </h4>
                    <p className="font-handwriting text-gray-700 mb-1">
                      {edu.degree}
                    </p>
                    <p className="font-handwriting text-sm text-gray-500 mb-2">
                      {edu.location}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <p className="font-handwriting text-sm text-gray-600">
                        {edu.period}
                      </p>
                      <span className="px-3 py-1 bg-green-200 rounded-full font-handwriting text-sm font-bold border-2 border-gray-800">
                        CGPA: {edu.cgpa}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl border-2 border-gray-800">
              <p className="font-handwriting text-lg text-gray-800 text-center italic">
                "I believe in learning by doing, staying curious, and adding a sprinkle of whimsy to everything I create."
              </p>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 opacity-20">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <path d="M10 40 Q40 10, 70 40" stroke="#ffd97d" strokeWidth="3" fill="none"/>
              <circle cx="40" cy="20" r="8" fill="#ff9b9b"/>
              <path d="M20 60 L30 70 L40 55 L50 70 L60 60" stroke="#a8e6cf" strokeWidth="2" fill="none"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
