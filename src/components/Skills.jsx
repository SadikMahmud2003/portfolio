import { skills } from '../data.js'
import { Reveal, Section, Tags } from './ui.jsx'

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I work with"
      intro="My day-to-day stack first, then the areas I explore on the side."
    >
      <div className="skills-grid">
        {skills.map((group, i) => (
          <Reveal key={group.title} delay={(i % 3) * 0.05} className="skill-group">
            <h3 className="skill-title">{group.title}</h3>
            <Tags items={group.items} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
