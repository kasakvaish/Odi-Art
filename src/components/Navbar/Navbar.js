import React from "react";
import { Link } from "react-router-dom";
import About from '../about/About';
import "./Navbar.css";

const Navbar = () => {
    return(
        <nav className="Navbar">
            <h3 className="logo">Logo</h3>
            <ul className="nav-links">
                <Link to="/" className="Home">
                    <li>Home</li>
                </Link>
                <Link to={About} className="About Us">
                    <li>About Us</li>
                </Link>
                <Link to="/Event & Exbhitions" className="Event & Exbhitions ">
                    <li>Event & Exbhitions</li>
                </Link>
                <Link to="/Gallery" className="Gallery">
                    <li>Gallery</li>
                </Link>
                <Link to="/Patrons" className="Patrons">
                    <li>Patrons</li>
                </Link>
                <Link to="/Training" className="Training">
                    <li>Traning</li>
                </Link>
                <Link to="/News & Media" className="News & Media">
                    <li>News & Media</li>
                </Link>
                <button type="button" class="btn btn-primary">Buy Now</button>
            </ul>
        </nav>
    );
};
export default Navbar;