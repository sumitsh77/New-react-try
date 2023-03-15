import React from 'react';
import { useState } from 'react';
import logo from '../images/logo.png';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase.config';
import { Link } from 'react-router-dom';
// Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// MAIN SECTION
const Signup = () => {
  const notify = () => toast.success("Account Created Successfuly. Now you Login via Email & Password");
  const schools = ["", "SHRI RAGHUNATH SENIOR SEC SCHOOL", "KPS PUBLIC SCHOOL", "BALAJI CONVENT SCHOOL", "MARUTI SADBHAWANA SCHOOL", "LOYAL PUBLIC SCHOOL"]
  const classes = ['', "Class 5", "Class 8", "Class 10", "Art", "Science", "Commerce"]
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
    className: "",
    school: "",
  })
  const { name, number, email, password, className, school } = formData;
  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }
  // clear input field after submition
  const clearInput = (e) => {
    setFormData({
      name: "",
      number: "",
      email: "",
      password: "",
      className: "",
      school: "",
    })
  }
  // handle submit function in order to store the data in the fire store
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const auth = getAuth()
      const userCredentail = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredentail.user;
      updateProfile(auth.currentUser, {
        displayName: name,
      })
      const formDataCopy = { ...formData }
      delete formDataCopy.password
      formDataCopy.timestamp = serverTimestamp()
      await setDoc(doc(db, "users", user.uid), formDataCopy)
      notify()
    } catch (error) {
      toast.error("Please Insert Correct Credentials");
    }
    clearInput()
  }

  return (
    <div id='sign-up' className='py-20 items-center bg-gradient-to-l from-pink-500 via-red-500 to-yellow-500'>
      <div className="flex flex-col-reverse lg:flex-row max-w-6xl  justify-between mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col w-full space-y-6 bg-white text-center p-10 mx-auto">
          <div>
            <img src={logo} className="w-40 rounded-full mx-auto" alt="" />
          </div>
          {/* <h1 className='text-4xl font-bold'>SRV</h1> */}
          <p>Please Register Your Account</p>
          <br />
          <input type="text" id="name" name='name' value={name} placeholder='Enter Full Name' className='input input-md w-full border-black' onChange={handleChange} />
          <input type="email" name='email' id="email" value={email} placeholder='Email' className='input input-md w-full border-black' onChange={handleChange} />
          <input type="password" id="password" value={password} placeholder='Enter Password' className='input input-md w-full border-black' onChange={handleChange} />
          <label htmlFor="" className='font-bold text-left border-2 p-2'>SELECT SCHOOL :-
            <select name="school" onChange={handleChange} value={school} id="school">
              {schools.map((items) => (
                <option key={items} value={items}>{items}</option>
              ))}
            </select>
          </label>
          <label htmlFor="" className='font-bold text-left border-2 p-2'>SELECT SCHOOL :-
            <select name="school" onChange={handleChange} value={className} id="className">
              {classes.map((items) => (
                <option key={items} value={items}>{items}</option>
              ))}
            </select>
          </label>
          <input type="number" id="number" name='number' value={number} placeholder='Enter Number' className='input input-md w-full border-black' onChange={handleChange} />
          <p className='text-left'>Already have account <Link to='/log-in' className='text-warning font-bold'>Sign-in</Link> </p>
          <div>
            <button className='btn btn-lg btn-warning'>Submit</button>
            <ToastContainer />
          </div>
        </form>
        <div className='w-full p-10 text-left py-40 text-white  bg-gradient-to-r from-fuchsia-600 to-pink-600 '>
          <h1 className='font-bold text-2xl'>IT'S TAKE ONE MINUTE TO REGISTER</h1>
          <p>BE CAREFUL WHILE FILLING CREDENTIALS</p>
          <br />
          <p>IN THE CASE OF ANY FALSE INFORMATION AND UNBIASED NAME WE CAN TERMINATE YOUR ACCOUNT AND BANNED YOU FROM ACCESSING TO THE WEB APP. SO WISELY CHOOSE CREDENTIAL</p>
          <br />
          <ul className='text-left space-y-6 italic'>
            <li >CHOOSE YOUR CORRECT NAME</li>
            <li>YOU CAN'T CREATE MULTIPLE ACCOUNT VIA SINGLE GMAIL ACCOUNT</li>
            <li>BE CAREFUL WHILE INSERTING YOU CONTACT NUMBER </li>
            <li>DON'T FORGET TO CHOOSE YOU SCHOOL NAME</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Signup;
