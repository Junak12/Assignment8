import React, { use } from 'react'
import logo from '../../assets/logo.png'
import github from '../../assets/github-mark.svg'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='max-w-7xl mx-auto flex justify-between items-center py-4 border-b-[1px] border-b-gray-300'>
        <div className='flex gap-2 items-center'>
            <img className='w-10 h-10' src={logo} alt="" />
            <p className='font-bold text-[28px] text-[#5957ee]'>Hero.IO</p>
        </div>

        <div className='flex gap-8 items-center text-[18px] font-medium'>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? 'text-[#5957ee] underline' : ''
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/app1" 
              className={({ isActive }) => 
                isActive ? 'text-[#5957ee] underline' : ''
              }
            >
              Apps
            </NavLink>
            <NavLink 
              to="/instal" 
              className={({ isActive }) => 
                isActive ? 'text-[#5957ee] underline' : ''
              }
            >
              Installation
            </NavLink>
        </div>

        <div className='flex items-center gap-2 bg-[#7941e9] px-5 py-2 rounded-sm text-white cursor-pointer'

            onClick={() => window.open('https://github.com/Junak12', '_blank')}
        >
            <img className='w-4 h-4' src={github} alt="" />
            <p className='font-bold text-[20px]'>Contribute</p>
        </div>
    </div>
  )
}

export default Navbar;
