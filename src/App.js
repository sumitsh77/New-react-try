import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from "./Pages/Home";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import PrivateRoute from "./Components/PrivateRoute";
import ForgotPassword from "./Components/ForgotPassword";
// class - 5-main
import Class5Main from "./Classes/Class-5/Class5Main";
import English from './Classes/Class-5/English';
import Hindi from './Classes/Class-5/Hindi';
import Math from './Classes/Class-5/Math';
import Science from './Classes/Class-5/Science';
import Sanskrit from './Classes/Class-5/Sanskrit';
import Sst from './Classes/Class-5/Sst';
// Class - 8 main
import Class8Main from "./Classes/Class-8/Class8Main";
import English8 from './Classes/Class-8/English';
import Hindi8 from './Classes/Class-8/Hindi';
import Math8 from './Classes/Class-8/Math';
import Science8 from './Classes/Class-8/Science';
import Sanskrit8 from './Classes/Class-8/Sanskrit';
import Sst8 from './Classes/Class-8/Sst';
// Class - 10 main
import Class10Main from "./Classes/Class-10/Class10Main";
import English10 from './Classes/Class-10/English';
import Hindi10 from './Classes/Class-10/Hindi';
import Math10 from './Classes/Class-10/Math';
import Science10 from './Classes/Class-10/Science';
import Sanskrit10 from './Classes/Class-10/Sanskrit';
import Sst10 from './Classes/Class-10/Sst';
// 12 - Commerce main
import CommerceMain from "./Classes/Commerce/CommerceMain";
import Account from './Classes/Commerce/Account';
import Business from './Classes/Commerce/Business';
import Computer from './Classes/Commerce/Computer';
import Eco from './Classes/Commerce/Eco';
import ComEnglish from './Classes/Commerce/English';
// 12 - Science main
import ScienceMain from "./Classes/Science/ScienceMain";
import Biology from './Classes/Science/Biology';
import Chemestry from './Classes/Science/Chemestry';
import ScienceMath from './Classes/Science/Math';
import Physics from './Classes/Science/Physics';
import ScienceEnglish from './Classes/Science/English';
// 12 - Art Main
import ArtMain from './Classes/Art/ArtMain';
import ArtEnglish from './Classes/Art/English';
import EnglishLiterature from './Classes/Art/EnglishLiterature';
import Geography from './Classes/Art/Geography';
import HindiLiterature from './Classes/Art/HindiLiterature';
import PoliticalScience from './Classes/Art/PoliticalScience';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/profile" element={<PrivateRoute />} >
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/log-in" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          {/* Class - 5 */}
          <Route path="/class-5" element={<Class5Main />} />
          <Route path="/class-5-english" element={<English />} />
          <Route path="/class-5-hindi" element={<Hindi />} />
          <Route path="/class-5-sst" element={<Sst />} />
          <Route path="/class-5-sanskrit" element={<Sanskrit />} />
          <Route path="/class-5-science" element={<Science />} />
          <Route path="/class-5-math" element={<Math />} />
          {/* Class - 8 */}
          <Route path="/class-8" element={<Class8Main />} />
          <Route path="/class-8-english" element={<English8 />} />
          <Route path="/class-8-hindi" element={<Hindi8 />} />
          <Route path="/class-8-sst" element={<Sst8 />} />
          <Route path="/class-8-sanskrit" element={<Sanskrit8 />} />
          <Route path="/class-8-science" element={<Science8 />} />
          <Route path="/class-8-math" element={<Math8 />} />
          {/* Class - 10 */}
          <Route path="/class-10" element={<Class10Main />} />
          <Route path="/class-10-english" element={<English10 />} />
          <Route path="/class-10-hindi" element={<Hindi10 />} />
          <Route path="/class-10-sst" element={<Sst10 />} />
          <Route path="/class-10-sanskrit" element={<Sanskrit10 />} />
          <Route path="/class-10-science" element={<Science10 />} />
          <Route path="/class-10-math" element={<Math10 />} />
          {/* 12 - Commerce  Main*/}
          <Route path="/commerce" element={<CommerceMain />} />
          <Route path="/account" element={<Account />} />
          <Route path="/economics" element={<Eco />} />
          <Route path="/computer-science" element={<Computer />} />
          <Route path="/business" element={<Business />} />
          <Route path="/comenglish" element={<ComEnglish />} />
          {/* 12 - Science Main */}
          <Route path="/science" element={<ScienceMain />} />
          <Route path="/biology" element={<Biology />} />
          <Route path="/chemestry" element={<Chemestry />} />
          <Route path="/physics" element={<Physics />} />
          <Route path="/science-english" element={<ScienceEnglish />} />
          <Route path="/science-math" element={<ScienceMath />} />
          {/* 12 - Art Main */}
          <Route path="/art" element={<ArtMain />} />
          <Route path="/english-literature" element={<EnglishLiterature />} />
          <Route path="/hindi-literature" element={<HindiLiterature />} />
          <Route path="/geography" element={<Geography />} />
          <Route path="/art-english" element={<ArtEnglish />} />
          <Route path="/political-science" element={<PoliticalScience />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
