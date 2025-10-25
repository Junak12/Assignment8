import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import downloads from '../../Assets/icon-downloads.png';
import rating from '../../Assets/icon-ratings.png';

const App1 = () => {
  const navigate = useNavigate();
  const data = useLoaderData();

  const [searchTerm, setSearchTerm] = useState('');

  const filteredApps = data.filter(app =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='mt-10 mb-10'>
      <h2 className='text-[38px] font-bold text-center mb-4'>Our All Applications</h2>
      <p className='text-[14px] font-extralight text-center'>
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className='flex items-center justify-between mt-[60px]'>
        <p className='font-bold text-[28px]'>({filteredApps.length}) App Found</p>
        <input
          type="text"
          placeholder='Search App'
          className='border border-gray-300 rounded-xl p-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* card */}
      <div className='grid grid-cols-4 gap-6 mt-6'>
        {filteredApps.map(app => (
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
  );
};

export default App1;
