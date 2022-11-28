import './Burger.css';
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Burger = ({ open, setOpen }) => {
    const mode = useSelector((state) => state.darkMode);
    const { isdarkMode } = mode;

    useEffect(() => {
        var elements = document.getElementsByClassName("animate__burger")
        if(open) {
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.background = "white";
            }
        } else {
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.background = isdarkMode ? "white" : "black";
            }
        }
        
    }, [isdarkMode]);

    return (
        <button 
            className='menu__btn'
            open={open} 
            onClick={() => setOpen(!open)}
        >
            <div 
                className='animate__burger'
                style={{ background: open && !isdarkMode ? 'white' : 'black', transform: open ? 'rotate(45deg)' : 'rotate(0)' }}
            />
            <div 
                className='animate__burger'
                style={{ background: open && !isdarkMode ? 'white' : 'black', transform: open ? 'translateX(20px)' : 'translateX(0)', opacity: open ? '0' : '1' }}
            />
            <div 
                className='animate__burger'
                style={{ background: open && !isdarkMode ? 'white' : 'black', transform: open ? 'rotate(-45deg)' : 'rotate(0)' }}
            />
        </button>
    )
}

export default Burger;