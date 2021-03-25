import React, {Component} from 'react';

class lab_03_props_use extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log('2. getDerivedStateFromProps Call : ' + props.prop_value);
        return {};
    }
    
    constructor(props) {
        super(props); // 부모 객체에서 전달 받은 변수
        this.state = {};  // lab_03_props_use에서 사용할 변수 선언 (초기화)
        console.log('1. constructor Call : ' + props.prop_value);
    }

    render() {
        return (
            <h2> This is Constructor function</h2>
        )
    }
}

export default lab_03_props_use;