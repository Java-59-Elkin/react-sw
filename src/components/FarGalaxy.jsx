import {openingCrawl} from "../utils/constants.js";
import {id} from "../utils/constants.js";

console.log(id);

import {useEffect, useState} from "react";

const FarGalaxy = () => {
    const [openingCrowl, setOpeningCrowl] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const getFarGalaxy = async () => {
        try {
            const response = await fetch(`${openingCrawl}/${id}`)
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
                isLoading ? (<p className="farGalaxy">Downloading</p>) :
                    error ? (<p className="farGalaxy">{error}</p>) :
                        (<p className="farGalaxy">{openingCrowl.crowl}</p>)
            }
        </>
    );

}

export default FarGalaxy;