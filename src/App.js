import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About';
import Seca from './components/Seca';
import Secb from './components/Secb';
import Secc from './components/Secc';
import Secd from './components/Secd';
import Sece from './components/Sece';
import Secf from './components/Secf';
import Home from './components/Home';
import News from './components/News';
import Contact from './components/Contact';
import Household from './components/Household';
import Vehicle from './components/Vehicle';
import Industrial from './components/Industrial';
import Team from './components/Team';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/about' element={<About/>}></Route>
          <Route exact path='/household' element={<Household/>}></Route>
          <Route exact path='/vehicle' element={<Vehicle/>}></Route>
          <Route exact path='/industrial' element={<Industrial/>}></Route>
          <Route exact path='/news' element={<News/>}></Route>
          <Route exact path='/contact' element={<Contact/>}></Route>
          <Route exact path='/footprint' element={<Seca/>}></Route>
          <Route exact path='/impacts' element={<Secb/>}></Route>
          <Route exact path='/gp' element={<Secc/>}></Route>
          <Route exact path='/ev' element={<Secd/>}></Route>
          <Route exact path='/ht' element={<Sece/>}></Route>
          <Route exact path='/initiatives' element={<Secf/>}></Route>
          <Route exact path='/team' element={<Team/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;