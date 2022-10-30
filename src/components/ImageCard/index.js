import './ImageCard.css';

function index({ photo }) {
    return (
        <div className="post">
            <img className="post__image" alt={photo.author} src={photo.download_url}/>
            <div className="post__author">
                <span className="post__author__title">Author:</span>
                <span className="post__author__name">{ photo.author }</span>
            </div>
        </div>
    );
}

export default index;