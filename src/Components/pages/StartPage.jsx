import React from "react";
import NavBar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CategoryPreview from '../CategoryPreview/CategoryPreview';

function StartPage({recipes, categories}) {
    return(
        <div className="start-page, page">
            
            <NavBar recipes={recipes} categories={categories}/>
            <Header />
            <main>
                <CategoryPreview recipes={recipes} categories={categories}/>
            </main>
            <Footer />
        </div>
    )
}

export default StartPage;