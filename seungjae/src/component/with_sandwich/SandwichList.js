import React ,{useState} from 'react';
import LeftSelectMenu from './LeftSelectMenu';
import PageNation from '../action/pagenation';
import MainMenu from './MainMenu';
import SandwichLen from './SandwichLen';

const menu_list = [
    "bmt", "italy", "meet", "chicken", "beef"
];

const SandwichList = () => {
    
    const [sandwich, setSandwich] = useState("");
    const [checkList, setCheckList] = useState([false, false, false, false, false]);

    const handleChangeCheck = (index) => {
        let temp = checkList.map((value, idx) => (
            index === idx ? !value : false
        ));

        setCheckList(temp);
        setSandwich(menu_list[index]);
    }

    return(
        <div className="menu">
            <ul>
                {menu_list.map((value, idx) => (
                    <li key={idx}>
                        <input type="checkbox" checked={checkList[idx]} onChange={ () => handleChangeCheck(idx)} readOnly/>{value}
                    </li>
                ))}
            </ul>
            <LeftSelectMenu menu_list={sandwich} />
            <PageNation prev="/sandwich/main" next="/sandwich/len"/>
        </div>
    );
}

export default SandwichList;