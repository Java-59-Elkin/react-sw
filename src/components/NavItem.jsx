// eslint-disable-next-line react/prop-types
const NavItem = ({itemTitle, changePage}) => {
    return (
        <li onClick={() => changePage(itemTitle)} className="nav-item btm-item btm btn-danger mx-1">{itemTitle}</li>
    );
};

export default NavItem;