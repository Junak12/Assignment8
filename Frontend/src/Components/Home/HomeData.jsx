
import React from 'react'
import downloads from '../../Assets/icon-downloads.png';
import rating from '../../Assets/icon-ratings.png';
import { useNavigate } from 'react-router-dom';

const HomeData = ({data}) => {
  const range = data.slice(0, 8);
  const navigate = useNavigate();
     
  return (
    <div className='mt-8 mb-5'>
        <h1 className='text-[28px] font-bold text-center'>Trending Apps</h1>
        <p className='text-[16px] font-extralight text-center mt-2'>Explore All Trending Apps on the Market developed by us</p>
        <div>
        <div className='grid grid-cols-4 gap-6 mt-6'>
        {range.map(app => (
          <div
            key={app.id}
            className='border border-gray-300 rounded-lg p-4 mt-6 hover:shadow-2xl hover:cursor-pointer'
            onClick={() => navigate(`/details/${app.id}`)}
          >
            <img src={app.image} alt="" />
            <h3 className='text-[16px] font-semibold mt-2 mb-2'>{app.title}</h3>
            <div className='flex items-center justify-between'>
              <div className='flex gap-1 items-center'>
                <img className='w-4 h-4' src={downloads} alt="" />
                <span>{app.downloads}</span>
              </div>
              <div className='flex gap-1 items-center'>
                <img className='w-4 h-4' src={rating} alt="" />
                <span>{app.ratingAvg}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
        </div>
        <button className='bg-[#9d70ef] px-6 py-2 ml-[540px] mt-5 rounded-sm font-bold text-white hover:cursor-pointer' 
        onClick={()=> navigate('/app1')}
        >Show More</button>
    </div>
  )
}

export default HomeData