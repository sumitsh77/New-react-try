import React from 'react';
import { Link } from 'react-router-dom';
import { FaMicroscope, FaChargingStation, FaCalculator, FaBook, FaFlask } from 'react-icons/fa';
const ScienceMain = () => {
  return (
    <div className='py-20 text-center bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-900 via-violet-200 to-orange-500'>
      <h1 className='text-center text-xl  lg:text-5xl font-mono    font-bold'>PLEASE SELECT YOUR SCIENCE SUBJECT </h1>
      <br />
      {/* subject section-1 */}
      <div className="flex flex-col lg:flex-row mx-auto space-y-6 px-6 lg:space-y-0 lg:space-x-6  max-w-6xl ">
        {/* card-1 */}
        <div className="flex flex-col mx-auto space-y-6 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 w-full lg:w-1/3 text-white p-10 ">
          <Link to='/science-math'>
            <FaCalculator className='text-4xl mx-auto font-bold' />
            <h1 className='font-bold text-2xl'>Math</h1>
          </Link>
        </div>
        {/* card-2 */}
        <div className="flex flex-col mx-auto space-y-6 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r w-full lg:w-1/3 text-white p-10 ">
          <Link to='/physics'>
            <FaChargingStation className='text-4xl mx-auto font-bold' />
            <h1 className='font-bold text-2xl'>Physics</h1>
          </Link>
        </div>
        {/* card-3 */}
        <div className="flex flex-col mx-auto space-y-6 bg-gradient-to-r from-violet-300 to-violet-400 text-white w-full p-10  lg:w-1/3 ">
          <Link to='/chemestry'>
            <FaFlask className='text-4xl mx-auto font-bold' />
            <h1 className='font-bold text-2xl'>Chemestry</h1>
          </Link>
        </div>
      </div>
      <br />
      {/* subject section-1 */}
      <div className="flex flex-col lg:flex-row mx-auto space-y-6 px-6 lg:space-y-0 lg:space-x-6  max-w-6xl ">
        {/* card-1 */}
        <div className="flex flex-col mx-auto space-y-6 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200 w-full lg:w-1/2 text-white p-10 ">
          <Link to='/biology'>
            <FaMicroscope className='text-4xl mx-auto font-bold' />
            <h1 className='font-bold text-2xl'>Biology</h1>
          </Link>
        </div>
        {/* card-2 */}
        <div className="flex flex-col mx-auto space-y-6 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r w-full lg:w-1/2 text-white p-10 ">
          <Link to='/science-english'>
            <FaBook className='text-4xl mx-auto font-bold' />
            <h1 className='font-bold text-2xl'>ENGLISH</h1>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default ScienceMain;
