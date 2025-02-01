import {starWarsInfo} from "../utils/constants.js";
// import StyledText from "./StyledText.jsx";

const StarWars = () => {
    // return <StyledText>{starWarsInfo}</StyledText>;
    return (
        <div className={'text-[2em] tracking-[.2em] leading-[1.5] text-justify p-[.2em]'}>
            {starWarsInfo}
        </div>
    );
};

export default StarWars;