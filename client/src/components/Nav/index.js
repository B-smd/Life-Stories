import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
            <nav className="displayed" >
                {/* <h1 className="text-center" style={{ color: "cyan"}}>Welcome</h1> */}
                <h6 className="text-center" style= {{color: "aliceblue", width: "80%", margin: "auto"}}>Sharing your life story to help another 
                people who are struggling to move on and have positive life. Every story 
                shared is a change to make someone feel less alone</h6>

                {/* <h4 id="navlinks">
                    <Link to="/">Welcome</Link>
                    <Link to="home">Home</Link>
                    <Link to="donate">Donate</Link>
                </h4> */}

            </nav>
    );
}