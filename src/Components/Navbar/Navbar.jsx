//Trello id:7
import React from "react";
import Category from "../Category/Category";
import Search from "../Search/Search";
import './navbar.css'

function NavBar({categories, recipes}) {
  
    return(
      <div className ="navbar nav-desk">
          <Category className = "navbar" categories={categories}/>
          <Search className ="navbar" recipes = {recipes} categories ={categories} />
        </div>
    )

}

export default NavBar;