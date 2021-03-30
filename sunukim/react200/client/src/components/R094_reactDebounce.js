import React, { Component } from 'react';
import {debounce} from 'lodash';

class R094_reactDebounce extends Component {
    debounceFunc = debounce(()=>{
        console.log("Debounce API Call");
    }, 1000);

    render() {
        return(
            <>
                
            </>
        )
    }
}

export default R094_reactDebounce;