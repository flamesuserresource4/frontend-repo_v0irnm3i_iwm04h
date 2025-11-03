import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Strategy from './components/Strategy'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Top nav */}
      <header className="fixed left-0 right-0 top-0 z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="inline-flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-zinc-100 via-amber-300 to-zinc-400 shadow" />
          <span className="text-sm font-semibold tracking-widest text-zinc-100">
            RAVTO CAPITAL
          </span>
        </a>
        <nav className="hidden gap-6 text-sm text-zinc-300 md:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#strategy" className="hover:text-white">Strategy</a>
          <a href="#contact" className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-white/90 backdrop-blur hover:bg-white/10">Contact</a>
        </nav>
      </header>

      <main className="relative">
        <Hero />
        <About />
        <Strategy />
        <Contact />
      </main>
    </div>
  )
}

export default App
