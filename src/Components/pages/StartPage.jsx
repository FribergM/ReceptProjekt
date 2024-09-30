import React from "react";

import NavBar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CardContainer from '../CardContainer/CardContainer';
import './StartPage.css';

function StartPage({recipes, categories}) {
    return  <div className="start-page">
        <Header />
        <NavBar categories={categories}/>
        <CardContainer recipes={recipes} categories={categories}/>
        <Footer />
    </div>
}

export default StartPage;