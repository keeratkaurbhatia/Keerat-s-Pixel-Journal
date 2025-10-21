import React from 'react';
import { Mail, Linkedin, Github, Send, FileText } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen p-4 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="diary-page p-8 md:p-12 relative">
          <div className="absolute top-4 right-4">
            <Send className="text-blue-300" size={40} opacity={0.3} />
          </div>

          <h2 className="font-handwriting text-4xl md:text-5xl font-bold text-gray-800 mb-8 border-b-4 border-gray-800 pb-2 inline-block">
            Let's Connect!
          </h2>

          <div className="mb-8 p-6 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl border-2 border-dashed border-gray-400">
            <p className="font-handwriting text-xl text-gray-800 leading-relaxed text-center">
              I'm always up for interesting conversations and collaboration opportunities! Whether you want to chat about tech, creative projects, or just say hi—drop me a message!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <a
              href="mailto:itskeeratkaur@gmail.com"
              className="flex items-center gap-4 p-5 bg-white hover:bg-red-50 rounded-xl border-2 border-gray-800 shadow-md hover:shadow-xl transition-all transform hover:scale-105 active:scale-95"
            >
              <div className="p-3 bg-red-200 rounded-lg border-2 border-gray-800">
                <Mail size={24} className="text-gray-800" />
              </div>
              <div className="flex-1">
                <p className="font-handwriting font-bold text-gray-800 mb-1">Email</p>
                <p className="font-handwriting text-sm text-gray-600 break-all">itskeeratkaur@gmail.com</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/keeratkaurbhatia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-white hover:bg-blue-50 rounded-xl border-2 border-gray-800 shadow-md hover:shadow-xl transition-all transform hover:scale-105 active:scale-95"
            >
              <div className="p-3 bg-blue-200 rounded-lg border-2 border-gray-800">
                <Linkedin size={24} className="text-gray-800" />
              </div>
              <div className="flex-1">
                <p className="font-handwriting font-bold text-gray-800 mb-1">LinkedIn</p>
                <p className="font-handwriting text-sm text-gray-600 break-all">linkedin.com/in/keeratkaurbhatia</p>
              </div>
            </a>

            <a
              href="https://github.com/keeratkaurbhatia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-white hover:bg-gray-50 rounded-xl border-2 border-gray-800 shadow-md hover:shadow-xl transition-all transform hover:scale-105 active:scale-95 md:col-span-2"
            >
              <div className="p-3 bg-gray-200 rounded-lg border-2 border-gray-800">
                <Github size={24} className="text-gray-800" />
              </div>
              <div className="flex-1">
                <p className="font-handwriting font-bold text-gray-800 mb-1">GitHub</p>
                <p className="font-handwriting text-sm text-gray-600 break-all">github.com/keeratkaurbhatia</p>
              </div>
            </a>
          </div>

          <div className="block w-full p-6 bg-gradient-to-r from-purple-200 to-pink-200 rounded-2xl border-2 border-gray-800 shadow-lg relative overflow-hidden">
            <div className="flex items-center justify-center gap-4">
              <FileText size={32} className="text-gray-800" />
              <div>
                <p className="font-handwriting text-2xl font-bold text-gray-800">Resume Brewing Up!</p>
                <p className="font-handwriting text-sm text-gray-600">Coming soon... 🍵</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" style={{
              animation: 'shimmer 2s infinite',
              backgroundSize: '200% 100%'
            }}></div>
          </div>

          <div className="mt-8 p-6 bg-white rounded-2xl border-2 border-gray-800 text-center">
            <p className="font-handwriting text-lg text-gray-800 mb-2">
              Looking forward to hearing from you!
            </p>
            <p className="font-handwriting text-3xl">🌻</p>
          </div>

          <div className="absolute bottom-4 left-4 opacity-20">
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
              <circle cx="35" cy="35" r="25" stroke="#ffd97d" strokeWidth="2" strokeDasharray="4 4"/>
              <path d="M20 35 L25 30 L30 40 L35 25 L40 35 L45 30 L50 40" stroke="#ff9b9b" strokeWidth="2" fill="none"/>
              <circle cx="35" cy="15" r="5" fill="#a8e6cf"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
