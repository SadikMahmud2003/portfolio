import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data.js'
import { Magnetic } from './Effects.jsx'

function useTypewriter(words) {
  const [text, setText] = useState('')
  const [i, setI] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[i % words.length]
    const done = !deleting && text === word
    const empty = deleting && text === ''
    const delay = done ? 1600 : deleting ? 45 : 85
    const t = setTimeout(() => {
      if (done) setDeleting(true)
      else if (empty) {
        setDeleting(false)
        setI(i + 1)
      } else setText(word.slice(0, text.length + (deleting ? -1 : 1)))
    }, delay)
    return () => clearTimeout(t)
  }, [text, deleting, i, words])

  return text
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const typed = useTypewriter(profile.roles)

  return (
    <section id="top" className="hero">
      <motion.div
        className="hero-content"
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.12, delayChildren: 0.3 }}
      >
        {profile.available && (
          <motion.div variants={item} className="badge">
            <span className="pulse" /> Available for work
          </motion.div>
        )}
        <motion.p variants={item} className="mono accent hero-hi">
          <span className="wave">👋</span> Hi, my name is
        </motion.p>
        <motion.h1 variants={item} className="hero-name">
          <span className="gradient-text">{profile.name}.</span>
        </motion.h1>
        <motion.h2 variants={item} className="hero-role">
          I'm a <span className="typed">{typed}</span>
          <span className="caret">|</span>
        </motion.h2>
        <motion.p variants={item} className="hero-tagline">
          {profile.tagline}
        </motion.p>
        <motion.div variants={item} className="hero-actions">
          <Magnetic>
            <a href="#projects" className="btn btn-primary">
              View my work →
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, x: 40, rotate: 2 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 0.9, delay: 0.6 }}
      >
        <div className="avatar">
          <img
            src={`https://github.com/${profile.githubUser}.png?size=240`}
            alt={profile.name}
            width="120"
            height="120"
          />
        </div>
        <div className="terminal">
          <div className="terminal-bar">
            <i /> <i /> <i />
            <span className="mono">~/sadik — zsh</span>
          </div>
          <pre className="mono terminal-body">
            <span className="accent">$</span> php artisan about:me{'\n'}
            <span className="muted">{'{'}</span>
            {'\n'}
            {'  '}
            <span className="key">"name"</span>: <span className="str">"{profile.name}"</span>,
            {'\n'}
            {'  '}
            <span className="key">"role"</span>: <span className="str">"{profile.role}"</span>,
            {'\n'}
            {'  '}
            <span className="key">"stack"</span>: [<span className="str">"Laravel"</span>,{' '}
            <span className="str">"PHP"</span>, <span className="str">"React"</span>],{'\n'}
            {'  '}
            <span className="key">"location"</span>:{' '}
            <span className="str">"{profile.location}"</span>,{'\n'}
            {'  '}
            <span className="key">"available"</span>: <span className="bool">{String(profile.available)}</span>
            {'\n'}
            <span className="muted">{'}'}</span>
            {'\n'}
            <span className="accent">$</span> <span className="caret">▋</span>
          </pre>
        </div>
      </motion.div>

      <a href="#about" className="scroll-hint" aria-label="Scroll down">
        <span />
      </a>
    </section>
  )
}
