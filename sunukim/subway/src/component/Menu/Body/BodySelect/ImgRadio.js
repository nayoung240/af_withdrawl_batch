import React from 'react';
import {connect, useSelector, useDispatch } from 'react-redux'
import {change} from 'actions/'

// 뭐 고르는지 !! 내려줘야함.

let ImgRadio = (props) => {
    // State 부르기
    let current_state = useSelector((state) => {
        return state.data
    })
    let current_step = current_state.current_step;
    let current_recipe = current_state.recipe;
    // 저장하는 함수
    const dispatch = useDispatch()
    
    // 카드 클릭 함수
    const cardClick = (e) => {
        e.stopPropagation();

        let target = (e.target.classList.contains('card-text')) ? e.target.parentNode.parentNode : e.target.parentNode;
        let bIsOn = target.classList.contains('on');

        let targetChildren = target.children;
        let radioInput = null;
        for( let el of targetChildren){
            if(el.nodeName == 'INPUT'){
                radioInput = el;
                break;
            }
        }

        // On 되어 있는거 한번 더 눌러서 취소하는 경우
        if(bIsOn){
            target.classList.remove('on');
            radioInput.setAttribute('checked', false);

            // State 에 저장
            dispatch(change({item: current_step.name, id : null}));
        }
        else{
            let cards = document.getElementsByClassName('card');
            for(let i = 0 ; i < cards.length; i++){
                cards[i].classList.remove('on')
            }
            target.classList.add('on');
            radioInput.setAttribute('checked', true);

            // State 에 저장
            dispatch(change({item: current_step.name, id : radioInput.value}));
        }

    }

    const spreadArr = props.data.map((choice, index) => {
        let cardClass = 'card mx-auto rounded menu ';
        if (current_recipe[current_step.name] != null && current_recipe[current_step.name] == choice.idx){
            cardClass += 'on'
        }
        return(
                <div key={choice.idx} className='card_area col-lg-4 col-md-6 col-sm-12'>
                    <div onClick={cardClick} className={cardClass} style={{width: '18rem'}}>
                        <img src={choice.image} className="card-img-top" alt={choice.name}/>
                        <div className="card-body">
                            <h4 className="card-text center_align">{choice.name}</h4>
                        </div>
                        <input className="radio_btn radio_no_style" type="radio" value={choice.name}/>
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



export default ImgRadio;