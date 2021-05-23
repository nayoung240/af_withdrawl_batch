import React from 'react';
import Header from '../component/Menu/Header/Header'
import Buttons from '../component/Menu/Body/Buttons'
import Body from '../component/Menu/Body/Body'
import Stepper from '../component/Menu/Stepper/Stepper'
import { sandwitch, bread_length, bread, cheese, more_added, sauces, toasting, vegetables } from '../data';

const Menu = ({match}) => {
    //
    const {menuid} = match.params;
    let data1 = sandwitch;
    const checkMenuId = (menuid) => {
        let selectMenu = 'sandwitch'
        switch(menuid){
            case "1":
                selectMenu = 'sandwitch'
                data1 = sandwitch;
                break;
            case "2":
                selectMenu = 'bread_length'
                data1 = bread_length;
                break;
            case "3":
                selectMenu = 'bread'
                data1 = bread;
                break;
            case "4":
                selectMenu = 'toasting'
                data1 = toasting;
                break;
            case "5":
                selectMenu = 'cheese'
                data1 = cheese;
                break;
            case "6":
                selectMenu = 'vege'
                data1 = vegetables;
                break;
            case "7":
                selectMenu = 'sauce'
                data1 = sauces;
                break;
            case "8":
                selectMenu = 'more_added'
                data1 = more_added;
                break;
            default:
                selectMenu = 'sandwitch'
                data1 = sandwitch;
                break;
        }
    
        return selectMenu
    }

    let menuInfo = {
        menuId : menuid,
        menuName : checkMenuId(menuid)
    }

    return(
        <>
            <Header title = {data1.title}/>
            <Stepper />
            <Body menuInfo = {menuInfo} data = {data1}/>
            <Buttons menuInfo = {menuInfo}/>
        </>
    )
}

export default Menu;