import About from './About';
import Carousel5 from '../Components/Carousel5';
import GetInTouch from '../Components/GetInTouch';
import QuickRegister from '../Components/QuickRegister';
import FAQ from '../Components/FAQ';
import Marquee from '../Components/Marquee';
import Features from '../Components/Features';
import OurTeam from '../Components/OurTeam';

const Home = () => {
  return (
    <div >
      <Features />
      <About />
      <Marquee />
      <GetInTouch />
      <FAQ />
      <Carousel5 />
      <QuickRegister />
      <OurTeam />
    </div>
  );
}

export default Home;
