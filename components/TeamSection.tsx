'use client'

import { motion } from 'framer-motion'

const team = [
  {
    name: 'Cyril Cattaneo',
    role: 'Co-Founder & CEO',
    description: 'Managed millions in UA spend for e-commerce brands, apps & games',
    image: '/images/Cyril_C.png',
    linkedin: 'https://www.linkedin.com/in/cyril-neo/',
  },
  {
    name: 'Romain Barthomeuf',
    role: 'Co-Founder & CTO',
    description: 'Built Touch the Wall (20M+ downloads, #1 worldwide)',
    image: '/images/Romain_B.png',
    linkedin: 'https://www.linkedin.com/in/romain-barthomeuf-119b4058/',
  },
  {
    name: 'Arnaud Profizi',
    role: 'Co-Founder & CPO',
    description: 'Led Bumper.io (15M+ downloads, Voodoo hit)',
    image: '/images/Arnaud_P.png',
    linkedin: 'https://www.linkedin.com/in/arnaud-profizi-9ba73048/',
  },
  {
    name: 'Julien Terrier',
    role: 'Co-Founder & COO',
    description: '25 years at STM & SEALSQ building NFC and IoT tech',
    image: '/images/Julien_T.png',
    linkedin: 'https://www.linkedin.com/in/julien-terrier-4675ba114/',
  },
]

export default function TeamSection() {
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
            <span className="text-white">the Team</span>
          </h2>
        </motion.div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group rounded-xl p-5 sm:p-6 lg:p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-emerald-500/50 transition-colors text-center"
            >
              {/* Glow border effect */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-cyan-500/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity -z-10" />

              {/* Photo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-full mx-auto mb-4 sm:mb-6 object-cover border-2 border-white/10 group-hover:border-emerald-500/50 transition-colors"
              />

              {/* Name */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-base font-semibold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-4">
                {member.role}
              </p>

              {/* Description */}
              <p className="text-gray-400 text-base leading-relaxed mb-5">
                {member.description}
              </p>

              {/* LinkedIn */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors text-base"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
