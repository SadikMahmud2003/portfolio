import { skills } from '../data.js'
import { Reveal, Section, Spotlight } from './ui.jsx'

export default function Skills() {
  return (
    <Section id="skills" index="02" title="Skills & tools">
      <div className="skills-grid">
        {skills.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.08}>
            <Spotlight>
              <h3 className="card-title">{group.title}</h3>
              <ul className="chips">
                {group.items.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>
            </Spotlight>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
