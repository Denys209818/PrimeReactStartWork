import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import {createBrowserHistory} from 'history';
import { applyMiddleware, combineReducers } from "redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import authReducer from "./reducers/authReducer";

var browserHistory = document.getElementsByTagName('base')[0].getAttribute('href');
export const history = createBrowserHistory({basename: browserHistory});

var middleware = [thunk, routerMiddleware(history)];

var rootReducer = combineReducers({
    router: connectRouter(history),
    auth: authReducer
});

const store = createStore(rootReducer, 
    {}, 
    composeWithDevTools(applyMiddleware(...middleware)));

export default store;