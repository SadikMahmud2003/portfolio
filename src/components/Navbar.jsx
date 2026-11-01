import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  ['about', 'About'],
  ['skills', 'Skills'],
  ['projects', 'Projects'],
  ['github', 'Open source'],
  ['experience', 'Experience'],
  ['contact', 'Contact'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the link for whichever section is in the middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    const t = setTimeout(() => {
      document.querySelectorAll('section[id]').forEach((s) => observer.observe(s))
    }, 1500)
    return () => {
      clearTimeout(t)
      observer.disconnect()
    }
  }, [])

  return (
    <motion.header
      className={`nav ${scrolled ? 'nav-scrolled' : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <a href="#top" className="logo mono">
        <span className="accent">&lt;</span>sadik<span className="accent">/&gt;</span>
      </a>
      <button className="menu-btn" aria-label="Menu" onClick={() => setOpen(!open)}>
        <span className={open ? 'open' : ''} />
      </button>
      <nav className={open ? 'nav-open' : ''}>
        {links.map(([id, label], i) => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? 'active' : ''}
            onClick={() => setOpen(false)}
          >
            <span className="mono accent">0{i + 1}.</span> {label}
          </a>
        ))}
      </nav>
    </motion.header>
  )
}
