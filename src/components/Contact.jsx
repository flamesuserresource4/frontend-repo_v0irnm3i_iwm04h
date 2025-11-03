import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Building2 } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-[rgb(7,7,9)] py-24 text-white">
      <div className="pointer-events-none absolute inset-0" style={{background: 'radial-gradient(800px 400px at 50% 0%, rgba(255,215,128,0.06), rgba(0,0,0,0))'}} />
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center text-3xl font-bold md:text-4xl"
        >
          Contact / Partnership
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mx-auto mt-3 max-w-2xl text-center text-zinc-300"
        >
          For institutional inquiries and partnerships, reach out to our team.
        </motion.p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <Mail className="h-6 w-6 text-amber-300" />
            <div className="mt-3 text-sm text-zinc-300">Email</div>
            <a href="mailto:partners@ravto.capital" className="mt-1 inline-block font-medium text-zinc-100 hover:underline">
              partners@ravto.capital
            </a>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <Phone className="h-6 w-6 text-amber-300" />
            <div className="mt-3 text-sm text-zinc-300">Phone</div>
            <div className="mt-1 font-medium text-zinc-100">+62 • Available upon request</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <Building2 className="h-6 w-6 text-amber-300" />
            <div className="mt-3 text-sm text-zinc-300">Entity</div>
            <div className="mt-1 font-medium text-zinc-100">PT. Ravto Nusa Capital</div>
          </div>
        </div>

        <div className="mt-12 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} Ravto Capital — Where Forex Meets the Future.
        </div>
      </div>
    </section>
  )
}
