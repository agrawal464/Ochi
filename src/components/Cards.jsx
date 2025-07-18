import React from 'react'

const Cards = () => {
  return (
    <div  className='w-full h-screen bg-zinc-900 flex items-center gap-5 px-32'>
        <div  className='cardcontainer  h-[40vh] w-1/2 '>
            <div className='card relative rounded-xl w-full h-full bg-[#004D43] '>
                <img className=''  alt="" />
                <button className='absolute rounded-3xl hover:bottom-9 left-10 bottom-10 px-5 py-1 border-2 '>Hey</button>
            </div>
        </div>
        <div className='cardcontainer flex gap-5 h-[40vh] w-1/2 '>
            <div className='card relative w-1/2  rounded-xl h-full bg-[#5faea4] '>

                <button className='absolute rounded-3xl hover:bottom-9 left-10 bottom-10 px-5 py-1 border-2 '>Hii</button>
            </div>
            <div className='card w-1/2 relative rounded-xl h-full bg-[#1a2120] '>
                <button className='absolute rounded-3xl hover:bottom-9 left-10 bottom-10 px-5 py-1 border-2 '>Hello</button>
            </div>
        </div>
    </div>
  )
}

export default Cards