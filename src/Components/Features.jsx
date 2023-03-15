import React from 'react';

const Features = () => {
  return (
    <div id='feature' className='py-20 text-green-500 px-6'>
      <div className="max-w-6xl mx-auto">
        <h1 className='text-5xl max-w-xl font-bold font-display'>Skills and experience that shape education</h1>
        <br />
        <p className='max-w-md text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sint nam, eum perferendis molestias, quae animi nihil quibusdam dicta, tempore nostrum vero. Repellendus, sapiente laborum.</p>
      </div>
      <br />
      <div className="flex flex-col max-w-6xl  items-center lg:flex-row mx-auto justify-between">
        {/* text */}
        <div className='lg:w-1/2'>
          <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quia, enim autem fugiat commodi eius maiores earum corporis dicta repudiandae aperiam vero. Quisquam, natus labore aliquid nobis optio placeat ducimus!</h1>
        </div>
        <div className="flex flex-col mx-auto lg:space-y-10 ">
          <div className="flex flex-col space-y-6 lg:space-y-0  lg:flex-row mx-auto lg:space-x-10">
            <div>
              <h1 className='text-5xl font-display'>5K</h1>
              <p className='text-xl'>Students Passed out</p>
            </div>
            <div>
              <h1 className='text-5xl font-display'>50 +</h1>
              <p className='text-xl'>Teaching Staff</p>
            </div>
          </div>
          <br />
          <div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:space-x-20 ">
            <div>
              <h1 className='text-5xl font-display'>100%</h1>
              <p className='text-xl'>Success Rate</p>
            </div>
            <div>
              <h1 className='text-5xl font-display'>1230</h1>
              <p className='text-xl'>Simple Heading</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
