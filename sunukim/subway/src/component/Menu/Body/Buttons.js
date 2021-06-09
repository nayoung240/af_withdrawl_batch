import React from 'react';
import {connect, useSelector, useDispatch } from 'react-redux'
import {change, next_step, before_step} from 'actions/'

// 여기서 step에 대한 정보 불러와서 현재 스텝의 정보가 있으면
// '다음' 활성화
// 아니면 비활성화
// Lnik 로 바꿔주기

const Buttons = () => {
    let current_state = useSelector((state) => {
        return state
    })
    let recipe = current_state.data.recipe;
    let step = current_state.data.current_step;
    const dispatch = useDispatch()

    // step 업데이트    
    const nextStep = (e) => {
        e.stopPropagation();
        dispatch(next_step({}))
    }

    const beforeStep = (e) => {
        e.stopPropagation();
        dispatch(before_step({}))
    }

    return(
        <div className="font_content center_align next_btn_div">
            {
                step.id <= 1
                ? ""
                : <button onClick={beforeStep} className="prev_btn btn"><h4>이전</h4></button>
            }
            {
                recipe[step.name] == null && step.id < 7
                ? <button className="next_btn btn"><h4>다음</h4></button>
                : <button onClick={nextStep} className="next_btn btn on"><h4>다음</h4></button>
            }
        </div>
    )
}

export default Buttons;