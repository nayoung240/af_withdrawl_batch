import React, { Component } from 'react';

class R071_onKey extends Component {
    OnKey(event, e) {
        var val = e.target.value;
        console.log('event : ' + event + ", value : " + val);
    }

    render() {
        return (
            <>
                onKeyDown : <input type="text" onKeyDown = {e => this.OnKey("OnKeyDown", e)}/>
                <br/>
                onKeyPress : <input type="text" onKeyPress = {e => this.OnKey("OnKeyPress", e)}/>
                <br />
                onKeyUp : <input type="text" onKeyUp = {e => this.OnKey("onKeyUp", e)}/>
            </>
        )
    }
}

export default R071_onKey;