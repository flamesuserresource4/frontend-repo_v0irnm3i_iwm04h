import React from 'react'
import { motion } from 'framer-motion'
import { Building2 } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[rgb(5,5,7)] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-60" style={{background: 'radial-gradient(600px 300px at 20% 10%, rgba(255,255,255,0.06), rgba(0,0,0,0)), radial-gradient(600px 300px at 80% 90%, rgba(255,215,128,0.05), rgba(0,0,0,0))'}} />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300 backdrop-blur"
        >
          <Building2 className="h-4 w-4 text-amber-300" /> About Us
        </motion.div>

        <div className="grid items-start gap-10 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="md:col-span-6"
          >
            <h2 className="bg-gradient-to-br from-zinc-50 to-zinc-300 bg-clip-text text-3xl font-bold leading-tight text-transparent md:text-4xl">
              Precision in FX. Preservation in Hard Assets.
            </h2>
            <p className="mt-4 text-zinc-300/90">
              Ravto Capital, a division of Ravto under the legal entity PT. Ravto Nusa Capital,
              operates at the intersection of institutional FX execution and crypto-native treasury.
              We specialize in EUR/USD trading, then convert realized profits into Bitcoin (BTC) and
              physical silver—assets we view as enduring stores of value.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-6"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-300/10 blur-2xl" />
              <ul className="space-y-4 text-sm text-zinc-300">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-300" />
                  Institutional-grade risk management, execution, and reporting
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-zinc-300" />
                  Fiat performance redirected into scarce, censorship-resistant assets
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-400" />
                  A long-term reserve policy anchored in Bitcoin and physical silver
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
