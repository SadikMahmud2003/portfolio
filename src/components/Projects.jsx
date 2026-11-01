import { projects } from '../data.js'
import { Reveal, Section, Tags } from './ui.jsx'
import { icons } from './icons.jsx'

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      intro="Production systems I've contributed to, plus a few personal projects. Client code is private, so the descriptions focus on what I built."
    >
      <div className="projects-grid">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.06} className="card project">
            <div className="project-head">
              <span className="project-context">{p.context}</span>
              <div className="project-links">
                {p.code && (
                  <a href={p.code} target="_blank" rel="noreferrer" aria-label={`${p.title} source`}>
                    {icons.github}
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" aria-label={`${p.title} live site`}>
                    {icons.arrow}
                  </a>
                )}
              </div>
            </div>
            <h3 className="card-title">{p.title}</h3>
            <p className="muted">{p.description}</p>
            <Tags items={p.tags} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
