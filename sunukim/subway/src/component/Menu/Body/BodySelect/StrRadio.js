import React from 'react';
import {connect, useSelector, useDispatch } from 'react-redux'
import {change} from 'actions/'

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
        // console.log(e.target)
        const targetId = e.target.id;
        dispatch(change({item: current_step.name, id : targetId}));
    }

    // 저장하는 함수

    const spreadArr = props.data.map((choice, index) => {
        return(
            <div key={index} className="form-check">
                {
                    (function() {
                        if(current_step.id == choice.idx) {
                            return (<input onClick={StrClick} className="form-check-input" type="radio" name="flexRadioDefault" id={choice.idx} />);
                        }
                        else{
                            return (<input defaultChecked="checked" onClick={StrClick} className="form-check-input" type="radio" name="flexRadioDefault" id={choice.idx} />);
                        }
                      })()
                }
                
                <label className="form-check-label" htmlFor={choice.idx}>{choice.name}</label>
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