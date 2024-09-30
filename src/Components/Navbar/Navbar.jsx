import React from "react";
import { Link } from "react-router-dom"
import Category from "../Category/Category";
import Search from "../Search/Search";
import './navbar.css'

function NavBar() {
    return <div className = "navbar" style ={{display :"flex",justifyContent:"space-between"}}>
             {/* <div className ="hamburger-menu" onClick={() => setShowCatgories(!showCategories)}>
                <i className ="fas fa-bars"></i>
             </div> */}
              <Category />
              <Search />         
    </div>
}

export default NavBar;