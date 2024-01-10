import React from 'react'
import { Link } from 'react-router-dom'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GitHubImage from '../assets/github.svg'

export default function Footer() {
  return (
    <div className='bg-zinc-900 text-whitesh'>
      <div className='md:flex-row md:items-baseline md:justify-between container mx-auto p-6 flex flex-col justify-between font-poppins '>
        <div className='py-10 text-6xl'>
          <div>
          <Link to='/'>
          Logo
          </Link>
          </div>
        </div>
        <div className='py-4'>
          <nav className='list-none text-xl text-zinc-400'>
            <li className='py-2'>
            <Link >
            Home
            </Link>
            </li >
            <li className='py-2'>
            <Link >
            Shop
            </Link>
            </li>
            <li className='py-2'>
            <Link >
            About
            </Link>
            </li >
          </nav>
        </div>
        <div className='text-zinc-400'>
          <h1 className='text-xl'>
            Subscribe to the newsletter
          </h1>
          <div className='w-fit border-b-2 mb-6 flex items-center justify between'>
          <input type="text" 
          className='w-58 focus:outline-0 bg-inherit py-2 text-md focus:bg-none'
          placeholder='Your Email' />
          <button>
          <FontAwesomeIcon icon={faArrowRight} />
          </button>
          </div>
        </div>
        <div>
        </div>
      </div>
      <div className='text-center p-4 flex items-center gap-2 justify-center'>
       Created by Aimal Shah <a href="https://www.github.com/aimalshah" target='_blank'><img src={GitHubImage} alt="" className='invert'/></a>
      </div>
    </div>
  )
}
