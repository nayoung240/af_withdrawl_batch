import {CHANGE} from '../actions';
import {combineReducers} from 'redux';

const initState = {
    sandwitch : 1,
    bread : 1,
    cheese : 1,
    more_added : 1,
    sauce : 1,
    vege : 1
}

const data = (state = initState, action) => {
    console.log(state);
    let newState = state;
    switch(action.type){
        case CHANGE:
            console.log(action)
            let item_name = action.data.item
            newState[item_name] = action.data.id
            return newState;
        default:
            return state;
    }
}

const App = combineReducers({
    data
})

export default App;