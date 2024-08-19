import React from "react"
import { Link } from "react-router-dom";

const Nav = ({dogs}) => {
    return(
        <nav className="Nav">
            {dogs.map(dog => (
                <Link key={dog} to={`/dogs/${dog}`}>
                    {dog}
                </Link>
        ))}
        </nav>
    )
}

export default Nav;