import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
    return(
        <Link to={`/`} className="header-link">
            <div className="header-container">
                <header className = "header">
                    {/* <img src = '../image/headimg.jpeg' alt ="picture" className = "header-image" /> */}
                    <h1 className = "header__name">Mangia</h1>
                </header>
            </div>  
        </Link>
    );
};

export default Header;