import { useEffect, useState } from 'react'
import { profile } from '../data.js'
import { Reveal } from './ui.jsx'
import { icons } from './icons.jsx'

const langColors = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  PHP: '#4f5d95',
  Solidity: '#aa6746',
  Python: '#3572a5',
  HTML: '#e34c26',
  CSS: '#663399',
  Vue: '#41b883',
  Blade: '#f7523f',
  'Jupyter Notebook': '#da5b0b',
}

const prettify = (name) => name.replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim()

// Live repos from the GitHub API, so the list stays current without edits.
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
    <div className="repos">
      <Reveal className="repos-head">
        <h3 className="subhead">On GitHub</h3>
        <a href={profile.socials.github} target="_blank" rel="noreferrer" className="link">
          View all {icons.arrow}
        </a>
      </Reveal>
      <ul className="repo-list">
        {(repos ?? Array.from({ length: 3 })).map((r, i) =>
          r ? (
            <li key={r.id}>
              <a href={r.html_url} target="_blank" rel="noreferrer" className="repo">
                <span className="repo-name">{prettify(r.name)}</span>
                {r.description && <span className="repo-desc">{r.description}</span>}
                <span className="repo-meta">
                  {r.language && (
                    <span>
                      <i style={{ background: langColors[r.language] || 'var(--muted)' }} />
                      {r.language}
                    </span>
                  )}
                  {r.stargazers_count > 0 && (
                    <span>
                      {icons.star} {r.stargazers_count}
                    </span>
                  )}
                </span>
              </a>
            </li>
          ) : (
            <li key={i} className="repo skeleton" />
          )
        )}
      </ul>
    </div>
  )
}
