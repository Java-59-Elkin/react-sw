import '../Contact.css'
import {useEffect, useState} from "react";
import {base_url, period_month} from "../utils/constants.js";

const Contact = () => {
    const [planets, setPlanets] = useState(['wait...']);

    async function fillPlanets(url) {
        const response = await fetch(url);
        const data = await response.json();
        const planets = data.map(item => item.name);
        setPlanets(planets);
        localStorage.setItem('planets', JSON.stringify({
            payload: planets,
            time: Date.now()
        }));
    }

    useEffect(() => {
        const planets = JSON.parse(localStorage.getItem('planets'));
        if (planets && ((Date.now() - planets.time) < period_month)) {
            setPlanets(planets.payload);
        } else {
            fillPlanets(`${base_url}/v1/planets`);
        }
    }, [])

    return (
        <form className="container bg-gray-100 p-6 rounded-lg shadow-md w-full text-red-color" onSubmit={(e) => e.preventDefault()}>
                <label className="mb-4 block">First Name
                    <input type="text" placeholder="Your name..." className="w-full p-2 border border-gray-300 rounded-md"/>
                </label>

                <label className="mb-4 block">Last Name
                    <input type="text" name="lastname" placeholder="Your last name..." className="w-full p-2 border border-gray-300 rounded-md" />
                </label>

                <label className="mb-4 block" style={{ color: "var(--color-red-color)" }}>Planet
                <select name="planet" className="w-full p-2 border border-gray-300 rounded-md">
                    {planets.map((item) => (
                        <option value={item} key={item}>{item}</option>
                    ))}
                </select>
                </label>

                <label className="block">Subject
                <textarea name="subject" placeholder="Write something..." className="w-full p-2 border border-gray-300 rounded-md h-32 resize-y focus:ring focus:ring-blue-300"
                ></textarea>
                </label>

            <button type="submit" className="text-white px-4 py-2 rounded-md transition duration-200 bg-[#04AA6D] hover:bg-[#45a049]">
                Submit
            </button>
        </form>
    );
};

export default Contact;


//     return (
//         <form className="container" onSubmit={e => {
//             e.preventDefault();
//         }}>
//             <label>First Name
//                 <input type="text" name="firstname" placeholder="Your name.."/>
//             </label>
//             <label>Last Name
//                 <input type="text" name="lastname" placeholder="Your last name.."/>
//             </label>
//             <label>Planet
//                 <select name="planet">
//                     {planets.map(item => <option value={item} key={item}>{item}</option>)}
//                 </select>
//             </label>
//
//             <label>Subject
//                 <textarea name="subject" placeholder="Write something.."></textarea>
//             </label>
//             <button type="submit">Submit</button>
//         </form>
//     )
// };
//
// export default Contact;