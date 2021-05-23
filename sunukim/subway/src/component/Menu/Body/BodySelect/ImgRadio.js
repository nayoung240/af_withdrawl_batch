import React from 'react';
import {connect, useSelector, useDispatch } from 'react-redux'
import {change} from 'actions/'

// 뭐 고르는지 !! 내려줘야함.

let ImgRadio = (props) => {
    console.log("props : ", props)
    let initdata = useSelector((state) => {
        console.log("state", state)
        return state.data
    })
    console.log("initdata : ", initdata)
    const dispatch = useDispatch()
    // 저장하는 함수

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
            dispatch(change({item: props.menuName, id : radioInput.value, initdata: initdata}));
        }

    }

    const spreadArr = props.data.map((choice, index) => {
        let cardClass = 'card_area col-lg-4 col-md-6 col-sm-12 ';
        if (initdata.recipe[props.menuName] != null && initdata.recipe[props.menuName] == choice.idx){
            cardClass += 'on'
        }
        return(
                <div key={choice.idx} className={cardClass}>
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