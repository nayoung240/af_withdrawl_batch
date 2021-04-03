import React from 'react';
import ImgRadio from './BodySelect/ImgRadio'

const Body = (props) => {
    return(
        <form action="">
            <ImgRadio data={props.data.results} />
        </form>
    )
}

export default Body;