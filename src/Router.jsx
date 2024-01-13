import React from 'react'
import { RouterProvider , createBrowserRouter , createRoutesFromElements , Route} from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Layout from './Layout'
import Cart from './pages/Cart'
import SingleProduct from './pages/SingleProduct'
import ShopPage from './pages/ShopPage'
import AboutPage from './pages/AboutPage'
export default function Router() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Layout />}>
            <Route path='' element={<Home />} />
            <Route path='shop/' element={<ShopPage />}>
            <Route path='' element={<Shop />}>
            </Route>
            <Route path='product/:id' element={<SingleProduct />} />
            </Route>
            <Route path='cart' element={<Cart />} />
            <Route path='about' element={<AboutPage />} />
            </Route>
        )
    )

    return <RouterProvider router={router} />
}
