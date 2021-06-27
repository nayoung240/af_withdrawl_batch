import React from 'react';
import {connect, useSelector, useDispatch } from 'react-redux'
import {change} from 'actions/'

// 뭐 고르는지 !! 내려줘야함.

let ImgCheckBox = (props) => {


    let removeEle = (ele, arr) => {
        const index = arr.indexOf(ele);
        if (index > -1) {
            arr.splice(index, 1);
        }
        if (arr.length < 1) {
            return null
        }
        return arr;
    }

    let initdata = useSelector((state) => {
        // console.log(state.data)
        return state.data
    })
    const dispatch = useDispatch()

    let current_step = initdata.current_step
    let recipe = initdata.recipe
    
    let current_choices = (recipe[current_step.name] != null) ? recipe[current_step.name] : []
    console.log("choices : ", current_choices)
    // 저장하는 함수

    // 제외 카드 정보
    const excludeCardObj = {
        7 : "소스 선택 안함",
        8 : "선택 안함"
    }

    // 카드 클릭 함수
    const cardClick = (e) => {
        e.stopPropagation();
        // console.log(e.target.parentNode);
        let target = (e.target.classList.contains('card-text')) ? e.target.parentNode.parentNode : e.target.parentNode;
        let bIsOn = target.classList.contains('on');
        // console.log(target.children);
        let targetChildren = target.children;
        let checkBoxInput = null;
        for( let el of targetChildren){
            if(el.nodeName == 'INPUT'){
                checkBoxInput = el;
                break;
            }
        }
        const keyArr = Object.keys(excludeCardObj)
        console.log(keyArr, current_step.id)
        // 로직 정리
        // 1. 이미 클릭한거면 취소하기
        if(bIsOn){
            target.classList.remove('on');
            checkBoxInput.setAttribute('checked', false);
            current_choices = removeEle(checkBoxInput.value, current_choices)
            dispatch(change({item: current_step.name, id : current_choices}));
        }
        else{
            // 2. 아니라면 선택 안함 체크
            if(keyArr.includes(String(current_step.id)) && excludeCardObj[current_step.id] == checkBoxInput.value) {
                let allOnCards = document.querySelector('div.menu.on');
                if (allOnCards != null) {
                    for(let i = 0 ; i < allOnCards.length; i++){
                        allOnCards[i].classList.remove('on')
                    }
                }
                target.classList.add('on');
                checkBoxInput.setAttribute('checked', true);
                current_choices = [checkBoxInput.value]
                dispatch(change({item: current_step.name, id : current_choices}));
            }
            else{
                if (current_choices.includes(String(excludeCardObj[current_step.id]))){
                    const excludeCheck = document.querySelector(`input[value="${excludeCardObj[current_step.id]}"]`)
                    excludeCheck.parentNode.classList.remove("on")
                    current_choices = removeEle(String(excludeCardObj[current_step.id]), current_choices);
                    current_choices = current_choices == null ? [] : current_choices; 
                }
                target.classList.add('on');
                checkBoxInput.setAttribute('checked', true);
                current_choices.push(checkBoxInput.value)
                dispatch(change({item: current_step.name, id : current_choices}));
            }
            
        }
    }

    const spreadArr = props.data.map((choice, index) => {
        let szClassList = "card mx-auto rounded menu ";
        
        if (current_choices.includes(String(choice.name))){
            szClassList += "on"
        }
         
        return(
                <div key={choice.idx} className="card_area col-lg-4 col-md-6 col-sm-12">
                    <div onClick={cardClick} className={szClassList} style={{width: '18rem'}}>
                        <img src={choice.image} className="card-img-top" alt={choice.name}/>
                        <div className="card-body">
                            <h4 className="card-text center_align">{choice.name}</h4>
                        </div>
                        <input className="checkbox_no_style radio_btn" type="checkbox" value={choice.name}/>
                    </div>
                </div>
        )
    });


    return(
        <div className="select_row row">
            {spreadArr}
        </div>
    )
}



export default ImgCheckBox;