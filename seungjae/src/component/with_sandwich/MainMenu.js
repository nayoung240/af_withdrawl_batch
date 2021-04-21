import React ,{useState} from 'react';
import SANDWICHLIST from './SandwichList';
import SANDWICHLEN from './SandwichLen';

const MainMenu = () => {
    return(
        <div className="container">
            <h1>샌드위치 만들기</h1>
            <SANDWICHLIST></SANDWICHLIST>
            {/* <SANDWICHLEN></SANDWICHLEN> */}
        </div>
    );
}

export default MainMenu;