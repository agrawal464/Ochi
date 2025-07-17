import React from 'react'

const Navbar = () => {
  return (
    <div className=' fixed z-[999] w-full px-20 py-8 flex justify-between item-center'>
        <div className='logo text- '>Ochi</div>
        <div className='links flex gap-10'>
            {["Services","Our Works", "About Us","Insights","Contact"].map((item,index) => (
               <a key={index} className={`text-white text-lg capitalize text-regular font-light hover:text-blue-500  ${index === 4 && "ml-32"}`}>{item}</a>

            ))}
        </div>

    </div>
  )
}

export default Navbar