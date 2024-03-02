import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Destinations from './components/Destinations'
import Search from './components/Search'
import Selects from './components/Selects'
import Carrousel from './components/Carrousel'
import Footer from './components/Footer'


function App() {
  

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Destinations/>
      <Search/>
      <Selects/>
      <Carrousel/>
      <Footer/>
    </div>
  )
}

export default App
