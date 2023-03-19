import React from 'react';
import gif from '../images/new.gif';
import chart from '../images/chart.gif';
import banner from '../images/banner.png';
const Marquee = () => {
  return (
    <div className=''>
      <div id='banner' className=''>
        <img src={banner} className="mx-auto" alt="" />
      </div>
      <div className="flex  flex-col  items-center max-w-6xl  md:space-y-0 md:flex-row ">
        {/* gif */}
        <div className='md:w-1/2 mx-auto'>
          <img src={chart} alt="" />
        </div>
        <div className=" ">
          <div className=' mx-auto max-w-lg  border-2 border-black shadow-2xl '>
            <h1 className='text-center border-2 border-black bg-warning text-white font-bold p-4 font-mono'>Notification </h1>
            <marquee className="text-center text-lg font-mono space-y-6 py-10" scrollamount="3" direction="up">
              <div className='space-y-6 text-center'>
                <div className="flex text-center space-x-6 px-2 flex-row">
                  <img src={gif} alt="" />
                  <a href="sdf">Intro to programming</a>
                </div>
                <div className="flex text-center space-x-6 px-2 flex-row">
                  <img src={gif} alt="" />
                  <a href="sdf">Affiliation form of 2023</a>
                </div>
                <div className="flex text-center space-x-6 px-2 flex-row">

                  <a href="sdf">Free Scholorship program</a>
                </div>
                <div className="flex text-center space-x-6 px-2 flex-row">

                  <a href="sdf">Record of 2019-2023</a>
                </div>
                <div className="flex text-center space-x-6 px-2 flex-row">
                  <img src={gif} alt="" />
                  <a href="sdf">Practical Guide for 2023</a>
                </div>
                <div className="flex text-center space-x-6 px-2 flex-row">
                  <img src={gif} alt="" />
                  <a href="sdf">Form Correction</a>
                </div>
              </div>
            </marquee>
          </div>
        </div>
      </div >
    </div>
  );
}

export default Marquee;
