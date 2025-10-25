import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Header/Navbar'
import Footer from '../Footer/Footer'
import { useState, useEffect } from 'react';

const Root = () => {

  const [installedApps, setInstalledApps] = useState(() => {

    const stored = localStorage.getItem('installedApps');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('installedApps', JSON.stringify(installedApps));
  }, [installedApps]);

  return (
    <div className='max-w-7xl mx-auto px-[80px]'>
        <Header></Header>
        <Outlet context={{ installedApps, setInstalledApps }} />
        <Footer></Footer>
    </div>
  )
}

export default Root