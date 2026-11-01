import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import GitHub from './components/GitHub.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main className="container">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <GitHub />
        <Skills />
        <Contact />
      </main>
    </MotionConfig>
  )
}
