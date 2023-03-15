import React from 'react';
import { Link } from 'react-router-dom';

const QuickRegister = () => {
  return (
    <div id='quickRegister' className='py-10'>
      <div className="text-center mx-auto lg:mt-10 max-w-6xl">
        <h1 className='text-lg lg:text-3xl  text-white font-bold'>Become the Part of Most Important and influential institute in Ratangarh</h1>
      </div>
      <br />
      <div className='mx-auto text-center'>
        <Link to="sign-up">
          <button className='btn btn-warning'>Register</button>
        </Link>
      </div>
    </div>
  );
}

export default QuickRegister;
