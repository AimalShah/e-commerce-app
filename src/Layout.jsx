import React from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import { Outlet } from 'react-router'
import Footer from './components/Footer'
import { CartProvider } from './context/CartContext'


export default function Layout() {
  return (
    <>
 <CartProvider>
 
      <Header/>
      <Outlet />
      <Footer />
 </CartProvider>
    </>
  )
}
