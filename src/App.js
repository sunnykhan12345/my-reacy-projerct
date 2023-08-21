import React from 'react';
import Navbar from './compnents/Navbar/Navbar';
import Home from './compnents/Home/Home';
import About from './compnents/About/About';
import Service from './compnents/services/Service';
import Blog from './compnents/Blog/Blog';
import './App.css'
import Contact from './compnents/Contact/Contact';
import Footer from './compnents/footer/Footer';
const App = () => {
  return(
    <>
       <div className='App'>
         <Navbar/>
         <Home/> 
         {<About/>}
         {<Service/>}
         {<Blog/>}
          <Contact/>
          <Footer/>
       </div>
    </>
  )
}

export default App;