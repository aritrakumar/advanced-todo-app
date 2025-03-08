import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import taskReducer from './taskReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    tasks: taskReducer,
    auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
