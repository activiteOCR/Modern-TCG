'use client'

import { motion } from 'framer-motion'

export default function TechSection() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.05)_0%,transparent_50%)]" />

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
            <span className="text-white">the Techno</span>
          </h2>
          <p className="text-base sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
            Tech enhances the experience, it&apos;s not required to play. We lead with gameplay and collectibility, not complexity.
          </p>
        </motion.div>

        {/* Innovation Layer Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/innovation_layer.png"
            alt="Innovation Layer"
            className="max-w-4xl w-full rounded-xl"
          />
        </motion.div>

        {/* Tech cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16">
          {[
            { title: 'NFC', description: 'Rare cards will use the NFC protocol with the same level of security as a bank card.' },
            { title: 'On-Chain Identity', description: 'Special cards will embed a crypto-engine capable of signing any EVM transaction.' },
            { title: 'AI Companions', description: 'Powered by the ElizaOS framework, each Beast becomes an AI agent and a true companion for the player.' },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group rounded-xl p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-emerald-500/50 transition-colors"
            >
              {/* Glow border effect */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-cyan-500/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity -z-10" />

              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                {item.title}
              </h3>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
