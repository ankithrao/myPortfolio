// store.js
import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer"; // You need to create this file

const initialState = {};

const store = createStore(rootReducer, initialState);

export default store;
