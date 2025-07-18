import React from 'react'

const Footer = () => {
  return (
    <div  data-scroll data-scroll-speed="-.3" className='w-full flex gap-20  h-screen bg-zinc-900 p-20'>
        <div className='w-1/2 h-full flex flex-col  justify-between font-sans '>
            <div className='heading '>
                <h1 className='text-[9vh] uppercase font-semi  -mb-7'>Eye</h1>
                <h1 className='text-[9vh] uppercase font-semi   '>Openning</h1>
            </div>
            <div className='font-serif'>OCHI</div>
        </div>
        <div className='w-1/2'>
            <h1 className='font-semibold text-[5vh] uppercase leading-none -mb-10'>Presentation</h1>
        </div>
    </div>
  )
}

export default Footer