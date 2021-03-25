import React, {Component} from 'react';

class lab_05_variable_type extends Component {

    constructor (props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var varName = 'react';
        console.log('varName1 : ' + varName);

        var varName = '200';
        // varName' is already defined  no-redeclare
        console.log('varName2 : ' + varName);

        let letName = 'react';
        console.log('letName1 : ' + letName);

        // let letName = '200'; 
        // SyntaxError: C:\Users\SeungJaeLee\Documents\SeungJaes\seungjae\src\chapter01\lab_05_variable_type.js: Identifier 'letName' has already been declared (20:12)
        // Parsing error: Identifier 'letName' has already been declared
        // console.log('letName2 : ' + letName);

        const constName = 'react';
        console.log('constName1 : ' + constName);

        // const constName = '200';
        //Parsing error: Identifier 'constName' has already been declared
        // console.log('constName2 : ' + constName);
    }

    render() {
        return (
            <h2> This is Variable </h2>
        );
    }
}

export default lab_05_variable_type;