import React from 'react';
import ImgCheckBox from './BodySelect/ImgCheckBox';
import ImgRadio from './BodySelect/ImgRadio'
import StrRadio from './BodySelect/StrRadio'
import {connect, useSelector, useDispatch } from 'react-redux'
import {change} from 'actions/'

const Body = (props) => {
    // console.log(props)
    // 현재 단계 받아온다.
    // State 부르기
    let current_state = useSelector((state) => {
        return state.data
    })
    let current_step = current_state.current_step;
    let current_recipe = current_state.recipe;
    // 저장하는 함수
    const dispatch = useDispatch()
    let component = <ImgRadio data={props.data.results} />
    const menuid = current_step.id
    if(menuid == 1 || menuid == 3 || menuid == 5){
        // 이미지가 있는 라디오 버튼
        component = <ImgRadio menuid = {menuid} data={props.data.results} />
    }
    else if(menuid == 2 || menuid == 4){
        // 문자열이 있은 라디오 버튼
        component = <StrRadio  menuid = {menuid} data={props.data.results} />
    }
    else {
        // 이미지가 있는 체크박스
        component = <ImgCheckBox menuid = {menuid} data={props.data.results} />
    }

    return(
        <form className="font_content" action="">
            {component}
        </form>
    )
}

export default Body;