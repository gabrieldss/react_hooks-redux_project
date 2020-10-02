import {combineReducers} from 'redux';
import counter from './counter';

const root = combineReducers({
    root1: counter
})

export default root