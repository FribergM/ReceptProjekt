import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
    return(
        <Link to={`/`}>
            <div>
                <header className = "header">
                    {/* <img src = '../image/headimg.jpeg' alt ="picture" className = "header-image" /> */}
                    <h1 className = "header__name">Mangia</h1>
                </header>
            </div>  
        </Link>
    );
};

export default Header;