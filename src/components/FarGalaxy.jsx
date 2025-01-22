import {baseURL} from "../utils/constants.js";
import {episode} from "../utils/constants.js";

import {useEffect, useState} from "react";

const FarGalaxy = () => {
    const [openingCrowl, setOpeningCrowl] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const getFarGalaxy = async () => {
        try {
            const response = await fetch(`${baseURL}/v1/films/${episode}`)
            if (!response.ok) {
                throw new Error('Ooops. Try again later');
            }
            const data = await response.json();
            setOpeningCrowl({crowl: data.opening_crawl})
            setError(null);
        } catch (error) {
            setError(error.message);
            setOpeningCrowl('');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getFarGalaxy()
    }, [])

    return (
        <>
            {
                isLoading ?
                    <div style={{display: 'flex'}}>
                        <div className="spinner-border farGalaxy" role="status"></div>
                        <div className="farGalaxy">Loading</div>
                    </div> :
                    error ? (<p className="farGalaxy">{error}</p>) :
                        (<p className="farGalaxy">{openingCrowl.crowl}</p>)
            }
        </>
    );
}

export default FarGalaxy;