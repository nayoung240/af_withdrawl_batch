import React from 'react';
import Header from '../component/Menu/Header/Header'
import Footer from '../component/Menu/Footer/Buttons'
import Body from '../component/Menu/Body/Body'
import Stepper from '../component/Menu/Stepper/Stepper'
import { sandwitch } from '../data';

const Menu = () => {
    return(
        <>
            <Header/>
            <Stepper />
            <Body data = {sandwitch}/>
            <Footer/>
        </>
    )
}

export default Menu;