import React from "react";
import {useParams} from "react-router-dom";
import CardContainer from '../CardContainer/CardContainer';
import NavBar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function CategoriPage({recipes,categories}) {
    const {category} = useParams();
    
    const filteredRecipes = recipes.filter(recipe => recipe.categories.includes(category));
    //console.log("filted recipes:",filteredRecipes)
    //console.log("categories:", recipes.categories)

    return (
         <div className = "categori-page">
            <Header />
            <NavBar categories={categories} showHomeButton={true}/>
            <h1>{category} Menus</h1>
            <CardContainer recipes ={filteredRecipes} categories={[{name: category}]}/>
            <Footer />
        
        </div>)
}

export default CategoriPage;