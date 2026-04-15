import React from 'react';
import './index.css';

import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      <header className="text-center py-10 bg-blue-500 text-white">
        <img
          src={process.env.PUBLIC_URL + "/images/profile.jpg"}
          alt="Profile"
          className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-white object-cover"
        />
        <h1 className="text-4xl font-bold">Carl Aquino</h1>
        <p className="text-lg mt-2">BS IT Student — Web Technology | University of the Cordilleras</p>
      </header>
      <main className="max-w-4xl mx-auto p-6">
        <AboutMe />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="text-center py-4 bg-blue-500 text-white mt-12">
        <p>© 2025 Carl Aquino. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;