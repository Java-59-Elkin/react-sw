import {starWarsInfo} from "../utils/constants.js";
import StyledText from "./StyledText.jsx";

const StarWars = () => {
    return <StyledText content={starWarsInfo} />;
};

export default StarWars;