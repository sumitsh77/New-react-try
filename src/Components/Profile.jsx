import React from 'react';
import { useState } from 'react';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
const Profile = () => {
  const auth = getAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  })
  // Log out function
  const onLogout = () => {
    auth.signOut()
    navigate('/log-in')
  }
  const { name, email } = formData;
  return (
    <div className='py-20 max-w-xl mx-auto'>
      <h1 className='text-center font-bold text-4xl'>Profile</h1>
      <br />
      <div className="flex flex-row items-center  justify-between">
        <div className="flex flex-col space-y-6">
          <h1>Name:- {name}</h1>
          <h1>Email:- {email}</h1>
        </div>
        <div>
          <button onClick={onLogout} className='btn bg-green-500 font-bold text-white'>Log Out</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
