import {legacy_createStore, combineReducers} from "redux";
import reducer from "./NumStatus/reducer.ts";
// To enable browser extension
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({reducer})

// Create data store
const store = legacy_createStore(reducers, composeWithDevTools());

export default store;