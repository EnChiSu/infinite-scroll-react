import './ImageCard.css';
import { useState } from 'react';

function ImageCard({ photo }) {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <div className="post">
            <img className="post__image" alt={photo.author} src={photo.download_url}/>
            <div className="post__author">
                <svg
                    className="post__icon"
                    viewBox="0 0 500 500" 
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => handleClick()}
                    style={{ fill: active ? "orange" : "#000000" }}
                >
                    <path fill-rule="evenodd" d="M2,228.5a19,19 0 01 19-19h91a19,19 0 01 19,19v201a19,19 0 01-19,19h-91a19,19 0 01-19-19zM41.5,389.5a20,20 0 01 40.5,0a20,20 0 01-40.5,0z" />
                    <path d="M151.5,229a19,19 0 01 19-19c15.5-4,35.5-30,83.5-90c24-24,19-62,34-91c8-15,17-20,32-17.5c60,0.5,78,73.5,47,132.5c-8,14-10,16-13,26.5l91,0.5c53,7,72,64,37.5,106c8.5,23,6.5,42-8.5,67c7,21,0,47-16.5,65c2.5,46-17.5,76-70.5,80h-51c-66-3-140-38-165.5-40a19,19 0 01-19-19z" />
                </svg>
                <span className="post__author__title">Author:</span>
                <span className="post__author__name">{ photo.author }</span>
            </div>
        </div>
    );
}

export default ImageCard;