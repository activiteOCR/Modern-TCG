'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const cards = [
  { id: 1, name: 'AeroBeast', front: '/images/AeroBeast_Card (1).png' },
  { id: 2, name: 'AquaBeast', front: '/images/AquaBeast_Card.png' },
  { id: 3, name: 'PyroBeast', front: '/images/Card_V2_02.png' },
  { id: 4, name: 'TerraBeast', front: '/images/TerraBeast_Card (1).png' },
  { id: 5, name: 'WildBeast', front: '/images/WildBeast_Card (1).png' },
]

const cardBack = '/images/Background_Card.png'

interface FlipCardProps {
  card: typeof cards[0]
  index: number
}

function FlipCard({ card, index }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="perspective-1000"
    >
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className="relative w-full aspect-[2/3] cursor-pointer group"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="relative w-full h-full"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Back of card */}
          <div
            className="absolute inset-0 rounded-xl overflow-hidden backface-hidden"
            style={{ backfaceVisibility: 'hidden' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cardBack}
              alt="Card Back"
              className="w-full h-full object-cover rounded-xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <span className="text-white/80 text-sm font-medium">Click to reveal</span>
            </div>
          </div>

          {/* Front of card */}
          <div
            className="absolute inset-0 rounded-xl overflow-hidden backface-hidden"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={card.front}
              alt={card.name}
              className="w-full h-full object-cover rounded-xl shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Glow effect */}
        <div className="absolute -inset-2 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
      </div>
    </motion.div>
  )
}

export default function CardGallery() {
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
            <span className="text-white">the Beasts</span>
          </h2>
          <p className="text-base sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
            Click on each card to reveal your Elemental Beast
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {cards.map((card, index) => (
            <FlipCard key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
