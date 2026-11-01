import { useEffect, useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { profile } from '../data.js'
import { icons } from './icons.jsx'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })
  return <motion.div className="scroll-progress" style={{ scaleX }} />
}

// Dot + trailing ring cursor; only on devices with a precise pointer.
export function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    document.body.classList.add('has-cursor')
    const pos = { x: -100, y: -100 }
    const trail = { x: -100, y: -100 }
    let raf

    const onMove = (e) => {
      pos.x = e.clientX
      pos.y = e.clientY
      dot.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`
    }
    const onOver = (e) => {
      const hovering = e.target.closest('a, button, .card')
      ring.current.classList.toggle('cursor-hover', !!hovering)
    }
    const loop = () => {
      trail.x += (pos.x - trail.x) * 0.18
      trail.y += (pos.y - trail.y) * 0.18
      ring.current.style.transform = `translate(${trail.x}px, ${trail.y}px)`
      raf = requestAnimationFrame(loop)
    }

    loop()
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    return () => {
      cancelAnimationFrame(raf)
      document.body.classList.remove('has-cursor')
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [])

  return (
    <>
      <div ref={dot} className="cursor-dot" aria-hidden="true" />
      <div ref={ring} className="cursor-ring" aria-hidden="true" />
    </>
  )
}

export function SideLinks() {
  const socials = Object.entries(profile.socials).filter(([, url]) => url)
  return (
    <>
      <motion.ul
        className="side side-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        {socials.map(([name, url]) => (
          <li key={name}>
            <a href={url} target="_blank" rel="noreferrer" aria-label={name}>
              {icons[name]}
            </a>
          </li>
        ))}
      </motion.ul>
      <motion.div
        className="side side-right"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <a href={`mailto:${profile.email}`} className="mono">
          {profile.email}
        </a>
      </motion.div>
    </>
  )
}

export function Magnetic({ children, strength = 0.3 }) {
  const ref = useRef(null)
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - r.left - r.width / 2) * strength
    const y = (e.clientY - r.top - r.height / 2) * strength
    ref.current.style.transform = `translate(${x}px, ${y}px)`
  }
  const onLeave = () => {
    ref.current.style.transform = ''
  }
  return (
    <span ref={ref} className="magnetic" onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </span>
  )
}
