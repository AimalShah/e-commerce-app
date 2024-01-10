import React from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import { Outlet } from 'react-router'
import Footer from './components/Footer'

export default function Layout() {
  return (
    <>
      <Header/>
      <Outlet />
      <Footer />
    </>
  )
}
