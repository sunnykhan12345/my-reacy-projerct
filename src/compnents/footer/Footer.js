import React,{useState,useEffect} from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const faarrowIcon = <FontAwesomeIcon icon={faArrowUp } />

    // state
    const[IsVisable,setIsVisable] = useState(false);

    const scrollToTop =() => {
         window.scrollTo({
             top:0,
             behavior:"smooth"
         })
    }

    const listenToScroll = ()=>{
        let heighttohidden = 250;
        const windeScroll = document.body.scrollTop || document.documentElement.scrollTop;

        (windeScroll > heighttohidden )? setIsVisable(true) : setIsVisable(false)
    }

    useEffect(()=>{
         window.addEventListener('scroll',listenToScroll)
    })
  return (
    <>
     <section className='containers'>
        <div className='footer'>
          {faarrowIcon }
            <p>	&#169; All Rights Reserved 2023 Designed By <a href=''>Sana Ullah</a></p>
        </div>
     </section>
     {/* scrioll top top */}
    
    {
        IsVisable && (
            <div className='scroll_top' onClick={ scrollToTop}>
            {faarrowIcon }
    </div>
        )
    }

    </>
  )
}

export default Footer
