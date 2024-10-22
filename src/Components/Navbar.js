import React from "react";
import { FaSearch, FaHeart, FaUser, FaBook } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    return (
        <header className="header">
            <div className="header_one">
                <a href="\#" className="logo"><FaBook />ReadHaven</a>
                <form className="search-form">
                     <input type="text" id="search-box" placeholder="search here ..."/>
                     <label htmlFor=""><FaSearch /> </label>
                </form>
                <div className="icons">
                    <div id="search-btn"><FaSearch /></div>
                    <a href="\#"><FaHeart /></a>
                    <a href="\#"><FaShoppingCart /></a>
                    <div id="login-btn" className="user-btn"><FaUser /></div>
                </div>
            </div>

            <div className="header_two">
                <div className="navbar">
                    <a href="\#">Home</a>
                    <a href="\#">Featured</a>
                    <a href="\#">Arrivals</a>
                    <a href="\#">Review</a>
                    <a href="\#">Blogs</a>
                </div>
            </div>

        </header>
    )
}

export default Navbar