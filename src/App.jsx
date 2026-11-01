import Background from './components/Background.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import GitHub from './components/GitHub.jsx'
import Marquee from './components/Marquee.jsx'
import { Cursor, ScrollProgress, SideLinks } from './components/Effects.jsx'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Cursor />
      <Background />
      <Navbar />
      <SideLinks />
      <main>
        <Hero />
      </main>
      <Marquee />
      <main>
        <About />
        <Skills />
        <Projects />
        <GitHub />
        <Experience />
        <Contact />
      </main>
    </>
  )
}
