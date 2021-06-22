import React from 'react';
import ImgRadio from './BodySelect/ImgRadio'
import StrRadio from './BodySelect/StrRadio'

const Body = (props) => {
    console.log(props)
    let component = <ImgRadio data={props.data.results} />
    if(props.menuid == 1){
        component = <ImgRadio menuid = {props.menuid} data={props.data.results} />
    }
    else if(props.menuid == 2){
        component = <StrRadio menuid = {props.menuid} data={props.data.results} />
    }

    return(
        <form action="">
            {component}
        </form>
    )
}

export default Body;