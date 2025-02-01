// eslint-disable-next-line react/prop-types
const StyledText = ({text}) => {
    return (
        <p className="text-[2em] tracking-[.2em] leading-[1.5] text-justify p-[.2em]">
            {text}
        </p>
    );
};

export default StyledText;