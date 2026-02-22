'use client'

import { motion } from 'framer-motion'

const stages = [
  {
    number: '01',
    title: 'The Awakening',
    description: null,
    descriptionJSX: (
      <>
        <p>&quot;Your quest begins. <strong className="text-white">Choose your first guardian.</strong>&quot;</p>
        <br />
        <p>Place your <strong className="text-white">physical card</strong> on your phone screen, the character comes to life in the <strong className="text-white">mobile game</strong>. The card <strong className="text-white">IS the controller</strong>.</p>
      </>
    ),
    image: '/images/TCG_mobile.png',
  },
  {
    number: '02',
    title: 'The Wall',
    description: null,
    descriptionJSX: (
      <>
        <p>&quot;I&apos;m stuck. <strong className="text-white">My team isn&apos;t strong enough.</strong>&quot;</p>
        <br />
        <p>The boss, <strong className="text-white">The Stone Tyrant</strong>, is immune to Fire and Earth. One card changes everything: <strong className="text-white">Nymbia</strong>, a Water Guardian that reduces boss armor by <strong className="text-white">40%</strong>.</p>
        <br />
        <p>Not &quot;collect them all&quot;, <strong className="text-white">get the one you actually need, right now.</strong></p>
      </>
    ),
    image: '/images/AquaBeast_Card.png',
  },
  {
    number: '03',
    title: 'The Friend Factor',
    description: null,
    descriptionJSX: (
      <>
        <p>&quot;I can&apos;t beat this alone, <strong className="text-white">but together we can.</strong>&quot;</p>
        <br />
        <p>Some levels are designed to be <strong className="text-white">impossible solo</strong>. Not hard. Impossible.</p>
        <br />
        <p><strong className="text-white">Level 7</strong> requires simultaneous Water AND Lightning attacks in the same turn. Two players, two cards, one shared battle screen.</p>
        <br />
        <p>Player 1 controls the <strong className="text-white">Water Guardian</strong>. Player 2 controls the <strong className="text-white">Lightning Guardian</strong>. They coordinate attacks <strong className="text-white">in real time</strong>.</p>
      </>
    ),
    image: '/images/Illustration_AeroBeast.png',
  },
  {
    number: '04',
    title: 'The Unlock',
    description: null,
    descriptionJSX: (
      <>
        <p>&quot;Wait, <strong className="text-white">my character just evolved?</strong>&quot;</p>
        <br />
        <p>Place <strong className="text-white">Violinthe</strong> and <strong className="text-white">Basalith</strong> side by side on the screen. A Fusion Sequence triggers.</p>
        <br />
        <p>&quot;<strong className="text-white">LITHOR has awakened.</strong> A new power has been unlocked.&quot;</p>
        <br />
        <p>A hidden story chapter unlocks, accessible only to players who <strong className="text-white">physically own both cards</strong>.</p>
      </>
    ),
    image: '/images/WildBeast_Card (1).png',
  },
  {
    number: '05',
    title: 'The Expansion',
    description: null,
    descriptionJSX: (
      <>
        <p>&quot;My squad is ranked. <strong className="text-white">We&apos;re in this together.</strong>&quot;</p>
        <br />
        <p>Every 3 months, a new <strong className="text-white">Season</strong> launches. New boss. New story arc. New exclusive character only earnable through <strong className="text-white">seasonal play</strong>.</p>
        <br />
        <p>The seasonal boss, <strong className="text-white">The Void Serpent</strong>, requires at least 3 complementary elements. Players self-organize into <strong className="text-white">Guilds of 3 to 5</strong>, each bringing their specialty.</p>
        <br />
        <p>The seasonal exclusive <strong className="text-white">cannot be bought</strong>. It is only earned by a guild that defeats the Void Serpent <strong className="text-white">together</strong>.</p>
      </>
    ),
    image: '/images/1.png',
  },
  {
    number: '06',
    title: 'The Physical Moment',
    description: null,
    descriptionJSX: (
      <>
        <p>&quot;I just gave my friend a card and <strong className="text-white">it meant something.</strong>&quot;</p>
        <br />
        <p>A player owns <strong className="text-white">two copies of Nymbia</strong> and hands one to a stranger stuck on Level 4. The new player scans it.</p>
        <br />
        <p>&quot;<strong className="text-white">Nymbia has joined your team.</strong> The path to Level 4 is now open.&quot;</p>
        <br />
        <p>The giver loses nothing. The receiver gains everything. A <strong className="text-white">real-world friendship</strong> is forged. The new player will do this for someone else.</p>
      </>
    ),
    image: '/images/TCG_Shop.png',
  },
  {
    number: '07',
    title: 'The Living World',
    description: null,
    descriptionJSX: (
      <>
        <p>&quot;I bought a digital booster and <strong className="text-white">a whole new world opened up.</strong>&quot;</p>
        <br />
        <p>Inside the game, players can purchase <strong className="text-white">digital boosters</strong> to unlock exclusive lands, hidden territories and special game modes.</p>
        <br />
        <p>Open a booster and discover the <strong className="text-white">Volcanic Highlands</strong>, the <strong className="text-white">Abyssal Reef</strong> or the <strong className="text-white">Storm Citadel</strong>, each with unique battles and rewards.</p>
        <br />
        <p>The more you explore, <strong className="text-white">the deeper the world becomes</strong>.</p>
      </>
    ),
    image: '/images/Booster.png',
  },
]

export default function JourneySection() {
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
              The
            </span>{' '}
            <span className="text-white">Customer Journey</span>
          </h2>
          <p className="text-base sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
            Seven defining moments that turn a player into a legend.
          </p>
        </motion.div>

        {/* Stages */}
        <div className="flex flex-col">
          {stages.map((stage, index) => (
            <div key={stage.number}>
            <motion.div
              key={stage.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`relative group flex flex-col md:flex-row items-center gap-6 rounded-2xl p-6 sm:p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-emerald-500/50 transition-colors ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Glow effect */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-cyan-500/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity -z-10" />

              {/* Stage number */}
              <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  {stage.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
                  {stage.title}
                </h3>
                <div className="text-gray-400 text-xl sm:text-2xl leading-relaxed">
                  {stage.descriptionJSX ?? stage.description}
                </div>
              </div>

              {/* Image */}
              <div className="flex-shrink-0 w-full md:w-56 lg:w-72">
                {stage.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={stage.image}
                    alt={stage.title}
                    className="w-full rounded-xl object-contain max-h-64"
                  />
                ) : (
                  <div className="w-full aspect-video rounded-xl border border-white/10 border-dashed bg-white/5 flex flex-col items-center justify-center gap-2">
                    <svg className="w-10 h-10 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-white/20 text-sm">Image coming soon</span>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Connector between stages */}
            {index < stages.length - 1 && (
              <div className="flex flex-col items-center py-2">
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="w-px h-8 bg-gradient-to-b from-emerald-500/60 to-emerald-500/10 origin-top"
                />
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <svg className="w-6 h-6 text-emerald-500/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-px h-8 bg-gradient-to-b from-emerald-500/10 to-transparent origin-top"
                />
              </div>
            )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
