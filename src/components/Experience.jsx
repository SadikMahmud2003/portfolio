import { education, experience } from '../data.js'
import { Reveal, Section, Tags } from './ui.jsx'

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've worked"
      intro="Roles, responsibilities and what I ship day to day."
    >
      <ol className="timeline">
        {experience.map((job) => (
          <Reveal as="li" key={job.company + job.role} className="job">
            <div className="job-head">
              <div>
                <h3 className="job-role">{job.role}</h3>
                <p className="job-company">
                  {job.url ? (
                    <a href={job.url} target="_blank" rel="noreferrer">
                      {job.company}
                    </a>
                  ) : (
                    job.company
                  )}
                  {job.type && <span className="muted"> · {job.type}</span>}
                </p>
              </div>
              <span className="job-period">{job.period}</span>
            </div>
            {job.summary && <p className="muted">{job.summary}</p>}
            <ul className="points">
              {job.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
            {job.tags && <Tags items={job.tags} />}
          </Reveal>
        ))}
      </ol>

      <Reveal>
        <h3 className="subhead">Education</h3>
        <ul className="edu">
          {education.map((e) => (
            <li key={e.degree}>
              <p className="edu-degree">{e.degree}</p>
              <p className="muted">{e.school}</p>
              {e.detail && <p className="small muted">{e.detail}</p>}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
