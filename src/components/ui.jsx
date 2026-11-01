import { motion } from 'framer-motion'

export function Reveal({ children, delay = 0, className, as = 'div' }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  )
}

export function Section({ id, eyebrow, title, intro, children }) {
  return (
    <section id={id} className="section">
      <Reveal className="section-head">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
        {intro && <p className="section-intro">{intro}</p>}
      </Reveal>
      {children}
    </section>
  )
}

export function Tags({ items }) {
  return (
    <ul className="tags">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  )
}
