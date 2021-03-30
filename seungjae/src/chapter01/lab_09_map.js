import React, {Component} from 'react';

class lab_09_map extends Component {
    componentDidMount () {
        var Map_Arr = [3, 2, 8, 8];
        let Map_newArr = Map_Arr.map(x => x);
        console.log("1. Map_newArr : [ " + Map_newArr + " ]");

        let Map_multiArr = Map_Arr.map(x => x * 2);
        console.log("2. Map_multiArr : [ " + Map_multiArr + " ] ");

        var ObjArray = [
            {key : "react" , value : 200},
            {key : "리액트", value : 'TwoHundred'}
        ];

        let Map_objArr = ObjArray.map( (obj, index) => {
            console.log( (index + 3) + ". obj : " + JSON.stringify(obj));

            var Obj = {};
            Obj[obj.key] = obj.value
            return obj;
        });
        console.log("5. Map_objArr : [ " + JSON.stringify(Map_objArr) + " ] ");
    }

    render () {
        return (
            <h2>[ This is map ]</h2>
        );
    }
}

export default lab_09_map;