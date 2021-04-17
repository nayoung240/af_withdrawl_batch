import React from 'react';
import {connect, useSelector, useDispatch } from 'react-redux'
import {change} from 'actions/'

// 뭐 고르는지 !! 내려줘야함.

let ImgRadio = (props) => {

    // const count = useSelector(selectCount)
    const dispatch = useDispatch()
    let selectMenu = 'sandwitch'
    switch(props.menuid){
        case "1":
            selectMenu = 'sandwitch'
        default:
            selectMenu = 'sandwitch'
    }

    // 저장하는 함수

    // 카드 클릭 함수
    const cardClick = (e) => {
        e.stopPropagation();
        console.log(e.target.parentNode);
        let target = (e.target.classList.contains('card-text')) ? e.target.parentNode.parentNode : e.target.parentNode;
        let bIsOn = target.classList.contains('on');
        console.log(target.children);
        let targetChildren = target.children;
        let radioInput = null;
        for( let el of targetChildren){
            if(el.nodeName == 'INPUT'){
                radioInput = el;
                break;
            }
        }
        if(bIsOn){
            target.classList.remove('on');
            radioInput.setAttribute('checked', false);
        }
        else{
            let cards = document.getElementsByClassName('card');
            for(let i = 0 ; i < cards.length; i++){
                cards[i].classList.remove('on')
            }
            target.classList.add('on');
            radioInput.setAttribute('checked', true);
            dispatch(change({item: selectMenu, id : radioInput.value}));
        }

    }

    const spreadArr = props.data.map((choice, index) => {
        return(
                <div key={index} className="card_area col-lg-4 col-md-6 col-sm-12">
                    <div onClick={cardClick} className="card mx-auto rounded menu" style={{width: '18rem'}}>
                        <img src={choice.image} className="card-img-top" alt={choice.name}/>
                        <div className="card-body">
                            <h4 className="card-text center_align">{choice.name}</h4>
                        </div>
                        <input className="radio_btn radio_no_style" type="radio" value={choice.idx}/>
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