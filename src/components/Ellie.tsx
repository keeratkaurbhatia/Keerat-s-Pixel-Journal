import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { chatbotTopics } from '../data/portfolioData';
import elephantImg from '../assets/elephant.jpg';

export default function Ellie() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const currentResponse = chatbotTopics.find(topic => topic.id === selectedTopic);

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-white rounded-full p-2 shadow-2xl hover:scale-110 transition-all duration-300 border-4 border-gray-800 group"
          style={{
            animation: 'bounce 2s infinite'
          }}
        >
          <div className="relative w-20 h-20">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-200 to-pink-200 border-2 border-gray-800 flex items-center justify-center overflow-hidden">
              <div className="bg-white/80 rounded-full flex items-center justify-center w-full h-full">
                <img
                  src={elephantImg}
                  alt="Cute elephant"
                  className="object-contain w-[85%] h-[85%]"
                />
              </div>
            </div>

            <div className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold animate-pulse">
              <MessageCircle size={14} />
            </div>
          </div>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 md:w-96 bg-white rounded-3xl shadow-2xl border-4 border-gray-800 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #fff9e6 0%, #ffffff 100%)'
          }}>
          <div className="bg-gradient-to-r from-yellow-200 to-yellow-300 p-4 border-b-4 border-gray-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 border-2 border-gray-800 flex items-center justify-center text-3xl">
                 <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-200 to-pink-200 border-2 border-gray-800 flex items-center justify-center overflow-hidden">
              <div className="bg-white/80 rounded-full flex items-center justify-center w-full h-full">
                <img
                  src={elephantImg}
                  alt="Cute elephant"
                  className="object-contain w-[85%] h-[85%]"
                />
              </div>
            </div>
              </div>
              <div>
                <h3 className="font-handwriting text-xl font-bold text-gray-800">Ellie</h3>
                <p className="font-handwriting text-xs text-gray-600">Your friendly guide!</p>
              </div>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                setSelectedTopic(null);
              }}
              className="hover:bg-gray-800 hover:text-white transition-colors p-2 rounded-full"
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-4 max-h-96 overflow-y-auto">
            {!selectedTopic ? (
              <div>
                <div className="mb-4 p-3 bg-white rounded-2xl border-2 border-dashed border-gray-300">
                  <p className="font-handwriting text-gray-700">
                    Hi! I'm Ellie! Pick a topic below to learn more about Keerat:
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {chatbotTopics.map((topic) => (
                    <button
                      key={topic.id}
                      onClick={() => setSelectedTopic(topic.id)}
                      className="p-3 bg-gradient-to-br from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300 rounded-xl border-2 border-gray-800 font-handwriting text-sm transition-all hover:scale-105 active:scale-95 shadow-md"
                    >
                      {topic.label}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-4 p-4 bg-white rounded-2xl border-2 border-gray-800 shadow-inner">
                  <p className="font-handwriting text-gray-800 leading-relaxed">
                    {currentResponse?.response}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedTopic(null)}
                  className="w-full p-3 bg-gradient-to-r from-yellow-200 to-yellow-300 hover:from-yellow-300 hover:to-yellow-400 rounded-xl border-2 border-gray-800 font-handwriting font-bold transition-all hover:scale-105 active:scale-95 shadow-md"
                >
                  ← Back to Topics
                </button>
              </div>
            )}
          </div>

          <div className="absolute bottom-2 right-2 opacity-20">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <path d="M15 45 Q20 35, 25 45 T35 45" stroke="#333" strokeWidth="2" strokeLinecap="round" fill="none"/>
              <circle cx="45" cy="25" r="8" fill="#ffd97d" opacity="0.5"/>
              <path d="M10 15 L15 10 M50 10 L45 15" stroke="#ff9b9b" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      )}
    </>
  );
}
