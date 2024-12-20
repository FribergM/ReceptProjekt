//Trello id:1
import React from "react";
import {useParams} from "react-router-dom";
import CardContainer from '../CardContainer/CardContainer';
import NavBar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function CategoryPage({recipes,categories}) {
    const {category} = useParams();
    const filteredRecipes = recipes.filter(recipe => recipe.categories.includes(category));

    return (
         <div className = "category-page, page">
            
            <NavBar categories={categories} recipes = {recipes} showHomeButton={true}/>
            <Header />
            <main>
                <div className="page__content-wrapper">
                    <div className="page__content-section">
                        <div className="section-header">
                            <h2>{category}</h2>
                        </div>
                        <CardContainer recipes={filteredRecipes}/>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>)
}

export default CategoryPage;