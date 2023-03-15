import React from 'react';
import item1 from '../images/item-1.png';
import item2 from '../images/item-2.png';
import item3 from '../images/item-3.png';

const About = () => {
  return (
    <div className='py-20'>
      <div className="flex flex-col lg:flex-row mx-auto max-w-6xl justify-between items-center px-6 space-y-6 lg:space-x-10">
        {/* text section */}
        <div className="flex flex-col  mx-auto space-y-6">
          <h1 className='text-5xl font-display text-center'>About Us</h1>
          <p className='max-w-md font-mono'>Choose Us for your child's education - with over 100 years of excellence, experienced faculty members, and a nurturing environment, we're committed to providing the highest quality education. Our students thrive academically, socially, and emotionally with a wide range of programs and extracurricular activities. We're passionate about teaching and creating engaging learning environments for our students. Contact us to schedule a tour and become a part of our school community today.</p>
        </div>
        {/* carousel section */}
        <div className="flex lg:w-1/2 mx-auto flex-col ">
          <div className="carousel w-full">
            <div id="item1" className="carousel-item w-full">
              <img src={item1} alt="" />
            </div>
            <div id="item2" className="carousel-item w-full">
              <img src={item2} alt="" />

            </div>
            <div id="item3" className="carousel-item w-full">
              <img src={item3} alt="" />
            </div>
          </div>
          <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="btn btn-xs">1</a>
            <a href="#item2" className="btn btn-xs">2</a>
            <a href="#item3" className="btn btn-xs">3</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
