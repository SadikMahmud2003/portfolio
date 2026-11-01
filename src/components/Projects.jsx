import { projects } from '../data.js'
import { Reveal, Section, Spotlight } from './ui.jsx'

export default function Projects() {
  return (
    <Section id="projects" index="03" title="Things I've built">
      <div className="projects-grid">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08} className={p.featured ? 'featured' : ''}>
            <Spotlight className="project">
              <div className="project-top">
                <span className="folder" aria-hidden="true">
                  {'</>'}
                </span>
                <div className="project-links">
                  {p.code && (
                    <a href={p.code} target="_blank" rel="noreferrer">
                      Code
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer">
                      Live ↗
                    </a>
                  )}
                </div>
              </div>
              {p.featured && <span className="mono accent small">Featured project</span>}
              <h3 className="card-title">{p.title}</h3>
              <p className="muted">{p.description}</p>
              <ul className="tags mono">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </Spotlight>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
