import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20 bg-yellow-400 rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='font-normal text-[4vw] leading-[4vw] tracking-tighter'>
        Ochi is a Strategic partner for fast and efficient tech solutions, offering a unique 
        blend of technology, design, and innovation. 
      </h1>

      {/* Divider Line */}
      <div className='w-full border-t-[2px] mt-20 pt-10 border-[#84897d]'></div>

      {/* Flex Container for Approach + Red Box */}
      <div className='w-full flex gap-10 mt-10'>
        {/* Left Side - Approach */}
        <div className='w-1/2'>
          <h2 className='font-semibold text-[3vw] leading-[3vw] tracking-tighter'>
            Our Approach
          </h2>
          <button className='flex gap-7 items-center px-10 py-6 mt-10 bg-zinc-900 rounded-full text-white'>
            Read More
            <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
          </button>
        </div>

        {/* Right Side - Red Box */}
          <div className='w-1/2 h-[70vh] rounded-2xl overflow-hidden bg-yellow-500'>
          <img
            src="/images/1144293.jpg"
            alt="Ochi project"
            className="w-full h-full object-cover"
          />

        </div>
      </div>
    </div>
  )
}

export default About  