import React from 'react';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Work from "./Work/Work";
import Contacts from "./Contacts/Contacts";
import {Footer} from "./Footer/Footer";


function Portfolio() {
    return (
        <>
            <Header/>
            <Main/>
            <Skills/>
            <Work />
            <Contacts />
            {/*Футер в случае необходимости*/}
            {/*<Footer />*/}
        </>
    );
}

export default Portfolio;
