import React from 'react';
import {connect, useSelector, useDispatch } from 'react-redux'
import {change} from 'actions/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import { check } from '@fortawesome/free-solid-svg-icons'

// 뭐 고르는지 !! 내려줘야함.

let StrRadio = (props) => {
    let initdata = useSelector((state) => {
        // console.log(state.data)
        return state.data
    })
    const dispatch = useDispatch()

    let current_step = initdata.current_step
    let recipe = initdata.recipe
    
    // 클릭 및 저장 함수
    const StrClick = (e) => {
        e.stopPropagation();
        
        let target = (e.target.classList.contains('form-check-input') || e.target.classList.contains('form-check-label')) ? e.target.parentNode : e.target;
        
        const FontAwesomeCheck = <FontAwesomeIcon icon={faCheck} />
        let bIsOn = target.classList.contains('on');
        if(bIsOn){
            target.classList.remove('on')
            dispatch(change({item: current_step.name, id : null}));
        }
        else{
            const targetId = target.getAttribute('data-id');
            let radioList = document.getElementsByClassName('str_radio');
            for(let i = 0 ; i < radioList.length; i++){
                radioList[i].classList.remove('on')
            }
            target.classList.add('on')
            dispatch(change({item: current_step.name, id : targetId}));
        }
    }

    // 저장하는 함수

    const spreadArr = props.data.map((choice, index) => {
        const FontAwesomeCheck = <FontAwesomeIcon icon={faCheck} /> 
        let inputHtml = <input className="form-check-input" type="radio" name="flexRadioDefault" />
        let strRadioClass = 'str_radio '
        if(recipe[current_step.name] == choice.idx){
             strRadioClass += 'on'
        }
        return(
            <div data-id={choice.idx} key={index} onClick={StrClick} className={strRadioClass}>
                {
                    recipe[current_step.name] == choice.idx
                    ? FontAwesomeCheck
                    : ""
                }
                {inputHtml}
                <label className="form-check-label">{choice.name}</label>
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