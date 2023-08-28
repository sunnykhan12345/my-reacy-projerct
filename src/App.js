import React,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Navbar from './compnents/Navbar/Navbar';
import './App.css'
import Home from './compnents/Home/Home';
import About from './compnents/About/About';
import Service from './compnents/services/Service';
import Blog from './compnents/Blog/Blog';
import Contact from './compnents/Contact/Contact';
import Footer from './compnents/footer/Footer';
const App = () => {

  useEffect(()=>{
      Aos.init();

  },[])
  return (
    <div >
        <Navbar/>
        <Home/>
        <About/>
        <Service/>
        <Blog/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App
