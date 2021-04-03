import React from 'react';
import Header from '../component/Menu/Header/Header'
import Footer from '../component/Menu/Footer/Buttons'
import Body from '../component/Menu/Body/Body'
import { sandwitch } from '../data';

const Menu = () => {
    return(
        <>
            <Header/>
            <Body data = {sandwitch}/>
            <Footer/>
        </>
    )
}

export default Menu;