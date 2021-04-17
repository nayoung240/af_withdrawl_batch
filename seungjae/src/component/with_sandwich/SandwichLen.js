import React ,{useState} from 'react';
import LeftSelectMenu from './LeftSelectMenu';
import PageNation from '../action/pagenation';

const sandwich_len = [
    "15cm", "30cm"
];

const SandwichLen = (props) => {
    
    const [sandwich, setSandwich] = useState([]);
    const [checkList, setCheckList] = useState([false, false]);

    const handleChangeCheck = (index) => {
        let temp = checkList.map((value, idx) => (
            index === idx ? !value : false
        ));

        sandwich.pop();
        sandwich.push(sandwich_len[index]);
        setCheckList(temp);
        setSandwich(sandwich);
    }

    return(
        <div className="menu">
            <ul>
                {sandwich_len.map((value, idx) => (
                    <li key={idx}>
                        <input type="checkbox" checked={checkList[idx]} onClick={ () => handleChangeCheck(idx)}/>{value}
                    </li>
                ))}
            </ul>
            <LeftSelectMenu menu_list={sandwich}></LeftSelectMenu>
            <PageNation prev="/sandwich/main" next="" />
        </div>
    );
}

export default SandwichLen;