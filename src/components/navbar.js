import React from "react";
import {Link} from "react-router-dom";

function navbar() {
    return(
        <ul className="nav">
            <li className="nav-item">
                <Link to="/">Home</Link>
            </li>

            <li className="nav-item">
                <Link to="/about">About</Link>
            </li>

            <li className="nav-item">
                <Link to="/discover">Discover</Link>
            </li>

            <li className="nav-item">
                <Link to="/search">Search</Link>
            </li>
        </ul>

    )
}

export default navbar;