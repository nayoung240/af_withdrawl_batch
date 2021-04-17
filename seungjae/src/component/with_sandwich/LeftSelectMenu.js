import React ,{Component, useState} from 'react';


const LeftSelectMenu = (props) => {
    props = {...props}
    console.log(props.menu_list)
    return(
        <div>
            <h1>선택 메뉴</h1>
            {props.menu_list.map((data) => (
                <h3>{data == '' ? '선택해 주세요' : data}</h3>
            ))}
        </div>
    );
}

export default LeftSelectMenu;