import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Code, Wrench, Library, Layers } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  items: string[];
  color: string;
}

export default function SkillsPage() {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Languages',
      icon: <Code size={24} />,
      items: portfolioData.skills.languages,
      color: 'from-red-100 to-red-200'
    },
    {
      title: 'Frameworks',
      icon: <Layers size={24} />,
      items: portfolioData.skills.frameworks,
      color: 'from-blue-100 to-blue-200'
    },
    {
      title: 'Tools',
      icon: <Wrench size={24} />,
      items: portfolioData.skills.tools,
      color: 'from-green-100 to-green-200'
    },
    {
      title: 'Libraries',
      icon: <Library size={24} />,
      items: portfolioData.skills.libraries,
      color: 'from-yellow-100 to-yellow-200'
    }
  ];

  return (
    <div className="min-h-screen p-4 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="diary-page p-8 md:p-12 relative">
          <div className="absolute top-4 right-4">
            <Code className="text-green-300" size={40} opacity={0.3} />
          </div>

          <h2 className="font-handwriting text-4xl md:text-5xl font-bold text-gray-800 mb-8 border-b-4 border-gray-800 pb-2 inline-block">
            Skills & Tools
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`p-6 bg-gradient-to-br ${category.color} rounded-2xl border-2 border-gray-800 shadow-lg hover:shadow-2xl transition-all`}
                style={{
                  transform: index % 2 === 0 ? 'rotate(-0.5deg)' : 'rotate(0.5deg)'
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white rounded-lg border-2 border-gray-800">
                    {category.icon}
                  </div>
                  <h3 className="font-handwriting text-2xl font-bold text-gray-800">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="px-3 py-2 bg-white rounded-lg border-2 border-gray-800 font-handwriting text-sm hover:scale-105 transition-transform cursor-default shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="absolute -bottom-1 -right-1 opacity-10 pointer-events-none">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="15" stroke="#333" strokeWidth="2" strokeDasharray="2 2"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>

          

          <div className="absolute bottom-4 left-4 opacity-20">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <path d="M10 40 L20 30 L30 45 L40 25 L50 40 L60 30 L70 45" stroke="#ffd97d" strokeWidth="3" fill="none"/>
              <circle cx="25" cy="35" r="8" fill="#ff9b9b" opacity="0.5"/>
              <circle cx="55" cy="35" r="8" fill="#a8e6cf" opacity="0.5"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
