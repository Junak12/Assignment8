import React from 'react';
import logo from '../../Assets/logo.png';

const Footer = () => {
  return (
    <div className="bg-[#001931] text-white py-6 px-10">

      <div className="flex flex-col md:flex-row items-center justify-between border-b border-white pb-4">

        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <img className="w-8 h-8" src={logo} alt="Hero.io logo" />
          <p className="font-bold text-[18px]">HERO.IO</p>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="font-bold text-[18px] mb-2">Social Links</h1>
          <div className="flex flex-col gap-1 items-center text-sm">
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
            <p>LinkedIn</p>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-4 opacity-80">
        <p>© {new Date().getFullYear()} HERO.IO. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
