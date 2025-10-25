import React from 'react';
import { useLoaderData, useOutletContext } from 'react-router-dom';
import downloads from '../../Assets/icon-downloads.png';
import rating from '../../Assets/icon-ratings.png'; 
import review from '../../Assets/icon-review.png';
import BarCharts from './BarCharts.jsx';

const Details = () => {
  const data = useLoaderData();
  const { installedApps, setInstalledApps } = useOutletContext();

  const isInstalled = installedApps.some(app => app.id === data.id);

  const handleInstall = () => {
    if (!isInstalled) {
      const updated = [...installedApps, data];
      setInstalledApps(updated);
    }
  };

  return (
    <>
      <div className='mt-10 mb-5 flex items-center gap-15'>
        <div>
          <img className='w-[280px] h-[240px] rounded-lg' src={data.image} alt="" />
        </div>
        <div className='flex-1'>
          <div className='border-b-1 mb-5'>
            <h2 className='text-[32px] font-bold mt-4 mb-2'>{data.title}</h2>
            <h2 className='font-extralight'>
              Developed By <span className='text-blue-600'>{data.companyName}</span>
            </h2>
          </div>
          <div className='flex items-center gap-10'>
            <div>
              <img src={downloads} alt="" />
              <p>Downloads</p>
              <p>{data.downloads}</p>
            </div>
            <div>
              <img src={rating} alt="" />
              <p>Average Rating</p>
              <p>{data.ratingAvg}</p>
            </div>
            <div>
              <img src={review} alt="" />
              <p>Total Reviews</p>
              <p>{data.reviews}</p>
            </div>
          </div>

          <button
            className={`mt-4 px-4 py-2 rounded-sm text-white font-medium ${
              isInstalled
                ? 'bg-gray-400 cursor-not-allowed opacity-70'
                : 'bg-[#00d390] hover:cursor-pointer'
            }`}
            onClick={handleInstall}
            disabled={isInstalled}
          >
            {isInstalled ? 'Installed' : `Install Now (${data.size}MB)`}
          </button>
        </div>
      </div>

      <BarCharts ratings={data.ratings} />
      <p className='mt-10 mb-10 text-[16px] font-light'>{data.description}</p>
    </>
  );
};

export default Details;
