'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const ParticleField = dynamic(() => import('./ParticleField'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 to-black" />
})

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/Illustration_TerraBeast.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      <ParticleField />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="max-w-3xl">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 tracking-tight"
          >
            <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-cyan-500 bg-clip-text text-transparent">
              EB - TCG
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl mb-10 leading-relaxed font-light"
          >
            We are building a physical-first hybrid trading card game that connects tangible collectibles with a persistent digital ecosystem. Elemental Beasts serves as our demonstrator to showcase the platform&apos;s capabilities.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#demo" className="group relative px-6 py-3 sm:px-10 sm:py-5 bg-gradient-to-r from-green-600 to-emerald-500 rounded-full font-semibold text-base sm:text-xl text-white overflow-hidden transition-transform hover:scale-105 inline-block">
              <span className="relative z-10">Discover the Demo</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white/60 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}
