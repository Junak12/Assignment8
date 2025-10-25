import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import downloads from '../../Assets/icon-downloads.png';
import rating from '../../Assets/icon-ratings.png'; 
import review from '../../Assets/icon-review.png';

const Install = () => {
  const { installedApps, setInstalledApps } = useOutletContext();
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'

  const handleUninstall = (appId) => {
    const updated = installedApps.filter(app => app.id !== appId);
    setInstalledApps(updated);
    localStorage.setItem('installedApps', JSON.stringify(updated));
  };

  // Sort apps based on size
  const sortedApps = [...installedApps].sort((a, b) => {
    if (sortOrder === 'asc') return a.size - b.size;
    else return b.size - a.size;
  });

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className='mt-10 mb-10'>
      <h2 className='text-[28px] font-bold text-center'>Your Installed Apps</h2>
      <p className='text-[16px] font-extralight text-center mb-10 mt-2'>
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className='flex items-center justify-between mb-10'>
        <p>{installedApps.length} App Found</p>
        <button onClick={toggleSortOrder} className='px-4 py-2 bg-gray-200 rounded'>
          Sort by size ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
        </button>
      </div>

      <div>
        {sortedApps.map(app => (
          <div key={app.id} className='flex items-center border border-gray-300 rounded-lg p-4 mb-6'>
            <div>
              <img src={app.image} className='w-[120px] h-[120px]' alt="" />
            </div>
            <div className='ml-6'>
              <h2 className='text-[22px] font-semibold'>{app.title}</h2>
              <div className='flex gap-4 mt-4'>
                <div className='flex gap-1 items-center'>
                  <img className='w-4 h-4' src={downloads} alt="" />
                  <span>{app.downloads}</span>
                </div>
                <div className='flex gap-1 items-center'>
                  <img className='w-4 h-4' src={rating} alt="" />
                  <span>{app.ratingAvg}</span>
                </div>
                <div className='flex gap-1 items-center'>
                  <img className='w-4 h-4' src={review} alt="" />
                  <span>{app.reviews}</span>
                </div>
              </div>
            </div>
            <button
              className='px-4 py-2 rounded-sm bg-[#00d390] text-white font-semibold hover:cursor-pointer ml-auto'
              onClick={() => handleUninstall(app.id)}
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Install;
