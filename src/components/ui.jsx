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

export function Spotlight({ children, className = '' }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--x', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--y', `${e.clientY - r.top}px`)
  }
  return (
    <div className={`card ${className}`} onMouseMove={onMove}>
      {children}
    </div>
  )
}
