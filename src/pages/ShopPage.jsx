import React from 'react'
import { Outlet } from 'react-router'
export default function ShopPage() {
  return (
    <div>
      {<Outlet />}
    </div>
  )
}
