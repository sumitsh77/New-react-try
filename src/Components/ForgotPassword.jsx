import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
// Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const onChange = (e) => { setEmail(e.target.value) };
  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Please Check you Email")
    } catch (error) {
      toast.error("Wrong Input")
    }
    setEmail("")
  }
  return (
    <div className='py-20 mx-auto max-w-md'>
      <h1 className='text-center font-bold text-2xl'>Insert Email & Reset Your Password</h1>
      <br />
      <form onSubmit={onSubmit} className="flex flex-col mx-auto space-y-6">
        <input type="email" name="email" id="email" onChange={onChange} value={email} placeholder="Enter Email" className='input input-md border-black border-spacing-2' />
        <Link to='/log-in' className='text-blue-600 font-bold text-right'> Sign In</Link>
        <button className='btn btn-warning'>Reset</button>
        <ToastContainer />
      </form>
    </div>
  );
}

export default ForgotPassword;
