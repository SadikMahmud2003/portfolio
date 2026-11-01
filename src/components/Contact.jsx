import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { profile } from '../data.js'
import { Reveal } from './ui.jsx'
import { Magnetic } from './Effects.jsx'
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
    <section id="contact" className="section contact">
      <Reveal>
        <p className="mono accent">06. What's next?</p>
        <h2 className="contact-title gradient-text">Let's build something great.</h2>
        <p className="muted contact-text">
          I'm open to freelance work and full-time opportunities. Whether you have a project in
          mind or just want to say hi, my inbox is always open.
        </p>
        <div className="hero-actions center">
          <Magnetic>
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              {icons.mail} Say hello
            </a>
          </Magnetic>
          <Magnetic>
            <button onClick={copy} className="btn btn-ghost">
              {icons.copy} Copy email
            </button>
          </Magnetic>
          {profile.resume && (
            <Magnetic>
              <a href={profile.resume} className="btn btn-ghost" target="_blank" rel="noreferrer">
                Resume
              </a>
            </Magnetic>
          )}
        </div>
        <div className="socials">
          {socials.map(([name, url]) => (
            <a key={name} href={url} target="_blank" rel="noreferrer" aria-label={name}>
              {icons[name]}
            </a>
          ))}
        </div>
      </Reveal>
      <footer className="footer mono muted small">
        Designed & built by {profile.name} · © {new Date().getFullYear()}
      </footer>
      <AnimatePresence>
        {copied && (
          <motion.div
            className="toast mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            ✓ Email copied to clipboard
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
