
import {createStore, applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import userLoginReducer from '../reducer/users/userLoginReducer';
const middleWares=[thunk];
const reducer=combineReducers({
    loginData: userLoginReducer
});
const store= createStore(reducer,composeWithDevTools(applyMiddleware(...middleWares)));
export  default store;