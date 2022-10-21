import React from "react";

const Navbar = () => {
    return (
        <nav>
            <a href="#" className="logo">Your logo</a>
            <input type="checkbox" id="menuBtn" name="" />
            <label htmlFor="menuBtn" className="barIcon">
                <i className="fa-solid fa-bars"></i>
            </label>
            <ul>
                <li>
                    <a href="#">Explore</a>
                </li>
                <li>
                    <a href="#">About Us</a>
                </li>
                <li>
                    <a href="#">Cities</a>
                </li>
                <li>
                    <a href="#">Call</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
