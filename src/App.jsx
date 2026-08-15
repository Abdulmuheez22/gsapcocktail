import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all'
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import Cocktail from './Components/Cocktail';
import About from './Components/About';
import Art from './Components/Art';
import Menu from './Components/Menu';
import Contact from './Components/Contact';

gsap.registerPlugin( ScrollTrigger, SplitText);
const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <Cocktail /> 
      <About />
      <Art />
      <Menu />
      <Contact />
    </main>
  )
}

export default App