import { about, facts, principles } from '../data.js'
import { Reveal, Section } from './ui.jsx'

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A little about me">
      <div className="about-grid">
        <Reveal>
          {about.map((p) => (
            <p key={p} className="prose">
              {p}
            </p>
          ))}
          <h3 className="subhead">How I work</h3>
          <ul className="principles">
            {principles.map(([lead, text]) => (
              <li key={lead}>
                <strong>{lead}</strong> {text}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <dl className="facts">
            {facts.map((f) => (
              <div key={f.label} className="fact">
                <dt>{f.value}</dt>
                <dd>{f.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}
