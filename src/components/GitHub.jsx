import { useEffect, useState } from 'react'
import { profile } from '../data.js'
import { Reveal, Section, Spotlight } from './ui.jsx'
import { icons } from './icons.jsx'

const langColors = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  PHP: '#8892bf',
  Solidity: '#aa6746',
  Python: '#3572a5',
  HTML: '#e34c26',
  CSS: '#663399',
  Vue: '#41b883',
  Blade: '#f7523f',
}

const prettify = (name) => name.replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim()

// Live repos from the GitHub API, so the section stays current without edits.
export default function GitHub() {
  const [repos, setRepos] = useState(null)

  useEffect(() => {
    fetch(`https://api.github.com/users/${profile.githubUser}/repos?sort=updated&per_page=30`)
      .then((r) => (r.ok ? r.json() : []))
      .then((data) =>
        setRepos(
          data
            .filter((r) => !r.fork && r.name !== profile.githubUser && r.name !== 'portfolio')
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 6)
        )
      )
      .catch(() => setRepos([]))
  }, [])

  if (repos && repos.length === 0) return null

  return (
    <Section id="github" index="04" title="Open source">
      <div className="repo-grid">
        {(repos ?? Array.from({ length: 3 })).map((r, i) =>
          r ? (
            <Reveal key={r.id} delay={i * 0.06}>
              <a href={r.html_url} target="_blank" rel="noreferrer" className="repo-link">
                <Spotlight className="repo">
                  <div className="repo-head">
                    <span className="folder">{'</>'}</span>
                    <span className="repo-arrow">{icons.arrow}</span>
                  </div>
                  <h3 className="repo-title">{prettify(r.name)}</h3>
                  {r.description && <p className="muted small">{r.description}</p>}
                  <div className="repo-meta mono small">
                    {r.language && (
                      <span>
                        <i style={{ background: langColors[r.language] || '#8b6cff' }} />
                        {r.language}
                      </span>
                    )}
                    <span>
                      {icons.star} {r.stargazers_count}
                    </span>
                    <span>
                      {icons.fork} {r.forks_count}
                    </span>
                  </div>
                </Spotlight>
              </a>
            </Reveal>
          ) : (
            <div key={i} className="card repo skeleton" />
          )
        )}
      </div>
      <Reveal>
        <div className="center-row">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
          >
            {icons.github} See all on GitHub
          </a>
        </div>
      </Reveal>
    </Section>
  )
}
