import { about, stats } from '../data.js'
import { Reveal, Section } from './ui.jsx'

export default function About() {
  return (
    <Section id="about" index="01" title="About me">
      <div className="about-grid">
        <div>
          {about.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p className="about-text">{p}</p>
            </Reveal>
          ))}
        </div>
        <div className="stats">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={0.15 + i * 0.1}>
              <div className="stat">
                <span className="stat-value gradient-text">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
