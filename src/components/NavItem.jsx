import StyledButton from "./StyledButton.jsx";

const NavItem = ({itemTitle, changePage}) => {
    return (
        <div onClick={() => changePage(itemTitle)}>
            <StyledButton mainContent={itemTitle}/>
        </div>
    );
};

export default NavItem;