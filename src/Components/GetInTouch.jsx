import touchImg from '../images/contact.png';

const GetInTouch = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row mx-auto justify-between py-20 max-w-6xl">
        {/* contact text section */}
        <div className="max-w-md px-6 lg:w-1/2">
          <h1 className='text-5xl font-bold'>Get in Touch</h1>
          <br />
          <p>If you have any kind of query regarding to the school please Call us or meet in the campus Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, recusandae.</p>
          <br />
          <div className='space-y-2'>
            <h1 className='text-xl font-bold'>Office</h1>
            <p>121 , Rock Street, 21 Avenue</p>
            <p>Near Railway Station Ratangarh</p>
          </div>
          <br />
          <div className='space-y-2'>
            <h1 className='text-xl font-bold'>Phone</h1>
            <p>Mon - Sat from 9 am to 6 pm</p>
            <p>9887661593</p>
          </div>
        </div>
        {/* image section */}
        <img src={touchImg} alt="" />
      </div>
    </div>
  );
}

export default GetInTouch;
