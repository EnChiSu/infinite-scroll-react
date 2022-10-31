import './App.css';
import useObserveScroll from './hooks/useObserveScroll';
import useFetchData from './hooks/useFetchData';
import Spinner from './components/Spinner';
import ImageCard from './components/ImageCard';
import BackTopBtn from './components/BackTopBtn';

function App() {
    const { loadRef, page } = useObserveScroll();
    const { loading, photos } = useFetchData(page);
    let index = 1;

    return (
        <div className="App">
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
