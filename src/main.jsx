import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Lenis from 'lenis'
import './index.css'
import App from './App.jsx'

// ── Lenis buttery-smooth scroll ──────────────────────────────
// Intercepts native scroll and replaces it with a physics-based
// eased scroll that feels silky and flowing instead of abrupt.
const lenis = new Lenis({
  duration: 1.2,           // seconds for a full scroll motion (higher = slower, smoother)
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo ease-out — fast start, gentle finish
  orientation: 'vertical',
  smoothWheel: true,       // smooth mouse wheel
  wheelMultiplier: 0.9,    // slight deceleration — prevents over-scroll
  touchMultiplier: 1.5,    // natural touch feel on mobile
  infinite: false,
})

// Keep Lenis in sync with Framer Motion and the browser RAF loop
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

// Expose lenis so anchor scroll handlers can tell Lenis to scroll too
window.__lenis = lenis

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
