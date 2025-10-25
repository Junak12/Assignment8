import React from 'react'
import page from '../../Assets/App-Error.png'
import { useNavigate } from 'react-router'

const AppError = () => {
    const navigate = useNavigate();
  return (
        <div className='mb-5 mt-5'>
            <div className='flex flex-col gap-10 items-center'>
                <img src={page} alt="" />
                <div className='flex flex-col items-center gap-6'>
                    <h2 className='text-[28px] font-bold text-center'>Opps, Page not Found!</h2>
                    <p className='text-[15px] font-extralight text-center'>The page you are looking for is not available.</p>
                    <button className='px-6 py-2 rounded-sm font-bold text-white hover:cursor-pointer bg-[#6f38e6]'
                    onClick={()=> navigate(-1)}
                    >Go Back</button>
                </div>
            </div>
        </div>
  )
}

export default AppError