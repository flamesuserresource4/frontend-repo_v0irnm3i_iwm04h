import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { ArrowRight, Shield, TrendingUp } from 'lucide-react'

const metallicGradient =
  'bg-[radial-gradient(1250px_650px_at_50%_-20%,rgba(255,255,255,0.12),rgba(0,0,0,0)_60%),linear-gradient(120deg,#c0c0c0,rgba(160,160,160,0.2),#A67C00)]'

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  const parallax = useMemo(() => {
    const px = (mouse.x - 0.5) * 20
    const py = (mouse.y - 0.5) * 20
    return {
      layer1: { transform: `translate3d(${-px}px, ${-py}px, 0)` },
      layer2: { transform: `translate3d(${px}px, ${py}px, 0)` },
    }
  }, [mouse])

  return (
    <section
      id="home"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height
        setMouse({ x, y })
      }}
      className="relative h-[100svh] w-full overflow-hidden bg-black text-white"
    >
      {/* 3D Cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle metallic/glow overlay (non-blocking) */}
      <div
        className={`pointer-events-none absolute inset-0 mix-blend-screen opacity-70 ${metallicGradient}`}
      />

      {/* Floating accents (parallax) */}
      <div className="absolute inset-0">
        <div
          className="pointer-events-none absolute -left-10 top-24 h-64 w-64 rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(circle at 30% 30%, rgba(255,215,128,0.35), rgba(0,0,0,0))',
            ...parallax.layer1,
          }}
        />
        <div
          className="pointer-events-none absolute -right-10 bottom-20 h-72 w-72 rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(circle at 70% 70%, rgba(192,192,192,0.35), rgba(0,0,0,0))',
            ...parallax.layer2,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur"
        >
          <Shield className="h-4 w-4 text-amber-300" />
          <span className="text-xs tracking-widest text-white/80">
            PT. Ravto Nusa Capital
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 1.0, ease: 'easeOut' }}
          className="bg-gradient-to-br from-zinc-50 via-zinc-200 to-amber-200 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl"
        >
          Ravto Capital
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1.0, ease: 'easeOut' }}
          className="mt-4 max-w-3xl text-balance text-base text-zinc-300 sm:text-lg"
        >
          Trading the Euro, Banking on Bitcoin and Silver.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.0, ease: 'easeOut' }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#strategy"
            className="group inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-300/10 px-6 py-3 text-sm font-semibold text-amber-200 backdrop-blur transition hover:bg-amber-300/20"
          >
            Explore Strategy
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Contact Us
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="mt-10 grid w-full max-w-3xl grid-cols-3 gap-3"
        >
          {[
            { label: 'EUR/USD Focus', value: 'Precision FX' },
            { label: 'Long-Term Reserve', value: 'BTC + Silver' },
            { label: 'Philosophy', value: 'Risk-Managed Growth' },
          ].map((stat, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 bg-white/5 p-4 text-left backdrop-blur"
            >
              <div className="flex items-center gap-2 text-zinc-300">
                <TrendingUp className="h-4 w-4 text-amber-300" />
                <span className="text-xs">
                  {stat.label}
                </span>
              </div>
              <div className="mt-1 text-sm font-semibold text-zinc-100">
                {stat.value}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
