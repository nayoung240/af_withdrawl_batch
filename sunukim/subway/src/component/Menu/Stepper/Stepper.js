import React from 'react';
import {connect, useSelector, useDispatch } from 'react-redux'
import {change} from 'actions/'

const Stepper = () => {
    // State 부르기
    let current_state = useSelector((state) => {
        return state.data
    })
    let current_step = current_state.current_step;
    let current_recipe = current_state.recipe;
    let step_info = current_state.step_info;
    // 저장하는 함수
    const dispatch = useDispatch()

    const eachStep = Object.entries(step_info).map(([key, value], index) => {
        let stepState = ''
        if (index+1 == current_step.id){
          stepState = 'present'
        }
        else if (current_recipe[value.recipe] != null) {
          stepState = 'done'
        }
        
        let stepClass = `col ${stepState}`;
        return(
          <li key={index} className={stepClass} >{value.name}</li>
        )
    });

    return(
        <div className="row">
            <div className="block stepper">
              <div className="wrapper-progressBar">
                <ul className="progressBar row">
                  {eachStep}
                </ul>
              </div>
            </div>
        </div>
    )
}

export default Stepper;