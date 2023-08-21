import React from 'react';
import './Service.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode,faChartBar,faCopy,faMarker,faUserGear,faCoins } from '@fortawesome/free-solid-svg-icons';

const Service = () => {
    const faLaptopCodeIcon = <FontAwesomeIcon icon={faLaptopCode  } /> 
    const faChartBarIcon = <FontAwesomeIcon icon={faChartBar  } /> 
    const faCopyIcon = <FontAwesomeIcon icon={faCopy  } /> 
    const faMarkerIcon = <FontAwesomeIcon icon={faMarker } /> 
    const faUserGearIcon = <FontAwesomeIcon icon={faUserGear  } /> 
    const faCoinsIcon = <FontAwesomeIcon icon={faCoins   } /> 
    
  return (
    <div id='services'>
        <div className='container '>
            <div className='title_heading'>
                <h3>What's Services We Offering to Our Customers</h3>
                <p>Lorem ipsum some text copy here to put on this paragraph we select defferent questions here .</p>
            </div>
            <div className='service_wrapper'>
                <div className='service_box'>
                    <div className='service_icon blue_icon '>{faLaptopCodeIcon}</div>
                    <h4 className='number'>01</h4>
                    <div className="service_content">
                        <h5>Cloud Computing</h5>
                        <p>Organizations of every type, size, and industry are using the cloud for a wide variety of use cases .</p>
                        <a href='/' className='Read'>Read More</a>
                    </div>
                </div>
                <div className='service_box'>
                    <div className='service_icon red_icon '>{faCopyIcon }</div>
                    <h4 className='number'>02</h4>
                    <div className="service_content">
                        <h5>Business Startagy</h5>
                        <p>Every business leader wants their organization to succeed. Turning a profit and satisfying good aim.</p>
                        <a href='/' className='Read'>Read More</a>
                    </div>
                </div>
                <div className='service_box'>
                    <div className='service_icon green_icon '>{faMarkerIcon}</div>
                    <h4 className='number'>03</h4>
                    <div className="service_content">
                        <h5>Report Analysis </h5>
                        <p>An analysis report is an essential business report displaying analysis results .</p>
                        <a href='/' className='Read'>Read More</a>
                    </div>
                </div>
                <div className='service_box'>
                    <div className='service_icon red_icon '>{faChartBarIcon}</div>
                    <h4 className='number'>04</h4>
                    <div className="service_content">
                        <h5>Desion Maker</h5>
                        <p>A decision maker is the person or group of individuals who is responsible for making..</p>
                        <a href='/' className='Read'>Read More</a>
                    </div>
                </div>
                <div className='service_box'>
                    <div className='service_icon green_icon '>{faUserGearIcon}</div>
                    <h4 className='number'>05</h4>
                    <div className="service_content">
                        <h5>Custemer Oriented</h5>
                        <p>Customer orientation is a business philosophy that puts the needs of the customer over .</p>
                        <a href='/' className='Read'>Read More</a>
                    </div>
                </div>
                <div className='service_box'>
                    <div className='service_icon blue_icon '>{faCoinsIcon}</div>
                    <h4 className='number'>06</h4>
                    <div className="service_content">
                        <h5>Solution Focused</h5>
                        <p>Solution-Focused practitioners develop solutions by first generating a detailed  .</p>
                        <a href='/' className='Read'>Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service
