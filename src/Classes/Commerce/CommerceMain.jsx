import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalculator, FaBook, FaChartLine, FaBriefcase, FaDev } from 'react-icons/fa';
const CommerceMain = () => {
  return (
    <div className='py-20 text-center bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-900 via-violet-200 to-orange-500'>
      <h1 className='text-center text-xl  lg:text-5xl font-mono    font-bold'>PLEASE SELECT YOUR COMMERCE SUBJECT </h1>
      <br />
      {/* subject section-1 */}
      <div className="flex flex-col lg:flex-row mx-auto space-y-6 px-6 lg:space-y-0 lg:space-x-6  max-w-6xl ">
        {/* card-1 */}
        <div className="flex flex-col mx-auto space-y-6 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 w-full lg:w-1/3 text-white p-10 ">
          <Link to='/account'>
            <FaCalculator className='text-4xl mx-auto font-bold' />
            <h1 className='font-bold text-2xl'>Accounts</h1>
          </Link>
        </div>
        {/* card-2 */}
        <div className="flex flex-col mx-auto space-y-6 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r w-full lg:w-1/3 text-white p-10 ">
          <Link to='/computer-science'>
            <FaDev className='text-4xl mx-auto font-bold' />
            <h1 className='font-bold text-2xl'>Computer SCIENCE</h1>
          </Link>
        </div>
        {/* card-3 */}
        <div className="flex flex-col mx-auto space-y-6 bg-gradient-to-r from-violet-300 to-violet-400 text-white w-full p-10  lg:w-1/3 ">
          <Link to='/business'>
            <FaBriefcase className='text-4xl mx-auto font-bold' />
            <h1 className='font-bold text-2xl'>Business Management</h1>
          </Link>
        </div>
      </div>
      <br />
      {/* subject section-1 */}
      <div className="flex flex-col lg:flex-row mx-auto space-y-6 px-6 lg:space-y-0 lg:space-x-6  max-w-6xl ">
        {/* card-1 */}
        <div className="flex flex-col mx-auto space-y-6 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200 w-full lg:w-1/2 text-white p-10 ">
          <Link to='/economics'>
            <FaChartLine className='text-4xl mx-auto font-bold' />
            <h1 className='font-bold text-2xl'>Economics</h1>
          </Link>
        </div>
        {/* card-2 */}
        <div className="flex flex-col mx-auto space-y-6 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r w-full lg:w-1/2 text-white p-10 ">
          <Link to='/comenglish'>
            <FaBook className='text-4xl mx-auto font-bold' />
            <h1 className='font-bold text-2xl'>ENGLISH</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CommerceMain;
