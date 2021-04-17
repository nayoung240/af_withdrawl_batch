import React from 'react';
import Header from '../component/Menu/Header/Header'
import Buttons from '../component/Menu/Body/Buttons'
import Body from '../component/Menu/Body/Body'
import Stepper from '../component/Menu/Stepper/Stepper'
import { sandwitch, bread_length } from '../data';

const Menu = ({match}) => {
    const {menuid} = match.params;
    let data1 = sandwitch;
    switch(menuid){
        case "1":
            data1 = sandwitch;
            break;
        case "2":
            data1 = bread_length;
            break;
        case "3":
            data1 = 'bread'
            break;
        case "4":
            data1 = 'toasting'
            break;
        case "5":
            data1 = 'cheese'
            break;
        case "6":
            data1 = 'vege'
            break;
        case "7":
            data1 = 'sauce'
            break;
        case "8":
            data1 = 'more_added'
            break;
        default:
            break;
    }

    return(
        <>
            <Header title = {data1.title}/>
            <Stepper />
            <Body menuid = {menuid} data = {data1}/>
            <Buttons/>
        </>
    )
}

export default Menu;