import React from 'react';
import Children from "./contextChildren";

const {Provider, Consumer} = React.createContext()
export {Consumer}

class R076_ContextAPi extends React.Component {
    render() {
        return(
            <Provider value="React200">
                <Children />
            </Provider>
        )
    }
}

export default R076_ContextAPi;