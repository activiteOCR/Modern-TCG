'use client'

import { motion } from 'framer-motion'

export default function DemoSection() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background Image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/Illustration_AquaBeast.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-cyan-500 bg-clip-text text-transparent">
              Discover
            </span>{' '}
            <span className="text-white">the Demo</span>
          </h2>
          <p className="text-base sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
            Watch our product demo in action
          </p>
        </motion.div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative group rounded-xl overflow-hidden w-full max-w-[400px]">
            <div className="absolute -inset-[1px] bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-cyan-500/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            <div className="relative w-full" style={{ paddingBottom: '178%' }}>
              <iframe
                src="https://www.youtube.com/embed/EO4DftdwFIc"
                title="Modern-TCG Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
