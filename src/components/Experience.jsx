import { experience } from '../data.js'
import { Reveal, Section } from './ui.jsx'

export default function Experience() {
  return (
    <Section id="experience" index="04" title="Where I've worked">
      <ol className="timeline">
        {experience.map((job, i) => (
          <Reveal key={job.company + job.role} delay={i * 0.1}>
            <li className="timeline-item">
              <span className="timeline-dot" />
              <span className="mono muted small">{job.period}</span>
              <h3 className="card-title">
                {job.role} <span className="accent">@ {job.company}</span>
              </h3>
              <ul className="points">
                {job.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
