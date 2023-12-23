import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import "./App.css";
import myPortfolio from "./myPortfolio";

function App() {
  return (
    <Provider store={store}>
      <div>{myPortfolio()}</div>
    </Provider>
  );
}

export default App;
