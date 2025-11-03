import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, LineChart, Coins, Banknote } from 'lucide-react'

function useCounter(target = 100, duration = 1200) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    let raf
    const start = performance.now()
    const step = (t) => {
      const p = Math.min(1, (t - start) / duration)
      setValue(Math.round(target * p))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [target, duration])
  return value
}

function TiltCard({ children }) {
  const ref = useRef(null)
  const [{ rx, ry }, setR] = useState({ rx: 0, ry: 0 })

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect()
        if (!rect) return
        const px = (e.clientX - rect.left) / rect.width
        const py = (e.clientY - rect.top) / rect.height
        const ry = (px - 0.5) * 10
        const rx = (0.5 - py) * 10
        setR({ rx, ry })
      }}
      onMouseLeave={() => setR({ rx: 0, ry: 0 })}
      style={{ transform: `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)` }}
      className="transition-transform duration-200 will-change-transform"
    >
      {children}
    </div>
  )
}

export default function Strategy() {
  const trades = useCounter(128)
  const btc = useCounter(42)
  const silver = useCounter(310)

  return (
    <section id="strategy" className="relative w-full bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0" style={{background: 'radial-gradient(900px 450px at 70% 10%, rgba(255,215,128,0.06), rgba(0,0,0,0)), radial-gradient(900px 450px at 20% 90%, rgba(192,192,192,0.06), rgba(0,0,0,0))'}} />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-br from-zinc-50 to-amber-200 bg-clip-text text-3xl font-bold text-transparent md:text-4xl"
          >
            Our Strategy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mx-auto mt-3 max-w-3xl text-zinc-300"
          >
            A focused EUR/USD trading mandate feeds a long-term reserve engine that accumulates
            Bitcoin and physical silver. Execution today, preservation for decades.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <TiltCard>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900 to-zinc-950 p-6"
            >
              <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-amber-200/10 blur-2xl" />
              <LineChart className="h-6 w-6 text-amber-300" />
              <h3 className="mt-3 text-lg font-semibold">EUR/USD Precision</h3>
              <p className="mt-2 text-sm text-zinc-300">
                Systematic entries, position sizing, and asymmetric risk-reward. Execution with
                institutional discipline.
              </p>
              <div className="mt-4 text-2xl font-extrabold text-zinc-100">{trades}<span className="ml-2 text-sm font-medium text-zinc-400">trades/mo (sim)</span></div>
            </motion.div>
          </TiltCard>

          <TiltCard>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900 to-zinc-950 p-6"
            >
              <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-zinc-200/10 blur-2xl" />
              <Coins className="h-6 w-6 text-amber-200" />
              <h3 className="mt-3 text-lg font-semibold">Bitcoin Accumulation</h3>
              <p className="mt-2 text-sm text-zinc-300">
                Profits route to BTC. Cold storage policy with multi-sig governance.
              </p>
              <div className="mt-4 text-2xl font-extrabold text-zinc-100">{btc}<span className="ml-2 text-sm font-medium text-zinc-400">BTC target (sim)</span></div>
            </motion.div>
          </TiltCard>

          <TiltCard>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900 to-zinc-950 p-6"
            >
              <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-zinc-100/10 blur-2xl" />
              <Banknote className="h-6 w-6 text-zinc-200" />
              <h3 className="mt-3 text-lg font-semibold">Silver Reserves</h3>
              <p className="mt-2 text-sm text-zinc-300">
                Physical silver bars as a tangible ballast to the portfolio, complementing BTC.
              </p>
              <div className="mt-4 text-2xl font-extrabold text-zinc-100">{silver}<span className="ml-2 text-sm font-medium text-zinc-400">kg target (sim)</span></div>
            </motion.div>
          </TiltCard>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Partner With Us
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
