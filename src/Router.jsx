import React from 'react'
import { RouterProvider , createBrowserRouter , createRoutesFromElements , Route} from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Layout from './Layout'
import Category from './pages/Category'
export default function Router() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Layout />}>
            <Route path='' element={<Home />} />
            <Route path='shop' element={<Shop />}>

            </Route>
            </Route>
            
        )
    )

    return <RouterProvider router={router} />
}
