import { motion } from 'framer-motion'
import { profile } from '../data.js'
import { icons } from './icons.jsx'

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const socials = Object.entries(profile.socials).filter(([, url]) => url)

  return (
    <section id="top" className="hero">
      <motion.div
        className="hero-content"
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.08, delayChildren: 0.1 }}
      >
        <motion.div variants={item} className="hero-id">
          <img
            className="avatar"
            src={`https://github.com/${profile.githubUser}.png?size=160`}
            alt={profile.name}
            width="64"
            height="64"
          />
          <div>
            <p className="hero-name">{profile.name}</p>
            <p className="hero-meta hero-loc">
              {icons.pin} {profile.location}
            </p>
          </div>
        </motion.div>

        <motion.h1 variants={item} className="hero-title">
          {profile.role}
        </motion.h1>
        <motion.ul variants={item} className="hero-focus" aria-label="Focus areas">
          {profile.focus.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </motion.ul>
        <motion.p variants={item} className="hero-intro">
          {profile.intro}
        </motion.p>

        <motion.div variants={item} className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            Get in touch {icons.right}
          </a>
          {profile.resume ? (
            <a href={profile.resume} className="btn btn-secondary" target="_blank" rel="noreferrer">
              {icons.download} Download resume
            </a>
          ) : (
            <a href="#projects" className="btn btn-secondary">
              View projects
            </a>
          )}
          <div className="hero-socials">
            {socials.map(([name, url]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                className="icon-btn"
              >
                {icons[name]}
              </a>
            ))}
            <a href={`mailto:${profile.email}`} aria-label="Email" className="icon-btn">
              {icons.mail}
            </a>
          </div>
        </motion.div>

        {profile.available && (
          <motion.p variants={item} className="status">
            <span className="status-dot" /> Open to new opportunities
          </motion.p>
        )}
      </motion.div>
    </section>
  )
}
