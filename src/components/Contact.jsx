import { profile } from '../data.js'
import { Reveal } from './ui.jsx'

export default function Contact() {
  const socials = Object.entries(profile.socials).filter(([, url]) => url)

  return (
    <section id="contact" className="section contact">
      <Reveal>
        <p className="mono accent">05. What's next?</p>
        <h2 className="contact-title gradient-text">Let's build something great.</h2>
        <p className="muted contact-text">
          I'm open to freelance work and full-time opportunities. Whether you have a project in
          mind or just want to say hi, my inbox is always open.
        </p>
        <div className="hero-actions center">
          <a href={`mailto:${profile.email}`} className="btn btn-primary">
            Say hello ✉
          </a>
          {profile.resume && (
            <a href={profile.resume} className="btn btn-ghost" target="_blank" rel="noreferrer">
              Resume
            </a>
          )}
        </div>
        <div className="socials">
          {socials.map(([name, url]) => (
            <a key={name} href={url} target="_blank" rel="noreferrer" className="mono">
              {name}
            </a>
          ))}
        </div>
      </Reveal>
      <footer className="footer mono muted small">
        Designed & built by {profile.name} · © {new Date().getFullYear()}
      </footer>
    </section>
  )
}
