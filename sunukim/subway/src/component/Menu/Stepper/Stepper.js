import React from 'react';
import {connect, useSelector, useDispatch } from 'react-redux'
import {change} from 'actions/'

//redux 에서 state 받아서..?
const checkStep = () => {
  // 현재 단계는 present
  // 완료된 단계는 done
  // 미완 단계는 클래스 없음.
}

const Stepper = () => {
    // State 부르기
    let current_state = useSelector((state) => {
        return state.data
    })
    let current_step = current_state.current_step;
    let current_recipe = current_state.recipe;
    // 저장하는 함수
    const dispatch = useDispatch()

    // const eachStep = list.map((step, index) => {
    //     let stepState = ''
    //     if (step.index == current_step.id){
    //       stepState = 'present'
    //     }
    //     else if (step) {
    //       stepState = 'done'
    //     }
        
    //     let stepClass = `col ${stepState}`;
    //     return(
    //       <li className={stepClass} >샌드위치</li>
    //     )
    // });

    return(
        <div className="row">
            <div className="block stepper">
              <div className="wrapper-progressBar">
                <ul className="progressBar row">
                  
                </ul>
              </div>
            </div>
        </div>
    )
}

export default Stepper;