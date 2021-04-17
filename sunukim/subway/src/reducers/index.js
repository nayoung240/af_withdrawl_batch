import {CHANGE} from '../actions';
import {combineReducers} from 'redux';

const initState = {
    sandwitch : 1,
}

const data = (state = initState, action) => {
    console.log("33")
    console.log(state);
    switch(action.type){
        case CHANGE:
            console.log("CHANGE")
            return state, {
                sandwitch : action.sandwitch
            }
        default:
            console.log("default")
            return state;
    }
}

const App = combineReducers({
    data
})

export default App;