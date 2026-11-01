import { skills } from '../data.js'

export default function Marquee() {
  const items = skills.flatMap((g) => g.items)
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[...items, ...items].map((s, i) => (
          <span key={i} className="marquee-item">
            {s}
            <span className="marquee-sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
