import React, { Component } from 'react';

class R019_PropsBoolean extends Component {
    render(){
        let {
            BooleanTrueFalse
        } = this.props
        console.log(BooleanTrueFalse);
        return (
            <div stype={{padding: "0px"}}>
                {BooleanTrueFalse ? '2. ' : '1. '}
                {BooleanTrueFalse.toString()}
            </div>
        )
    }
}

export default R019_PropsBoolean;