import React, {useState} from 'react';

const Lab_01_props_hook = (props) => {
    const [props_val] = useState(props.props_val);

    const addPropsVlaue = () => {
        let props_value = props_val;
        props_value += " from App.js";
        return props_value;
    }

    return (
        <div>
            <h2>아!!</h2>
            <div>{addPropsVlaue()}</div>
        </div>
    );

}

export default Lab_01_props_hook;
