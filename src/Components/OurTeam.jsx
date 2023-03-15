import img1 from '../images/beard.jpg';
import img2 from '../images/orange.jpg';
import img3 from '../images/orange2.jpg';
import img4 from '../images/yellow.jpg';
const OurTeam = () => {
  return (
    <div className='py-20 px-2'>
      <div className="flex flex-col mx-auto max-w-6xl">
        <h1 className='text-center text-5xl font-serif'>Meet Our Team</h1>
        <br />
        {/* team cards */}
        <div className="flex space-x-4 md:space-x-6  flex-row mx-auto justify-between">
          {/* card - 1 */}
          <div className="felx flex-col text-center space-y-2 max-w-sm">
            <img src={img1} className="w-60 " alt="" />
            <h1 className='lg:text-xl font-bold'>Brad Traversy</h1>
            <p>P.G.T English</p>
          </div>
          {/* card - 2 */}
          <div className="felx flex-col text-center space-y-2 max-w-sm">
            <img src={img2} className="w-60 " alt="" />
            <h1 className='lg:text-xl font-bold'>Brad Traversy</h1>
            <p>P.G.T Chemestry</p>
          </div>
          {/* card - 3 */}
          <div className="felx flex-col text-center space-y-2 max-w-sm">
            <img src={img3} className="w-60 " alt="" />
            <h1 className='lg:text-xl font-bold'>Brad Traversy</h1>
            <p>P.G.T Biology</p>
          </div>
          {/* card - 4 */}
          <div className="felx flex-col text-center space-y-2 max-w-sm">
            <img src={img4} className="w-60 " alt="" />
            <h1 className='lg:text-xl font-bold'>Brad Traversy</h1>
            <p>P.G.T Physics</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
