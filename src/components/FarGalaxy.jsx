import {useEffect, useState} from "react";
import {base_url} from "../utils/constants.js";
import main from "../assets/main.jpg";
import StyledText from "./StyledText.jsx";

const FarGalaxy = () => {
    const [openingCrawl, setOpeningCrawl] = useState('Loading...');

    useEffect(() => {
        const opening_crawl = sessionStorage.getItem('opening_crawl');
        if (opening_crawl) {
            setOpeningCrawl(opening_crawl);
        } else {
            const episode = Math.floor(1 + Math.random() * 6);
            fetch(`${base_url}/v1/films/${episode}`)
                .then(res => res.json())
                .then(data => {
                    setOpeningCrawl(data.opening_crawl);
                    sessionStorage.setItem('opening_crawl', data.opening_crawl);
                });
        }
        return () => console.log("FarGalaxy was unmounted");
    }, [])

    return <StyledText>{openingCrawl}</StyledText>;
}

export default FarGalaxy;