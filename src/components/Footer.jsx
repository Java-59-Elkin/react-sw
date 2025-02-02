import StyledButton from "./StyledButton.jsx";

const Footer = () => {
    return (
        <footer className={'clear-both bg-grey-color h-20 rounded-b-2xl grid grid-cols-7 items-center'}>
            <div className={'col-start-3'}>
                <StyledButton mainContent={'Send me an '} addContent={'email'}/>
            </div>
        </footer>
    );
};

export default Footer;