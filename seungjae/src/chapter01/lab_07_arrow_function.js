import React, {Component} from 'react';

class lab_07_arrow_function extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrowFuc: 'React200',
            num: 3
        };
    }

    componentDidMount() {
        Function1(1);
        this.Function2(1, 1);
        this.Function3(1, 3);
        this.Function4();
        this.Function5(0, 2, 3);

        function Function1(num1) {
            return console.log(num1 + '. Es5 function');
        }
    }

    Function2 = (num1, num2) => {
        let num3 = num1 + num2;
        console.log(num3 + '. Arrow Function : ' + this.state.arrowFuc);
    }

    Function3() {
        var this_bind = this;
        setTimeout(function() {
            console.log(this_bind.state.num + 'Es Callback Function noBind : ');
            console.log(this.state.arrowFuc);
        }.bind(this), 2000); // undefind 에러가 나와 bind 추가
        // 콜백 함수 내부에서 this는 window객체이기 때문에 this로 state 변수에 접근할때 undefined 에러가 나옴
    }

    Function4() {
        setTimeout(function() {
            console.log('4. Es Callback Function Bind : ' + this.state.arrowFuc);
            console.log(this.state.arrowFuc);
        }.bind(this), 2000);
    }

    Function5 = (num1, num2, num3) => {
        let num4 = num1 + num2 + num3;

        setTimeout(function() {
            console.log(num4 + '. Arrow Callback Function : ' + this.state.arrowFuc);
        }.bind(this), 2000);
        
    }

    render() {
        return (
            <h1>[ This is ArrowFunction ]</h1>
        );
    }
}

export default lab_07_arrow_function;