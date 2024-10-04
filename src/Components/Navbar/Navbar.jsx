import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom"
import Category from "../Category/Category";
import Search from "../Search/Search";
import './navbar.css'



function NavBar({categories, recipes}) {
    // return (
    // <div className = "navbar">
    //          {/* <div className ="hamburger-menu" onClick={() => setShowCatgories(!showCategories)}>
    //             <i className ="fas fa-bars"></i>
    //          </div> */}
    //           <Category categories={categories}/>
    //           {/* {showHomeButton && (
    //             <div>
    //                 <Link to="/" className = "home-button">Home</Link>
    //             </div>
    //           )} */}
    //           <Search  allRecipes ={recipes}/>         
    // </div>)   



    return(
      <>
        <div className ="navbar nav-desk">
          <Category className = "navbar" categories={categories}/>
          <Search class ="navbar" allRecipes = {recipes} />
        </div>

        <div className ="mobile-navbar nav-mobile">
          <Category  className = "mobil-navbar" categories ={categories} />
          <Search className ="mobile-navbar"allRecipes ={recipes} />
        </div>
      </>
    )

}

export default NavBar;