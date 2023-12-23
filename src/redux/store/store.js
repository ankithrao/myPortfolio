// Importing the createStore function from the Redux library
import { createStore } from "redux";

// Importing the combined rootReducer from the specified file path
import rootReducer from "../reducers/rootReducer";

// Importing the composeWithDevTools function for Redux DevTools extension
import { composeWithDevTools } from "redux-devtools-extension";

// Initial state of the application
const initialState = {};

// Creating the Redux store with the combined rootReducer, initial state, and DevTools extension
const store = createStore(rootReducer, initialState, composeWithDevTools());

// Exporting the configured Redux store
export default store;
