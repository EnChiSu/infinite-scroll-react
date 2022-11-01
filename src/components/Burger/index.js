import './Burger.css';

const Burger = ({ open, setOpen }) => {
    return (
        <button 
            className='menu__btn'
            open={open} 
            onClick={() => setOpen(!open)}
        >
            <div 
                className='animate__burger'
                style={{ background: open ? 'white' : 'black', transform: open ? 'rotate(45deg)' : 'rotate(0)' }}
            />
            <div 
                className='animate__burger'
                style={{ background: open ? 'white' : 'black', transform: open ? 'translateX(20px)' : 'translateX(0)', opacity: open ? '0' : '1' }}
            />
            <div 
                className='animate__burger'
                style={{ background: open ? 'white' : 'black', transform: open ? 'rotate(-45deg)' : 'rotate(0)' }}
            />
        </button>
    )
}

export default Burger;