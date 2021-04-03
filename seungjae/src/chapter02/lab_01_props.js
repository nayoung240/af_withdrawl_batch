import React, {Component} from 'react';

class lab_01_props extends Component {
    render () {
        let props_value = this.props.props_val;
        props_value += ' from App.js';

        return (
            <div>{props_value}</div>
        )
    }
}

export default lab_01_props;