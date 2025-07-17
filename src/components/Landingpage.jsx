import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
const Landingpage = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-2 '>
        <div className='textstructure mt-40 px-20 '>
            {["We Create", "Eye Opening","Presentation"].map((item,index) => (
                <div className='masker font-[font-serif]'>
                    <div className='w-fit flex items-center'>
                        {index === 1 && 
                            (<div className='w-[9vw] h-[5.6vw] m-2 relative rounded-md bg-red-500'></div>
                            )}
                        <h1 className='text-9xl leading-[7.5vw] tracking-tighter font-semi'>{item}</h1>
                    </div>
                </div>
            ))}
        </div>  
        <div className='border-t-[2px]  font-light font-[font-sans] border-zinc-800 mt-12 flex justify-between items-center py-5 px-20'>
            {["For Public And Private Campany", " From The Worst Page to IPO",].map((item,index) => (
                <p className='text-md font-light tracking-tight leading-none'>{item}</p>
        ))}
        <div className='start'>
            <button className='flex items-center gap-2 border-2 border-white text-white font-semibold py-2 px-4 rounded-full hover:bg-white hover:text-zinc-900 transition'>
                Get Started Project
            <span className='rotate-[45deg]'>
            <FaArrowUpLong />
          </span>
            </button>
        </div>
        </div>
    </div>
  )
}

export default Landingpage