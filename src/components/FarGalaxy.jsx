import {useEffect, useState} from "react";
import {baseURL} from "../utils/constants.js";

const FarGalaxy = () => {
    const [openingCrawl, setOpeningCrawl] = useState('Loading...');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const opening_crawl = sessionStorage.getItem('opening_crawl');

    const getFarGalaxy = async () => {
        const episode = Math.floor(Math.random() * 6 + 1).toString();
        try {
            const response = await fetch(`${baseURL}/v1/films/${episode}`)
            if (!response.ok) {
                throw new Error('Ooops. Try again later');
            }
            const data = await response.json();
            setOpeningCrawl(data.opening_crawl)
            sessionStorage.setItem('opening_crawl', data.opening_crawl);
            setError(null);
        } catch (error) {
            setError(error.message);
            setOpeningCrawl('');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (opening_crawl) {
            setOpeningCrawl(opening_crawl);
            setIsLoading(false);
        } else {
            getFarGalaxy();
        }
    }, []);

    return (
        <>
            {
                isLoading ?
                    <div style={{display: 'flex'}}>
                        <div className="spinner-border farGalaxy" role="status"></div>
                        <div className="farGalaxy">Loading</div>
                    </div> :
                    error ? (<p className="farGalaxy">{error}</p>) :
                        (<p className="farGalaxy">{openingCrawl}</p>)
            }
        </>
    );
}

export default FarGalaxy;