import {baseURL} from "../utils/constants.js";
import {useEffect, useState} from "react";

const aboutMe = () => {
    const [aboutHero, setAboutHero] = useState({});
    const about_hero = sessionStorage.getItem('about_hero')
    ? JSON.parse(sessionStorage.getItem('about_hero'))
    : null;

    const getAboutMe = async () => {
        const response = await fetch(`${baseURL}/v1/peoples/1`);
        const data = await response.json();
        setAboutHero({
            name: data.name,
            gender: data.gender,
            image: data.image,
            height: data.height
        });
        sessionStorage.setItem('about_hero', JSON.stringify({
            name: data.name,
            gender: data.gender,
            image: data.image,
            height: data.height
        }));
    }

    useEffect(() => {
        if (about_hero && Object.keys(about_hero) > 0) {
            setAboutHero({
                name: about_hero.name,
                gender: about_hero.gender,
                image: about_hero.image,
                height: about_hero.height
            });
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
