import React from "react";

import NavBar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CardContainer from '../CardContainer/CardContainer';

function StartPage({recipes, categories}) {
    return  <div>
        <Header />
        <NavBar />
        <CardContainer recipes={recipes} categories={categories}/>
        <Footer />
    </div>
}

export default StartPage;