import React from 'react';
import ImgCheckBox from './BodySelect/ImgCheckBox';
import ImgRadio from './BodySelect/ImgRadio'
import StrRadio from './BodySelect/StrRadio'

const Body = (props) => {
    console.log(props)
    let component = <ImgRadio data={props.data.results} />
    const menuid = props.menuInfo.menuId
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