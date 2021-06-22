import React ,{useEffect, useState} from 'react';

const menu_list = [];
const LeftSelectMenu = (props) => {
    const [sandwich, setSandwich] = useState([]);
    useEffect(() => {
        setSandwich(sandwich);
    }, props.menu_list); 

    return(
        <div>
            <h1>선택 메뉴</h1>
            <ul>
                {/* {sandwich.map((data) => (
                    <li><h3>{data == '' ? '선택해 주세요' : data}</h3></li>
                ))} */}
            </ul>
        </div>
    );
}

export default LeftSelectMenu;