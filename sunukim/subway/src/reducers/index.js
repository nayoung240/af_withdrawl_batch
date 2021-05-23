import {CHANGE} from '../actions';
import {combineReducers} from 'redux';

const initState = {
    recipe : {
        sandwitch : null,
        bread : null,
        cheese : null,
        more_added : null,
        sauce : null,
        vege : null,
        bread_length: null
    },
    step : {
        current_step : 1
    }
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