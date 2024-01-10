import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Feautred from '../components/Feautred'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='bg-light-blue'>
      <Hero />
      <About />
      <Feautred />
    </div>
  )
}
