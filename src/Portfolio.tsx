import React from 'react';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Work from "./Work/Work";
import Contacts from "./Contacts/Contacts";


function Portfolio() {
    return (
        <>
            <Header/>
            <Main/>
            <Skills/>
            <Work />
            <Contacts />
        </>
    );
}

export default Portfolio;
