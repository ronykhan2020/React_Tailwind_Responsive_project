import { useState } from 'react'
import './App.css'
import { Navbar } from './Component/Navbar'
import { Hero } from './Component/Hero'
import { Analytics } from './Component/Analytics'
import { Newsletter } from './Component/Newsletter'
import { Card } from './Component/Card'
import { Footer } from './Component/Footer'

function App() {
 

  return (
    <>
    <Navbar/>
    <Hero/>
    <Analytics/>
    <Newsletter/>
    <Card/>
    <Footer/>
    
    </>
  )
}

export default App
