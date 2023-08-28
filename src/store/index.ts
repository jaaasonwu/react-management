import {legacy_createStore} from "redux";
import reducer from "./reducer.ts";
// To enable browser extension
import { composeWithDevTools } from 'redux-devtools-extension';


// Create data store
const store = legacy_createStore(reducer, composeWithDevTools());

export default store;