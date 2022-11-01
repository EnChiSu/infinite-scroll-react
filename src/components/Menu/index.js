import './Menu.css';

const Menu = ({ open }) => {
    return (
        <nav
            className='nav__container'
            open={open}
            style={{ transform: open ? 'translateX(0)' : 'translateX(-100%)' }}
        >
            <a className='nav__text'>
                <span role="img" aria-label="Trending" className='img__icon'>🔥</span>
                Trending
            </a>
            <a className='nav__text'>
                <span role="img" aria-label="Nature" className='img__icon'>🌱</span>
                Nature
            </a>
            <a className='nav__text'>
                <span role="img" aria-label="Food" className='img__icon'>🍜</span>
                Food
            </a>
            <a className='nav__text'>
                <span role="img" aria-label="Activity" className='img__icon'>🚴‍♀️</span>
                Activity
            </a>
        </nav>
    )
}

export default Menu;