import { useState } from 'react';
import StickyNoteNav from './components/StickyNoteNav';
import Ellie from './components/Ellie';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ExperiencePage from './components/ExperiencePage';
import ProjectsPage from './components/ProjectsPage';
import ExtracurricularsPage from './components/ExtracurricularsPage';
import SkillsPage from './components/SkillsPage';
import ContactPage from './components/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'experience':
        return <ExperiencePage />;
      case 'projects':
        return <ProjectsPage />;
      case 'extracurriculars':
        return <ExtracurricularsPage />;
      case 'skills':
        return <SkillsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen diary-background pt-5">
      <StickyNoteNav currentPage={currentPage} onNavigate={setCurrentPage} />

      <main className="transition-opacity duration-500">
        {renderPage()}
      </main>

      <Ellie />

      <div className="fixed top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300 opacity-60" />
      <div className="fixed bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-300 via-green-300 to-yellow-300 opacity-60" />
    </div>
  );
}

export default App;
