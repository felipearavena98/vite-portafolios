import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'


import './Layout.scss'


const Layout = () => {


    return (
        <>
            <div className='bg-color'>
                <Navbar />
                <div>
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Layout