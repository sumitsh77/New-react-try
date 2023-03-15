import React from 'react';
import { Link } from "react-router-dom";
import logo from '../images/logo.png';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate()
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }
  // clear input fields
  const clearInput = () => {
    setFormData({
      email: "",
      password: "",
    })
  }
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  // log-in function 
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if (userCredential) {
        toast.success("Login Successful")
        navigate('/profile')
      }
    } catch (error) {
      toast.error("Please Insert Correct Credentials")
    }
    clearInput()
  }
  const { email, password } = formData;
  return (
    <div className='py-20 bg-gradient-to-r from-orange-300 to-rose-300'>
      <form onSubmit={handleSubmit} className='flex flex-col mx-auto space-y-4 max-w-lg p-10 bg-gradient-to-b from-gray-900 via-purple-900 text-center to-violet-600 text-white rounded-2xl shadow-2xl'>
        <img src={logo} className="w-40 bg-white rounded-full mx-auto" alt="" />
        <h1 className='font-bold text-center text-2xl'>WELCOME</h1>
        <p className='italic'>SIGNING BY ENTERING INFORMATION BELOW</p>
        <br />
        <input name='email' value={email} type="email" onChange={onChange} placeholder='Enter Email' id='email' className='input input-md text-black w-full' />
        <input type="password" value={password} name="password" onChange={onChange} placeholder='Enter Password' id='password' className='input input-md text-black w-full' />
        <Link to="/forgotPassword" className="text-right text-warning font-bold">Forgot Password</Link>
        <button className='btn btn-md bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r'>GET STARTED</button>
        <ToastContainer />
        <div>
          <p className='italic'>DON'T HAVE ACCOUNT</p>
          <Link to='/sign-up' className=" text-warning font-bold">SIGN-UP</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
