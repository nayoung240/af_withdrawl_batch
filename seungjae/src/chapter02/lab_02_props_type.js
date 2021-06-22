import React, {Component} from 'react';
import datatype from 'prop-types';

class lab_02_props_type extends Component {
    render () {
        let {
            String, Number, Boolean, Array, ObjectJson, Function
        } = this.props;

        return(
            <div style={{padding: "0px"}}>
                <p>String Props : {String}</p>
                <p>Number Props : {Number}</p>
                <p>Boolean Props : {Boolean.toString()}</p>
                <p>Array Props : {Array.toString()}</p>
                <p>Object Props : {JSON.stringify(ObjectJson)}</p>
                <p>Function Props : {Function}</p>
            </div>
        );
    }
}

lab_02_props_type.propTypes = {
    String : datatype.string,
    Number : datatype.number,
    Boolean : datatype.bool,
    Array : datatype.array,
    ObjectJson : datatype.object,
    Function : datatype.func
}

export default lab_02_props_type;