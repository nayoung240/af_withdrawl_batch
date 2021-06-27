import {BEFORE_STEP, CHANGE, NEXT_STEP, CHANGE_STEP} from '../actions';
import {combineReducers} from 'redux';

const initState = {
    recipe : {
        sandwitch : null,
        bread : null,
        cheese : null,
        more_added : null,
        sauce : null,
        vege : null,
        bread_length: null,
        toasting : null
    },
    current_step : {
        id : 1,
        name : 'sandwitch'
    },
    step_info : {
        1 : {name : '샌드위치', recipe : 'sandwitch'},
        2 : {name : '빵 길이', recipe : 'bread_length'},
        3 : {name : '빵', recipe : 'bread'},
        4 : {name : '토스팅', recipe : 'toasting'},
        5 : {name : '치즈', recipe : 'cheese'},
        6 : {name : '야채', recipe : 'vege'},
        7 : {name : '소스/시즈닝', recipe : 'sauce'},
        8 : {name : '추가 선택', recipe : 'more_added'}
    }
}

const data = (state = initState, action) => {
    console.log(state);
    let newState = state;
    switch(action.type){
        case CHANGE:
            // console.log(action)
            let item_name = action.data.item
            newState.recipe[item_name] = action.data.id
            return newState;
        case NEXT_STEP:
            newState.current_step.id += 1
            newState.current_step.name = changeName(newState.current_step.id)
            return newState
        case BEFORE_STEP:
            newState.current_step.id -= 1
            newState.current_step.name = changeName(newState.current_step.id)
            return newState
        case CHANGE_STEP:
            newState.current_step.id = parseInt(action.data.id)
            newState.current_step.name = changeName(newState.current_step.id)
            return newState
        default:
            return state;
    }
}

const changeName = (menuid) => {
    switch(menuid){
        case 1:
            return 'sandwitch'
        case 2:
            return 'bread_length'
        case 3:
            return 'bread'
        case 4:
            return 'toasting'
        case 5:
            return 'cheese'
        case 6:
            return 'vege'
        case 7:
            return 'sauce'
        case 8:
            return 'more_added'
        default:
            return 'sandwitch'
    }
}

const App = combineReducers({
    data
})

export default App;