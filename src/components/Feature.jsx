import { motion } from 'framer-motion'
import React, { useState } from 'react'

const Feature = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className='w-full py-20'>
      {/* Title */}
      <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
        <h1 className='text-7xl font-serif tracking-tighter'>Featured Project</h1>
      </div>

      {/* Cards */}
      <div className='px-10'>
        <div className="cards flex gap-10 mt-10 p-2">

          {/* Card 1 - FYDE */}
          <div
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="cardcontainer relative w-1/2 h-[75vh] rounded-xl overflow-hidden"
          >
            <h1 className='absolute top-1/2 left-1/2 flex overflow-hidden -translate-x-1/2 -translate-y-1/2 z-10 text-black font-extrabold font-serif tracking-tighter text-7xl'>
              {"GOJO".split('').map((item, index) => (
                <motion.span
                  className="inline-block"
                  initial={{ y: "100%" }}
                  animate={hoveredIndex === 0 ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease: [0, 0.55, 0.45, 1], duration: 1.0, delay: index * 0.1 }}
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <img
              className='w-full h-full object-cover'
              src="/images/jujutsu-kaisen-2880x1800-9278.jpg"
              alt="card1"
            />
          </div>

          {/* Card 2 - VISE */}
          <div
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="cardcontainer relative w-1/2 h-[75vh] rounded-xl overflow-hidden"
          >
            <h1 className='absolute top-1/2 left-1/2 flex overflow-hidden -translate-x-1/2 -translate-y-1/2 z-10 text-black font-extrabold font-serif tracking-tighter text-7xl'>
              {"JUJUTSU".split('').map((item, index) => (
                <motion.span
                  className="inline-block"
                  initial={{ y: "100%" }}
                  animate={hoveredIndex === 1 ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease: [0, 0.55, 0.45, 1], duration: 1.0, delay: index * 0.1 }}
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <img
              className='w-full h-full object-cover'
              src="/images/jujutsu.jpg"
              alt="card2"
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Feature;
