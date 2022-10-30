import { useState, useEffect, useCallback } from 'react';
import axios from "axios"

function useFetchData(page) {
    const [loading, setLoading] = useState(false);
    const [photos, setPhotos] = useState([]);

    const getPhotos = useCallback(async () => {
        try {
            setLoading(true);
            const imageData = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=2`)
                .then(function (res) {
                    return res.data
                })
                .then((imageData) => {
                    return imageData;
                })
                .catch((err) => {
                    console.log(err);
                });
            setPhotos((prev) => [...prev, ...imageData]);
            setLoading(false);
        } catch (err) {
            console.error(err);
        }
    }, [page]);

    useEffect(() => {
        if(page>=2){
            getPhotos();
        }
    }, [getPhotos]);

    return { loading, photos };
}

export default useFetchData;