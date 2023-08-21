import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime,faChartPie,faTruckFast,faUserClock,faHouseLaptop,faPhone } from '@fortawesome/free-solid-svg-icons';
import aboutimg from '../../Images/download.jpg';
const About = () => {
         // icon 
  const faBusinessTimeIcon= <FontAwesomeIcon icon={faBusinessTime } />
  const faChartPieIcon= <FontAwesomeIcon icon={faChartPie } />
  const faTruckFastIcon= <FontAwesomeIcon icon={faTruckFast} />
  const faUserClockIcon= <FontAwesomeIcon icon={faUserClock } />
  const faHouseLaptopIcon= <FontAwesomeIcon icon={faHouseLaptop } />
  const faPhoneIcon= <FontAwesomeIcon icon={faPhone } />
  return (
    <>
        <section id='about'>
            <div className='container'>
                <div className='title_heading'>
                    <h3>We Provide Remarkiable Shortage Ideas!</h3>
                    <p>
                        ut aut reisiendis voluptaibus maires alias consequatur aut peraeies doloribuses asperendis repellat.
                    </p>
                </div>
                <div className='about_box_wrapper'>
                    <div className='about_box'>
                        <div className='about_icon'>
                            {faBusinessTimeIcon}
                        </div>
                        <div className='content'>
                            <h5>Developement</h5>
                            <p>It was popularised in the 1960s with the release of Letraset sheets containing.</p>
                        </div>
                    </div>
                    <div className='about_box'>
                        <div className='about_icon green_icon'>
                            {faChartPieIcon}
                        </div>
                        <div className='content'>
                            <h5>Integretion</h5>
                            <p>It was popularised in the 1960s with the release of Letraset sheets containing.</p>
                        </div>
                    </div>
                    <div className='about_box'>
                        <div className='about_icon blue_icon'>
                            {faTruckFastIcon}
                        </div>
                        <div className='content'>
                            <h5>Branding</h5>
                            <p>It was popularised in the 1960s with the release of Letraset sheets containing.</p>
                        </div>
                    </div>
                </div>

                <div className='about_box_detail'>
                    <div className='about_col'>
                        <div className='about_img'>
                            <img src={aboutimg} alt='about'  height="300px" />
                        </div>
                        <div className='img_info_box'>
                            <h6 className='img_info_title'>Get A PRICE QUITE TODAY! </h6>
                            <p>Nim enm ipsum ouside quite today<br/>sid eappearice out today frugit.</p>
                            <a href="/">{faPhoneIcon}<span>03085342445</span></a>
                        </div>
                    </div>

                    <div className='about_col more_space'>
                        <h3>We have business skills that will increase  your earnings </h3>
                        <p>and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                        <div className='grid_info'>
                            <div className='icon'>{faUserClockIcon}</div>
                            <div className='detail'>
                            <h4>Start Your Own Business in Minutes</h4>
                                <p>took a galley of type and scrambled it to make a type specimen book.</p>
                               
                            </div>
                        </div>
                        <div className='grid_info'>
                            <div className='icon green_icon'>{faHouseLaptopIcon}</div>
                            <div className='detail'>
                            <h4>Start Your Own Business in Minutes</h4>
                                <p>took a galley of type and scrambled it to make a type specimen book.</p>
                               
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About
