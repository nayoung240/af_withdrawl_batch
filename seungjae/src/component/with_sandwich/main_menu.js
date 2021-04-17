import React ,{Component} from 'react';
import SANDWICHLIST from './SandwichList';
import { Switch } from 'react-router';

function main_menu() {

    return(
        <div className="container">
            <h1>샌드위치 만들기</h1>
            <SANDWICHLIST></SANDWICHLIST>
        </div>
    );
}

export default main_menu;