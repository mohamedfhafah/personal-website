import { useEffect, useRef } from "react"

type Particle = {
  anchorX: number
  anchorY: number
  orbitX: number
  orbitY: number
  phase: number
  speed: number
  radius: number
  alpha: number
}

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)

const createParticles = (width: number, height: number): Particle[] => {
  const density = clamp(Math.round((width * height) / 22000), 46, 92)

  return Array.from({ length: density }, () => ({
    anchorX: Math.random() * width,
    anchorY: Math.random() * height,
    orbitX: 8 + Math.random() * 26,
    orbitY: 6 + Math.random() * 20,
    phase: Math.random() * Math.PI * 2,
    speed: 0.2 + Math.random() * 0.7,
    radius: 1 + Math.random() * 2.4,
    alpha: 0.28 + Math.random() * 0.5,
  }))
}

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext("2d")
    if (!context) return

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    const legacyReducedMotion = reducedMotion as MediaQueryList & {
      addListener?: (listener: (event: MediaQueryListEvent) => void) => void
      removeListener?: (listener: (event: MediaQueryListEvent) => void) => void
    }
    let width = 0
    let height = 0
    let particles: Particle[] = []
    let animationFrame = 0

    const resize = () => {
      const bounds = canvas.getBoundingClientRect()
      width = Math.max(1, bounds.width)
      height = Math.max(1, bounds.height)

      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      context.setTransform(dpr, 0, 0, dpr, 0, 0)

      particles = createParticles(width, height)
    }

    const drawBackdrop = () => {
      context.clearRect(0, 0, width, height)

      const glow = context.createRadialGradient(width * 0.62, height * 0.22, 0, width * 0.55, height * 0.5, width)
      glow.addColorStop(0, "rgba(4, 217, 196, 0.24)")
      glow.addColorStop(0.45, "rgba(11, 29, 48, 0.12)")
      glow.addColorStop(1, "rgba(9, 12, 23, 0.02)")
      context.fillStyle = glow
      context.fillRect(0, 0, width, height)
    }

    const drawFrame = (timestamp: number) => {
      drawBackdrop()

      const time = timestamp / 1000
      const points = particles.map((particle) => ({
        x: particle.anchorX + Math.cos(time * particle.speed + particle.phase) * particle.orbitX,
        y: particle.anchorY + Math.sin(time * (particle.speed * 0.8) + particle.phase) * particle.orbitY,
        radius: particle.radius,
        alpha: particle.alpha,
      }))

      context.lineWidth = 0.65
      for (let i = 0; i < points.length; i += 1) {
        for (let j = i + 1; j < points.length; j += 1) {
          const dx = points[i].x - points[j].x
          const dy = points[i].y - points[j].y
          const distance = Math.hypot(dx, dy)

          if (distance > 96) continue

          const opacity = (1 - distance / 96) * 0.16
          context.strokeStyle = `rgba(4, 217, 196, ${opacity})`
          context.beginPath()
          context.moveTo(points[i].x, points[i].y)
          context.lineTo(points[j].x, points[j].y)
          context.stroke()
        }
      }

      for (const point of points) {
        context.fillStyle = `rgba(4, 217, 196, ${point.alpha})`
        context.beginPath()
        context.arc(point.x, point.y, point.radius, 0, Math.PI * 2)
        context.fill()

        context.fillStyle = `rgba(184, 251, 246, ${point.alpha * 0.42})`
        context.beginPath()
        context.arc(point.x, point.y, point.radius * 2.8, 0, Math.PI * 2)
        context.fill()
      }
    }

    const render = (timestamp: number) => {
      drawFrame(timestamp)
      if (!reducedMotion.matches) {
        animationFrame = window.requestAnimationFrame(render)
      }
    }

    const restart = () => {
      window.cancelAnimationFrame(animationFrame)
      drawFrame(window.performance.now())
      if (!reducedMotion.matches) {
        animationFrame = window.requestAnimationFrame(render)
      }
    }

    const handleMotionChange = () => {
      restart()
    }

    resize()
    restart()

    window.addEventListener("resize", resize)
    if ("addEventListener" in reducedMotion) {
      reducedMotion.addEventListener("change", handleMotionChange)
    } else {
      legacyReducedMotion.addListener?.(handleMotionChange)
    }

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener("resize", resize)
      if ("removeEventListener" in reducedMotion) {
        reducedMotion.removeEventListener("change", handleMotionChange)
      } else {
        legacyReducedMotion.removeListener?.(handleMotionChange)
      }
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 h-full w-full" />
}
