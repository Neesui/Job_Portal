import React from 'react'
import Homepage from '../userComponent/Homepage'
import { Outlet } from 'react-router-dom';
import Navbar from '../userComponent/Navbar';


const Layout = () => {
    return (
        <>
            <Navbar />
            <Homepage />
            <Outlet />
        </>
    )
}

export default Layout
