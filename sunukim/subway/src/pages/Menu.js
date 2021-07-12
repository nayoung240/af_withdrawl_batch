import React, { useEffect } from 'react';
import Header from '../component/Menu/Header/Header'
import Buttons from '../component/Menu/Body/Buttons'
import Body from '../component/Menu/Body/Body'
import Stepper from '../component/Menu/Stepper/Stepper'
import { sandwitch, bread_length, bread, cheese, more_added, sauces, toasting, vegetables } from '../data';
import {connect, useSelector, useDispatch } from 'react-redux'
import {change} from 'actions/'

const Menu = ({match}) => {
    // 현재 단계 받아온다.
    // State 부르기
    let current_state = useSelector((state) => {
        return state.data
    })
    let current_step = current_state.current_step;
    let current_recipe = current_state.recipe;
    // 저장하는 함수
    useEffect(() => {
        if (window.localStorage.data && !current_recipe) {
            current_recipe = JSON.parse(window.localStorage.data);
            window.localStorage.removeItem('data');
        }
        if (window.localStorage.step && !current_step){
            current_step = JSON.parse(window.localStorage.step)
            window.localStorage.removeItem('current_step');
        }
        return () => {
            window.localStorage.setItem('data', JSON.stringify(current_recipe));
            window.localStorage.setItem('step', JSON.stringify(current_step));
        };
    }, [current_step, current_recipe])

    const dispatch = useDispatch()
    const menuid = current_step.id;
    
    let data1 = sandwitch;
    let selectMenu = 'sandwitch'
    switch(menuid){
        case 1:
            selectMenu = 'sandwitch'
            data1 = sandwitch;
            break;
        case 2:
            selectMenu = 'bread_length'
            data1 = bread_length;
            break;
        case 3:
            selectMenu = 'bread'
            data1 = bread;
            break;
        case 4:
            selectMenu = 'toasting'
            data1 = toasting;
            break;
        case 5:
            selectMenu = 'cheese'
            data1 = cheese;
            break;
        case 6:
            selectMenu = 'vege'
            data1 = vegetables;
            break;
        case 7:
            selectMenu = 'sauce'
            data1 = sauces;
            break;
        case 8:
            selectMenu = 'more_added'
            data1 = more_added;
            break;
        default:
            selectMenu = 'sandwitch'
            data1 = sandwitch;
            break;
    }

    return(
        <>
            <Header title = {data1.title}/>
            <Stepper />
            <Body data = {data1}/>
            <Buttons/>
        </>
    )
}

export default Menu;