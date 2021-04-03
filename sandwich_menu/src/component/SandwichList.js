import React ,{useState} from 'react';
import LeftSelectMenu from './LeftSelectMenu';

const menu_list = [
    "bmt", "italy", "meet", "chicken", "beef"
];

const SandwichList = () => {
    
    const [sandwich, setSandwich] = useState([]);
    const [checkList, setCheckList] = useState([false, false, false, false, false]);

    const handleClickCheck = (index) => {
        let temp = checkList.map((value, idx) => (
            index === idx ? !value : false
        ));
        setCheckList(temp);
        sandwich.pop();
        sandwich.push(menu_list[index]);
        setSandwich(sandwich);
    }

    return(
        <div className="menu">
            <ul>
                {menu_list.map((value, idx) => (
                    <li key={idx}>
                        <input type="checkbox" checked={checkList[idx]} onClick={ () => handleClickCheck(idx)}/>{value}
                    </li>
                ))}
            </ul>
            <LeftSelectMenu menu={sandwich}></LeftSelectMenu>
        </div>
    );
}

export default SandwichList;