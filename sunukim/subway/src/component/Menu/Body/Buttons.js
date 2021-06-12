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

    const updateStep = (e) => {
        e.stopPropagation();
        let target = e.currentTarget
        if(recipe[step.name] != null){
            if (target.classList.contains('next_btn')){
                dispatch(next_step({}))
            }
            else if (target.classList.contains('prev_btn')){
                dispatch(before_step({}))
            }
            else if (target.classList.contains('complete_btn')){
    
            }
        }
        
    }

    const makeBtnObj = () => {
        const btnObject = {
            next : {
                classStr : 'next_btn btn ',
                btnStr : '다음'
            },
            prev : {
                classStr : 'prev_btn btn ',
                btnStr : '이전'
            },
            complete : {
                classStr : 'complete_btn btn ',
                btnStr : '완료'
            }
        }
        let btnSpread = {}
        let btnClass = ''
        let btnString = ''

        // 첫 단계인가? 다음 버튼만 있어야됨.
        if (step.id <= 1) {
            btnSpread.next = btnObject.next
        }
        else{
            // 첫 단계가 아닐 경우는 이전 버튼 무조건 존재
            btnSpread.prev = btnObject.prev

            // 완료 버튼 혹은 다음 버튼
            if (step.id == 8) {
                btnSpread.complete = btnObject.complete
            }
            else if (step.id < 8){
                btnSpread.next = btnObject.next
            }
        }

        // 마지막 단계라면 State를 검사하여 모든 데이터가 있는지 검사
        if (step.id == 8) {
            let nullCheck = false;
            for (const key in recipe){
                if (recipe[key] == null){
                    nullCheck = true;
                    break
                }
            }
            btnSpread.complete.classStr = (nullCheck) ? btnSpread.complete.classStr : btnSpread.complete.classStr + 'on'
        }
        else{
            btnSpread.next.classStr = (recipe[step.name] == null) ? btnSpread.next.classStr : btnSpread.next.classStr + 'on'
        }
        console.log(btnSpread)
       return btnSpread
    }

    const showButton = Object.entries(makeBtnObj()).map((valueArr, index) => {
        const value = valueArr[1]
        return (
            <button key={index} className={value.classStr} onClick={updateStep}><h4>{value.btnStr}</h4></button>
        )
    })

    return(
        <div className="font_content center_align next_btn_div">
            {showButton}
        </div>
    )
}

export default Buttons;