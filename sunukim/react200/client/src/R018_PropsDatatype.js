import React, {Component} from 'react';
import datatype from 'prop-types';

class R018_PropsDatatype extends Component {
    render(){
        let {
            String, Number, Boolean, Array, Object_Json, Function
        } = this.props;

        return (
            <div style={{padding: "0px"}}>
                <p>StringProps: {String}</p>
                <p>NumberProps: {Number}</p>
                <span>BooleanProps: {Boolean.toString()}</span>
                <p>ArrayProps: {Array.toString()}</p>
                <p>Object JsonProps: {JSON.stringify(Object_Json)}</p>
                <p>FuctionProps: {Function}</p>
            </div>
        )
    }
}
// 경고문구가 안나온다?
// 그리고 책이 잘못됨. Object Json 변수는 선언 될 수 없음.
R018_PropsDatatype.propsTypes = {
    String: datatype.number,
    Number: datatype.number,
    Boolean: datatype.bool,
    Array : datatype.array,
    Object_Json: datatype.object,
    Function: datatype.func,
}

export default R018_PropsDatatype;