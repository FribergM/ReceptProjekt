import React from "react";
import { Link } from "react-router-dom"
import Category from "../Category/Category";
import Search from "../Search/Search";
import './navbar.css'

function NavBar({categories, showHomeButton}) {
    return <div className = "navbar" style ={{display :"flex",justifyContent:"space-between"}}>
             {/* <div className ="hamburger-menu" onClick={() => setShowCatgories(!showCategories)}>
                <i className ="fas fa-bars"></i>
             </div> */}
              <Category categories={categories}/>
              {/* {showHomeButton && (
                <div>
                    <Link to="/" className = "home-button">Home</Link>
                </div>
              )} */}
              <Search />         
    </div>
}

export default NavBar;