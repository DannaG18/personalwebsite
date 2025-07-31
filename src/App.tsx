import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { StyleBrand } from './components/StyleBrand';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 dark:from-navy-950 dark:via-indigo-950 dark:to-purple-950 transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Services />
        <StyleBrand />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;