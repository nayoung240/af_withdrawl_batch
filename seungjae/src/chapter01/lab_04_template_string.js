import React, {Component} from 'react';

class lab_04_template_string extends Component {

    constructor ( props) {
        super(props); // 
        this.state = {}; // state 초기화
    }

    componentDidMount () {
        var jsString1 = '자바 스크립트';
        var jsString2 = '입니다\n다음 줄입니다';

        // 개행 문자를 사용하여 줄바꿈을 한 경우
        console.log(jsString1 + ' 문자열' + jsString2 + '~');

        var Es6String1 = 'Es6';
        var Es6String2 = '입니다.';
        // (`) 백틱으로 사용될 경우 코드상에서 줄바꿈을 하면 개행 문자 없이도 사용 가능
        console.log(`${Es6String1} 문자열${Es6String2}!!
        ____다음 줄입니다`); 

        var LongString = "Es6에 추가된 String 함수들입니다.";
        // 문자열 내에서 일치되는 문자를 찾는 함수들
        console.log("startsWith : " + LongString.startsWith("Es6에 추가")); // 문자열 앞에서 시작하면서 찾음
        console.log("endsWith : " + LongString.endsWith("함수들입니다")); // 문자열 제일 끝에서 부터 찾음
        console.log("includes : " + LongString.includes("추가된 String")); // 위치 상관없이 해당 문자를 포함하고 있는지 
    }

    render () {
        return(
            <h2> This is es6 String</h2>
        );
    }
}

export default lab_04_template_string;