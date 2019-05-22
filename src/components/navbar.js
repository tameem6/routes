import React from 'react';
import {Link} from 'react-router-dom';
const NavBar = () => {
    return (
        
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark order-3 w-100">
            <div className="container">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/users">Users</Link>
                </li>
            </ul>
            </div>
        </nav>
    )
}

export default NavBar