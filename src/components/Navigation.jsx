import NavItem from './NavItem.jsx';
import {navItems} from '../utils/constants.js';

// eslint-disable-next-line react/prop-types
const Navigation = ({changePage}) => {
    return (
        <nav>
            <ul className="nav position-fixed top mt-2 ms-5">
                {navItems.map(item => <NavItem changePage={changePage} itemTitle={item} key={item}/>)}
            </ul>
        </nav>
    );
};

export default Navigation;

