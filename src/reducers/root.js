import {combineReducers} from 'redux';
import counter from './counter';
import todolist from './todolist';

const root = combineReducers({
    root1: counter,
    root2: todolist
})

export default root