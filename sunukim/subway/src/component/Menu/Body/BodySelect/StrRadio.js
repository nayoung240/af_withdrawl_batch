import React from 'react';
import {connect, useSelector, useDispatch } from 'react-redux'
import {change} from 'actions/'

// 뭐 고르는지 !! 내려줘야함.

let StrRadio = (props) => {

    // const count = useSelector(selectCount)
    const dispatch = useDispatch()
    let selectMenu = 'sandwitch'
    switch(props.menuid){
        case "2":
            selectMenu = 'bread_length'
        default:
            selectMenu = 'sandwitch'
    }

    // 저장하는 함수

    const spreadArr = props.data.map((choice, index) => {
        return(
            <div key={index} className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id={choice.idx}/>
                <label className="form-check-label" for={choice.idx}>{choice.name}</label>
            </div>
        )
    });


    return(
        <div className="center_align">
            {spreadArr}
        </div>
    )
}



export default StrRadio;