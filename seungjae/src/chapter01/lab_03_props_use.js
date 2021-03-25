import React, {Component} from 'react';

class lab_03_props_use extends Component {
    // 순서 2 : component가 새로운 props를 가져올 때 state 값을 변경함
    static getDerivedStateFromProps(props, state) {
        console.log('2. getDerivedStateFromProps Call : ' + props.prop_value);
        return {tmp_state : props.prop_value};
    }
    // 순서 1 : 생성자 부모 객체에서 전달 받은 상태값 props값을 가져옴
    constructor(props) {
        super(props); // 부모 객체에서 전달 받은 변수
        this.state = {};  // lab_03_props_use에서 사용할 변수 선언 (초기화)
        console.log('1. constructor Call : ' + props.prop_value);
    }

    // 순서 4 : 작성한 함수들 중 가장 마지막으로 실행이 됨  render 함수 이후 실행이 됨
    componentDidMount() {
        console.log('4. componentDidMount Call');
        console.log('5. tmp_state : ' + this.state.tmp_state);
        this.setState({temp_state2 : true}); // state의 변경점
    }

    shouldComponentUpdate(props, state) { // state의 변경점이 생겨 해당 함수 실행이 됨
        console.log('6. shouldComponentUpdate Call / temp_state2 = ' + state.temp_state2);
        return state.temp_state2;
    }

    //순서 3
    render() {
        return (
            <h2> This is componentDidMount function</h2>
        )
    }
}

export default lab_03_props_use;