import React from 'react'

const Feature = () => {
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
          <div className="cardcontainer relative w-1/2 h-[75vh] rounded-xl overflow-hidden">
            {/* Overlay Text */}
            <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-black tracking-tighter text-7xl'>
              {"FYDE".split('').map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>
            {/* Image */}
            <img
              className='w-full h-full object-cover'
              src="/images/jujutsu-kaisen-2880x1800-9278.jpg"
              alt="card1"
            />
          </div>

          {/* Card 2 - VISE */}
          <div className="cardcontainer relative w-1/2 h-[75vh] rounded-xl overflow-hidden">
            {/* Overlay Text */}
            <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-black tracking-tighter text-7xl'>
              {"VISE".split('').map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>
            {/* Image */}
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

export default Feature
