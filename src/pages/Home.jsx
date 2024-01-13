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
      <Feautred name="Featured Collection" />
      <div className='p-10 bg-whitesh'>
        <Feautred  name="Popular Collection"/>
      </div>
      <div className='text-center p-10'>
        <h1 className='text-6xl lg:text-8xl font-heading'>
          INSTAGRAM
        </h1>
        <p class="font-poppins mt-4 text-2xl ">#estore</p>
      </div>
    </div>
  )
}
