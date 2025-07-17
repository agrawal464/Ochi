import { motion } from 'framer-motion';
import React from 'react';

const Marquee = () => {
  return (
    <div className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-green-800 overflow-hidden'>
      <motion.div
        className='flex whitespace-nowrap border-y-2 border-zinc-300'
        animate={{ x: ['0%', '-100%'] }} transition={{ ease: 'linear', repeat: Infinity, duration: 10 }}
      >
        {/* Repeat text multiple times for smooth scroll */}
        <motion.h1 animate={{ x: ['0%', '-100%'] }} transition={{ ease: 'linear', repeat: Infinity, duration: 5 }}
          className='text-[20vw] leading-none font-semi uppercase px-10'>
          We Are Ochi
        </motion.h1>
        <motion.h1 animate={{ x: ['0%', '-100%'] }} transition={{ ease: 'linear', repeat: Infinity, duration: 5 }}
          className='text-[20vw] leading-none font-semi uppercase px-10'>
          We Are Ochi
        </motion.h1>
        <motion.h1 animate={{ x: ['0%', '-100%'] }} transition={{ ease: 'linear', repeat: Infinity, duration: 5 }}
              className='text-[20vw] leading-none font-semi uppercase px-10'>
          We Are Ochi
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default Marquee;
