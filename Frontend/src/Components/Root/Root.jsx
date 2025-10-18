import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Header/Navbar'
import Footer from '../Footer/Footer'

const Root = () => {
  return (
    <div className='max-w-7xl mx-auto px-[80px]'>
        <Header></Header>
        <Outlet />
        <Footer></Footer>
    </div>
  )
}

export default Root