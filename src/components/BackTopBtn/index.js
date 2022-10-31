import React, {useState} from 'react';
import {IoMdArrowDropupCircle} from 'react-icons/fa';
import './BackTopBtn.css';

const BackTopBtn = () =>{
  
    const [visible, setVisible] = useState(false)
    
    const observeTop = () => {
        const distanceToTop = document.documentElement.scrollTop;
        if (distanceToTop > 200){
            setVisible(true)
        } else if (distanceToTop <= 200){
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
        <div className='top__btn'>
            <button
                onClick={scrollToTop} 
                style={{display: visible ? 'inline' : 'none'}} 
            ></button>
        </div>
    );
}
  
export default BackTopBtn;