import React from 'react';
import {connect, useSelector, useDispatch } from 'react-redux'
import {change_step} from 'actions/'

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

    const moveStep = (e) => {
      e.stopPropagation();
      const stepId = e.target.getAttribute('data-step-id');
      const stepName = e.target.getAttribute('data-step-name');
      console.log(stepName)
      if (current_recipe[stepName] == null) {
        alert("이전 단계까지 완료 후 이동 가능합니다.")
        return 
      }
      if (current_recipe[current_step.name] == null){
        alert("현재 단계 완료 후 이동 가능합니다.")
        return
      }
      if (stepId != null){
        dispatch(change_step({id : stepId}))
      }
    }

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
          <li key={index} className={stepClass} >
            <a onClick={moveStep} className="ahover" data-step-name={value.recipe} data-step-id={key}>{value.name}</a>
          </li>
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