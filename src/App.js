import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import "./App.css";
import MyPortfolio from "./myPortfolio";

function App() {
  return (
    <Provider store={store}>
      <div>
        <MyPortfolio />
      </div>
    </Provider>
  );
}

export default App;
