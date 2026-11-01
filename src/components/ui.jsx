import { motion } from 'framer-motion'

export function Reveal({ children, delay = 0, className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function Section({ id, index, title, children }) {
  return (
    <section id={id} className="section">
      <Reveal>
        <h2 className="section-title">
          <span className="mono accent">{index}.</span> {title}
        </h2>
      </Reveal>
      {children}
    </section>
  )
}

// Card with a cursor-following glow and a subtle 3D tilt.
export function Spotlight({ children, className = '' }) {
  const onMove = (e) => {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    el.style.setProperty('--x', `${x}px`)
    el.style.setProperty('--y', `${y}px`)
    const rx = ((y / r.height) - 0.5) * -8
    const ry = ((x / r.width) - 0.5) * 8
    el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`
  }
  const onLeave = (e) => {
    e.currentTarget.style.transform = ''
  }
  return (
    <div className={`card ${className}`} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </div>
  )
}
