import React ,{Component} from 'react';
import SANDWICHLIST from './SandwichList';
import PageNation from './pagenation';

function main_menu() {

    return(
        <div className="container">
            <h1>샌드위치 만들기</h1>
            <SANDWICHLIST></SANDWICHLIST>
            <PageNation></PageNation>
        </div>
    );
}

export default main_menu;