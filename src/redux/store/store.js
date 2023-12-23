// store.js
import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer"; // You need to create this file
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

const store = createStore(rootReducer, initialState, composeWithDevTools());

export default store;
