import './Menu.css';
import ThemeBtn from '../ThemeBtn';

const Menu = ({ open }) => {
    return (
        <nav
            className='nav__container'
            open={open}
            style={{ transform: open ? 'translateX(0)' : 'translateX(-100%)' }}
        >
            <a className='nav__text'>
                <ThemeBtn />
            </a>
            <a className='nav__text'>
                <span role="img" aria-label="Trending" className='img__icon'>🔥</span>
                Trending
            </a>
            <a className='nav__text'>
                <span role="img" aria-label="Nature" className='img__icon'>📋</span>
                Order
            </a>
            <a className='nav__text'>
                <span role="img" aria-label="Food" className='img__icon'>🧸</span>
                Playground
            </a>
            <a className='nav__text'>
                <span role="img" aria-label="Activity" className='img__icon'>🚪</span>
                Sign Out
            </a>
        </nav>
    )
}

export default Menu;