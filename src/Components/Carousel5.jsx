import React from 'react';
import { Link } from 'react-router-dom';
import { FaMicroscope, FaOm, FaCalculator, FaBook, FaMap } from 'react-icons/fa'

const Carousel5 = () => {
  return (
    <div id='courseCard'>

      <div className='py-20 max-w-6xl mx-auto'>
        <h1 className='text-center text-5xl  text-white font-bold font-display '>Please Select Your Class </h1>
        <br />
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="flex flex-col lg:flex-row mx-auto space-y-6 lg:space-y-0 lg:space-x-10">
              {/*card-1  */}
              <Link to='/class-5'>
                <div className="flex space-y-6  text-white  flex-col   bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 p-10 max-w-md ">
                  <FaCalculator className='text-4xl mx-auto text-white' />
                  <h1 className='text-2xl font-bold'>Commerce</h1>
                </div>
              </Link>
              {/*card-2  */}
              <Link to='/class-5'>
                <div className="flex space-y-6 text-white flex-col bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r p-10 max-w-md ">
                  <FaMicroscope className='text-4xl mx-auto text-white' />
                  <h1 className='text-2xl font-bold'>SCIENCE</h1>
                </div>
              </Link>
              {/*card-3  */}
              <Link to='/class-5'>
                <div className="flex space-y-6 text-white flex-col bg-gradient-to-r from-violet-300 to-violet-400 p-10 max-w-md ">
                  <FaOm className='text-4xl mx-auto text-white' />
                  <h1 className='text-2xl font-bold'>Class 8</h1>
                </div>
              </Link>
              {/*card-4  */}
              <Link to='/class-5'>
                <div className="flex space-y-6 text-white flex-col bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200 p-10 max-w-md ">
                  <FaMap className='text-4xl mx-auto text-white' />
                  <h1 className='text-2xl font-bold'>12 Arts</h1>
                </div>
              </Link>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <div className="flex flex-col lg:flex-row mx-auto space-y-6 lg:space-y-0 lg:space-x-10">
              {/*card-1  */}
              <Link to='/class-5'>
                <div className="flex space-y-6  text-white  flex-col   bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 p-10 max-w-md ">
                  <FaBook className='text-4xl mx-auto text-white' />
                  <h1 className='text-2xl font-bold'>Class 10</h1>
                </div>
              </Link>
              {/*card-2  */}
              <Link to='/class-5'>
                <div className="flex space-y-6 text-white flex-col bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600  p-10 max-w-md ">
                  <FaBook className='text-4xl mx-auto text-white' />
                  <h1 className='text-2xl font-bold'>Class 8</h1>
                </div>
              </Link>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </div >
    </div>
  );
}

export default Carousel5;
