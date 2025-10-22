import './App.css';
import { Route, Routes } from 'react-router-dom';
import Intro from './page/Intro';
import Home from './page/Home';
import About from './page/About';
import SideProject from './page/SideProject';
import Works from './page/Works';

function App() {
   return (
      <>
            <Routes>
               <Route path='/' element={<Intro />} />
               <Route path='/home' element={<Home />} />
               <Route path='/works' element={<Works />} />
               <Route path='/about' element={<About />} />
               <Route path='/sideproject' element={<SideProject />} />
            </Routes>
      </>
   );
}

export default App;
