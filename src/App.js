import './App.css';
import useObserveScroll from './hooks/useObserveScroll';
import useFetchData from './hooks/useFetchData';
import Spinner from './components/Spinner';
import ImageCard from './components/ImageCard';
import BackTopBtn from './components/BackTopBtn';
import Burger from './components/Burger';
import Menu from './components/Menu';
import { useState, useRef } from 'react';

function App() {
    const { loadRef, page } = useObserveScroll();
    const { loading, photos } = useFetchData(page);
    const [open, setOpen] = useState(false);
    const node = useRef();

    let index = 1;

    return (
        <div className="App">
            <div
                className='nav__bar' 
                ref={node}
            >
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div>
            <div className="image__container">
                {photos?.map((photo) => (
                    <ImageCard key={index++} photo={photo} />
                ))}
            </div>
            <BackTopBtn />
            <div ref={loadRef}>{loading && <Spinner />}</div>
        </div>
    );
}

export default App;
