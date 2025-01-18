import {friends} from '../utils/constants.js';
import Friend from './Friend.jsx';


const DreamTeam = () => {
    return (
        <section className="float-end w-50 row border rounded-bottom-4 ms-2 me-0">
            <h2 className="col-12 text-center">Dream team</h2>
            {friends.map((friend, index) => <Friend picture={friend} key={index} pos={index + 1}/>)}
        </section>
    );
};

export default DreamTeam;