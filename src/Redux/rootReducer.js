import { combineReducers } from 'redux';
import User from './User/User';

const rootReducer = combineReducers({
    User: User
})

export default rootReducer;