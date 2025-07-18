import React, { useEffect, useState } from 'react'

const Eyes = () => {
  const [rotate, setrotate] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX
      let mouseY = e.clientY

      let deltaX = mouseX - window.innerWidth / 2
      let deltaY = mouseY - window.innerHeight / 2

      let angle = Math.atan2(deltaY, deltaX)
      let angleInDegrees = (angle * (180 / Math.PI)) - 180
      setrotate(angleInDegrees)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className='w-full h-screen overflow-hidden flex items-center justify-center relative bg-black'>

      <div data-scroll data-scroll-speed="-.8" className='relative w-[60vw] h-[60vh] rounded-2xl overflow-hidden shadow-xl'>
        <img
          src="/images/wp2552710.webp"
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className='absolute top-1/2 left-1/2 flex gap-20 transform -translate-x-1/2 -translate-y-1/2'>
          {/* Left Eye */}
          <div className='w-[10vw] h-[10vw] flex items-center justify-center rounded-full bg-zinc-100'>
            <div className='w-2/3 h-2/3 relative rounded-full bg-zinc-900'>
              <div
                style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}
                className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'
              >
                <div className='w-6 h-6 rounded-full bg-zinc-100'></div>
              </div>
            </div>
          </div>

          {/* Right Eye */}
          <div className='w-[10vw] h-[10vw] flex items-center justify-center rounded-full bg-zinc-100'>
            <div className='w-2/3 h-2/3 relative rounded-full bg-zinc-900'>
              <div
                style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}
                className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'
              >
                <div className='w-6 h-6 rounded-full bg-zinc-100'></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Eyes
