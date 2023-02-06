
import './App.css'
import About from './components/About';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Technology from './components/Technology';
import Contact from './components/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      {/* <ToastContainer theme='dark'/> */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
      {/* Same as */}
      <ToastContainer />
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
