import React, {useState} from 'react';
import './BackTopBtn.css';

const BackTopBtn = () =>{
    const showTopBtnThreshold = 200;  
    const [visible, setVisible] = useState(false)
    
    const observeTop = () => {
        const distanceToTop = document.documentElement.scrollTop;
        if (distanceToTop > showTopBtnThreshold){
            setVisible(true)
        } else if (distanceToTop <= showTopBtnThreshold){
            setVisible(false)
        }
    };
    
    const scrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    };
    
    window.addEventListener('scroll', observeTop);
    
    return (
        <div className='top__btn__container'>
            <button
                className='top__btn'
                onClick={scrollToTop} 
                style={{display: visible ? 'inline' : 'none'}} 
            ></button>
        </div>
    );
}
  
export default BackTopBtn;