import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom"
import Category from "../Category/Category";
import Search from "../Search/Search";
import './navbar.css'



function NavBar({categories, recipes}) {
    return(
      <div className ="navbar nav-desk">
          <Category className = "navbar" categories={categories}/>
          <Search class ="navbar" recipes = {recipes} categories ={categories} />
        </div>
    )

}

export default NavBar;