import {baseURL} from "../utils/constants.js";
import {useEffect, useState} from "react";

const aboutMe = () => {
    const [aboutHero, setAboutHero] = useState({});

    const getAboutMe = async () => {
        const response = await fetch(`${baseURL}/v1/peoples/1`);
        const data = await response.json();
        setAboutHero({
            name: data.name,
            gender: data.gender,
            image: data.image,
            height: data.height
        });
        sessionStorage.setItem('about_hero', aboutHero);
    }

    useEffect(() => {
        const about_hero = sessionStorage.getItem('about_hero');
        if (about_hero) {
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
