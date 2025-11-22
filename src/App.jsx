import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='min-h-screen bg-black text-white'>
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Contact />
    </div>
  )
}

export default App
