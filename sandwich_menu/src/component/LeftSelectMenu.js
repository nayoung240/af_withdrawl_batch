import React ,{Component, useState} from 'react';

const LeftSelectMenu = (props) => {
    const [menu] = useState();
    return(
        <div>
            <h1>선택 메뉴</h1>
            <h3>{props.menu == '' ? '선택해 주세요' : props.menu}</h3>
        </div>
    );
}

export default LeftSelectMenu;