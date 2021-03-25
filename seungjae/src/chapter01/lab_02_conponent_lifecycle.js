import React, { Component } from 'react';

class lab_02_conponent_lifecycle extends Component {
    render() {
        console.log('3. render call');
        return (
            <h2> This is Render Function </h2>
        );
    }
}

export default lab_02_conponent_lifecycle;