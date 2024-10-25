import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
    return(
        <Link to={`/`} className="header-link">
            <div className="header-container">
                <header className="header">
                    <div className="header-logo-container">
                        <img src="/images/mangia-logo.svg" alt="mangia-logo" className="header-logo"/> 
                    </div>
                     
                    

                </header>
            </div>  
        </Link>
    );
};

export default Header;