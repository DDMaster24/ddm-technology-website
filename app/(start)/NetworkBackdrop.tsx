// Static version of the homepage's network look: dots and connecting lines,
// red on the left shading to blue/cyan on the right. Positions come from a
// fixed-seed PRNG so the server and the browser render the same SVG, and
// nothing animates, so scrolling stays smooth on phones.

const W = 1440
const H = 900

function mulberry32(seed: number) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function buildNetwork() {
  const rand = mulberry32(20260405)
  const nodes = Array.from({ length: 70 }, () => ({
    x: Math.round(rand() * W),
    y: Math.round(rand() * H),
    r: Math.round((1 + rand() * 1.8) * 10) / 10,
  }))
  const lines: { x1: number; y1: number; x2: number; y2: number; o: number }[] = []
  const max = 175
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y)
      if (d < max) {
        lines.push({
          x1: nodes[i].x,
          y1: nodes[i].y,
          x2: nodes[j].x,
          y2: nodes[j].y,
          o: Math.round((1 - d / max) * 100) / 100,
        })
      }
    }
  }
  return { nodes, lines }
}

const { nodes, lines } = buildNetwork()

export default function NetworkBackdrop({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <defs>
          <linearGradient id="ddm-net" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={W} y2="0">
            <stop offset="0" stopColor="#DC2626" />
            <stop offset="0.35" stopColor="#B91C1C" />
            <stop offset="0.65" stopColor="#1E40AF" />
            <stop offset="1" stopColor="#0891B2" />
          </linearGradient>
        </defs>
        <g stroke="url(#ddm-net)" strokeWidth="1">
          {lines.map((l, i) => (
            <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} strokeOpacity={l.o * 0.28} />
          ))}
        </g>
        <g fill="url(#ddm-net)">
          {nodes.map((n, i) => (
            <circle key={i} cx={n.x} cy={n.y} r={n.r} fillOpacity={0.55} />
          ))}
        </g>
      </svg>
    </div>
  )
}
