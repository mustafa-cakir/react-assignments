import { combineReducers } from 'redux';
import globalReducer from './globalReducer';
import userInfoReducer from './userInfoReducer';

const rootReducer = combineReducers({
    global: globalReducer,
    userInfo: userInfoReducer,
});

export default rootReducer;
