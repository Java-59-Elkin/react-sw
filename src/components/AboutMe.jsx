import {baseURL} from "../utils/constants.js";
import {useEffect, useState} from "react";

const aboutMe = () => {
    const [aboutHero, setAboutHero] = useState({});
    const about_hero = localStorage.getItem('about_hero')
    ? JSON.parse(localStorage.getItem('about_hero'))
    : null;
    const dataExpired = 30*24*3600*1000;

    const getAboutMe = async () => {
        const response = await fetch(`${baseURL}/v1/peoples/1`);
        const data = await response.json();
        const heroData = {
            name: data.name,
            gender: data.gender,
            image: data.image,
            height: data.height,
            timeStamp: Date.now()
        };
        setAboutHero(heroData);
        localStorage.setItem('about_hero', JSON.stringify(heroData));

    }

    useEffect(() => {
        if (about_hero && (Object.keys(about_hero).length > 0) && (Date.now() - about_hero.timeStamp < dataExpired)) {
            setAboutHero(about_hero);
        } else {
            getAboutMe();
        }
    }, []);

    return (
        <div className="farGalaxy">
            <img src={`${baseURL}/${aboutHero.image}`} alt="Luke"/>
            <p>Name: {aboutHero.name}</p>
            <p>Gender: {aboutHero.gender}</p>
            <p>Height: {aboutHero.height} sm</p>
        </div>
    );
};

export default aboutMe;
