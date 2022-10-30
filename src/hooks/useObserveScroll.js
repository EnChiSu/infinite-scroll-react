import { useState, useRef, useCallback, useEffect } from 'react';

function useObserveScroll() {
    const [page, setPage] = useState(1);
    const loadRef = useRef(null);

    const handleObserver = useCallback((entries) => {
        const [target] = entries;
        if (target.isIntersecting) {
            setPage((prev) => prev + 1);
        }
    }, []);

    useEffect(() => {
        const option = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0,
        };

        const observer = new IntersectionObserver(handleObserver, option);

        if (loadRef.current) observer.observe(loadRef.current);
    }, [handleObserver]);

    return { loadRef, page };
}

export default useObserveScroll;