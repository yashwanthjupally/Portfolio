import React from 'react';
import './App.css';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';

const App = () => {
  return (
    <>
      <Hero/>
      <Skills />
      <Projects/>
      <Contact />
      <Footer />
    </>
  )
}

export default App
