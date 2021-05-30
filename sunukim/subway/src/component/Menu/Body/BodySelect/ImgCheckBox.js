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
        return arr;
    }

    let initdata = useSelector((state) => {
        console.log(state.data)
        return state.data
    })
    const dispatch = useDispatch()

    let current_step = initdata.current_step
    let recipe = initdata.recipe
    
    let current_choices = (recipe[current_step.name] != null) ? recipe[current_step.name] : []

    // 저장하는 함수

    // 카드 클릭 함수
    const cardClick = (e) => {
        e.stopPropagation();
        console.log(e.target.parentNode);
        let target = (e.target.classList.contains('card-text')) ? e.target.parentNode.parentNode : e.target.parentNode;
        let bIsOn = target.classList.contains('on');
        console.log(target.children);
        let targetChildren = target.children;
        let checkBoxInput = null;
        for( let el of targetChildren){
            if(el.nodeName == 'INPUT'){
                checkBoxInput = el;
                break;
            }
        }
        if(bIsOn){
            target.classList.remove('on');
            checkBoxInput.setAttribute('checked', false);
            removeEle(checkBoxInput.value, current_choices)
            dispatch(change({item: current_step.name, id : current_choices}));
        }
        else{
            target.classList.add('on');
            checkBoxInput.setAttribute('checked', true);
            current_choices.push(checkBoxInput.value)
            dispatch(change({item: current_step.name, id : current_choices}));
        }

    }

    const spreadArr = props.data.map((choice, index) => {
        let szClassList = (current_choices.includes(choice.idx)) ? "card_area col-lg-4 col-md-6 col-sm-12 on" : "card_area col-lg-4 col-md-6 col-sm-12" 
        return(
                <div key={choice.idx} className={szClassList}>
                    <div onClick={cardClick} className="card mx-auto rounded menu" style={{width: '18rem'}}>
                        <img src={choice.image} className="card-img-top" alt={choice.name}/>
                        <div className="card-body">
                            <h4 className="card-text center_align">{choice.name}</h4>
                        </div>
                        <input className="radio_btn" type="checkbox" value={choice.idx}/>
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