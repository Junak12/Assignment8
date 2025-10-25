import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Playstore from '../../Assets/Playstore.png'
import Appstore from '../../Assets/Appstore.png'
import Hero from '../Home/Hero.jsx'


const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <h1 className='text-[48px] font-bold text-center mt-[40px]'>We Build <br /> <span className='text-[#8957eb]'>Productive</span> App </h1>
      <p className='text-center font-light mt-2 text-[16px]'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
      <div className='flex justify-center gap-8 mt-6 items-center'>
        <div className='flex justify-center gap-2 mt-6 text-center border-1 rounded-sm px-4 py-2 pt-2 hover:cursor-pointer'
             onClick={()=> window.open('https://play.google.com/store/games?hl=en')}
        >
          <img src= {Playstore} alt="" />
          <p>Google Play</p>
        </div>
        <div className='flex item-center gap-2 mt-6 text-center border-1 rounded-sm px-4 py-2 pt-2 hover:cursor-pointer'
            onClick={()=> window.open('https://play.google.com/store/games?hl=en')}
        >
          <img src={Appstore} alt="" />
          <p >App Store</p>
        </div>
      </div>
      <Hero data = {data}></Hero>
    </div>
  )
}

export default Home