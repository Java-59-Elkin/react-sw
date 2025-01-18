import NavItem from './NavItem.jsx';
import {navItems} from '../utils/constants.js';

const Navigation = () => {
    return (
        <nav>
            <ul className="nav position-fixed top mt-2 ms-5">
                {navItems.map(item => <NavItem itemTitle={item} key={item}/>)}
                {/*<li className={'Home'}>Home</li>*/}
                {/*<li className={'About me'}>About me</li>*/}
                {/*<li className={'Star wars'}>Star Wars</li>*/}
                {/*<li className={'Contact me'}>Contact</li>*/}
            </ul>
        </nav>
    );
};

export default Navigation;

