// eslint-disable-next-line react/prop-types
const NavItem = ({itemTitle}) => {
    return (
        <li onClick={() => alert(itemTitle)} className="nav-item btm-item btm btn-danger mx-1">{itemTitle}</li>
    );
};

export default NavItem;