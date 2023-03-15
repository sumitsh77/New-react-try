import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div id="navBar" className="bg-transparent mx-auto">
      {/* <div className="navbar max-w-6xl mx-auto items-center max-auto   text-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu text-black menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

            </ul>
          </div>
        </div>
        <div className="navbar-center ">
          <Link to='/' className="btn  btn-ghost normal-case  text-2xl font-bold">
            SRV
          </Link>
        </div>

      </div> */}
      <div className="navbar max-w-6xl mx-auto  items-center">
        <div className="flex-1">
          <Link to='/'>
            <h1 className="text-2xl font-serif text-white">SRV</h1>
          </Link>
        </div>


        <div className="dropdown text-white dropdown-bottom dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="dropdown-content bg-white text-black  menu p-2 shadow  rounded-box w-52">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/log-in'>Sign in</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
            <li><Link to='/class-5'>Class 5</Link></li>
            <li><Link to='/class-8'>Class 8</Link></li>
            <li><Link to='/class-10'>Class 10</Link></li>
            <li><Link to='/art'>Art</Link></li>
            <li><Link to='/commerce'>Commerce</Link></li>
            <li><Link to='/science'>Science</Link></li>
          </ul>
        </div>
      </div>
      {/* background video section */}
      <div id="hero-main" className="lg:mt-10 md:mt-40 mt-10 px-5">
        <div className="flex  flex-col mx-auto space-y-4 text-white items-center max-w-xl text-center">
          <h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 font-serif text-warning md:text-5xl  font-bold ">A Century of Excellence & Commitment to Quality Education</h1>
          <br />
          <p className="text-xl">"Join our time-tested institution for a modern education experience that blends tradition with innovation, preparing you for success in a changing world."</p>
          <div>
            <Link to='sign-up'>
              <button className="btn btn-md bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500 btn text-white font bold">Join Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

