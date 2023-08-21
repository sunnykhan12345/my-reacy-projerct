import React, { useEffect, useState } from 'react'
import a from '../../Images/a.png'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-scroll';
// import { Link } from 'react-router-dom';
 function Navbar() {

// for mobile state
 const[sidenav, setSidenav] = useState(false)

//  for desktop state
const[sticky,setSticky] = useState(false);

//  mobilce icons
  const menuIcon = <FontAwesomeIcon icon={faBars} />
  
  // side nav 

  const sideshow = ()=>{
    setSidenav(true)
  }

//   sticku scroll
   useEffect(()=>{
       const handleScroll = ()=>{
         setSticky(window.scrollY > 20);
       }
       window.addEventListener('scroll',  handleScroll)
       return ()=> window.removeEventListener('scroll',  handleScroll)
   })

  return (
   <>
      <header id='side-header' className={`${sticky ? "sticky" : " "}`}>
    <div className='container'>
      <nav className='navbar'>
        <div className='navbar_brand'>
          <a href='/'>
            <img src={a} alt='logo' className='logo'/>
          </a>
          </div>
          <div className='menu-Toggler' onClick={sideshow}>
            {
              menuIcon
            }
          </div>

          <div className='menu_items'>
            {/* <ul>
              <li>
                <Link to='/'> 
                   Home
                </Link>
              </li>
              <li>
                <Link to='/about'> 
                   about
                </Link>
              </li>
              <li>
                <Link to='/services'> 
                  services
                </Link>
              </li>
              <li>
                <Link to='/blog'> 
                  blog
                </Link>
              </li>
              <li>
                <Link to='/contact us'> 
                   contact us
                </Link>
              </li>
            </ul> */}
            <ul>
              <li>
                 <Link activeClass="active" to="home" spy={true} smooth={true}>
                   Home
                 </Link>
              </li>
              <li>
                 <Link to="about" spy={true} smooth={true}>
                   About Us
                 </Link>
              </li>
              <li>
                 <Link to="services" spy={true} smooth={true}>
                   Services
                 </Link>
              </li>
              <li>
                 <Link  to="blog" spy={true} smooth={true}>
                   Blog
                 </Link>
              </li>
              <li>
                 <Link  to="contact" spy={true} smooth={true}>
                   Contact Us
                 </Link>
              </li>
            </ul>
          </div>

       
      </nav>
    </div>
    
   </header>
     
   </>
  )
}
export default Navbar;
