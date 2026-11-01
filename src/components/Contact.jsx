import { useState } from 'react'
import { profile } from '../data.js'
import { Reveal } from './ui.jsx'
import { icons } from './icons.jsx'

export default function Contact() {
  const socials = Object.entries(profile.socials).filter(([, url]) => url)
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <>
      <section id="contact" className="section">
        <Reveal className="contact card">
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">Have a project or a role in mind?</h2>
          <p className="section-intro">
            I'm open to full-time roles and freelance work — web applications, SaaS platforms and
            data-driven products.
            The fastest way to reach me is email — I usually reply within a day.
          </p>
          <div className="hero-actions">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              {icons.mail} {profile.email}
            </a>
            <button onClick={copy} className="btn btn-secondary" aria-live="polite">
              {copied ? icons.check : icons.copy} {copied ? 'Copied' : 'Copy email'}
            </button>
            {profile.resume && (
              <a href={profile.resume} className="btn btn-secondary" target="_blank" rel="noreferrer">
                {icons.download} Resume
              </a>
            )}
          </div>
        </Reveal>
      </section>
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="footer-links">
          {socials.map(([name, url]) => (
            <a key={name} href={url} target="_blank" rel="noreferrer">
              {name === 'github' ? 'GitHub' : 'LinkedIn'}
            </a>
          ))}
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </footer>
    </>
  )
}
