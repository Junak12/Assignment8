import React from 'react'

import hero from '../../Assets/hero.png'

const Hero = () => {
  return (
    <div >
       
        <div className='mt-10 py-5 flex item-center justify-center '>
             <img src={hero} alt="" />
        </div>
        <div className='bg-[#834aeb] relative -mt-[30px] py-[40px]'>
            <h1 className='text-[28px] font-bold text-white text-center'>Trusted by Millions, Built for You</h1>
            <div className='flex item-center justify-between px-[250px] mt-10'>
                <div className='flex flex-col  text-white'>
                    <p className='text-[14px] font-light '>Total Downloads</p>
                    <p className='text-[28px] font-bold'>29.6M</p>
                    <p className='text-[14px] font-light '>21% more than last month</p>
                </div>
                <div className='flex flex-col  text-white'>
                    <p className='text-[14px] font-light '>Total Reviews</p>
                    <p className='text-[28px] font-bold'>906K</p>
                    <p className='text-[14px] font-light '>46% more than last month</p>
                </div>
                <div className='flex flex-col  text-white'>
                    <p className='text-[14px] font-light '>Active Apps</p>
                    <p className='text-[28px] font-bold'>132+</p>
                    <p className='text-[14px] font-light '>31 more will Launch</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero;