export async function typewriter(params: {
  target: string
  lines: string[]
  speed?: number
  delayBetween?: number
  withDots?: boolean
}) {
  const { target, lines, speed = 100, delayBetween = 1000, withDots = false } = params

  const el = document.querySelector(target)

  if (!el) return
  for (let i = 0; i < lines.length; i++) {
    const text = lines[i] || ''
    let current = ''
    const lineEl = document.createElement('div')
    el.appendChild(lineEl)
    for (const ch of text) {
      current += ch
      lineEl.textContent = current
      await new Promise((r) => setTimeout(r, speed))
    }
    await new Promise((r) => setTimeout(r, delayBetween))
  }

  if (withDots) {
    const last = el.lastElementChild
    if (!last) return
    const base = last.textContent
    for (let i = 0; i < 6; i++) {
      const dots = '.'.repeat(i % 4)
      last.textContent = base + dots
      await new Promise((r) => setTimeout(r, 400))
    }
  }

  const cursor = document.createElement('span')
  cursor.classList.add('cursor')
  el.appendChild(cursor)
}
