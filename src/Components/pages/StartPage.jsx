import React from "react";

import NavBar from '../navigation/Navbar';
import Header from '../common/Header';
import Footer from '../common/Footer';
import CardContainer from "../CardContainer";

function StartPage() {
    return  <div>
        <Header />
        <NavBar />
        <CardContainer />
        <Footer />
    </div>
}

export default StartPage;