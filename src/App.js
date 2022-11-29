import { SiContactlesspayment } from 'react-icons/si';
import './App.css'
import About from './components/About';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Technology from './components/Technology';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Project/>
      <Technology/>
      <Contact/>

    </div>
  );
}

export default App;
