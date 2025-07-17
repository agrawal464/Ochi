import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Feature from './components/Feature'

const App = () => {
  return (
    <div className=' text-white full min-h-screen bg-zinc-900'>
      <Navbar />
      <Landingpage />
      <Marquee />
      <About />
      <Eyes />
      <Feature />
    </div>
  )
}

export default App