import React from 'react'
import './Home.css'
import officeimg from '../../Images/pic-1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine,faShieldHalved,faChartArea } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const faChartIcon = <FontAwesomeIcon icon={faChartLine } />
  const faShieldIcon = <FontAwesomeIcon icon={faShieldHalved } />
  const faChartAreaIcon = <FontAwesomeIcon icon={faChartArea  } />
  return (
    <section  id='home'>
       <div className='banner_image'></div>
       <div className='container'>
          <div className='banner_outer'>
            <div className='col'>
            <h3 className='title'>
              WE PROMOTE YOUR <span>BUSINESS</span>
            </h3>
            <p>
              Nemo enim ipsum oluptat quia reouputs sit aspernature aut adit aut fugit,   sed quia consequuntur magni doloras consqui  ratiance.
           </p>
            <div className='btn_wrapper'>
              <a className='btn'>Get Started</a>
              
            </div>
            </div>

            <div className='col'>
              <div className='sub_banner_image'>
                <img src={officeimg} alt='banner_image'/>
              </div>
              <div className='banner_style-1'>
                { faChartIcon }
                <h4>Business Analysis</h4>
              </div>
              <div className='banner_style-1 banner_style-2'>
                { faShieldIcon }
                <h4>99.9% Success</h4>
              </div>
              <div className='banner_style-1 banner_style-3'>
                { faChartAreaIcon }
                <h4>Strategy</h4>
              </div>
  
             
  
              

            </div>
          </div>
       </div>
    </section>
  )
}

