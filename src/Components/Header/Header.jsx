import React from "react";
import "./header.css";

function Header() {
    console.log('rendering header');
    return(
        <div>
           <header className = "header">
              {/* <img src = '../image/headimg.jpeg' alt ="picture" className = "header-image" /> */}
              <h1 className = "header__name">Italiska</h1>
           </header>
        </div>  
    );
};

export default Header;