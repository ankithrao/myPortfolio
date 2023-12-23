// Importing React and the Provider component from react-redux to connect Redux store with the React app
import React from "react";
import { Provider } from "react-redux";

// Importing the Redux store from the specified file path
import store from "./redux/store/store";

// Importing the CSS styles for the entire application
import "./App.css";

// Importing the main component for the application
import MyPortfolio from "./myPortfolio";

// Main App component that serves as the entry point of the application
function App() {
  // Wrapping the entire application with the Provider component to provide access to the Redux store
  return (
    <Provider store={store}>
      <div>
        {/* Rendering the main portfolio component */}
        <MyPortfolio />
      </div>
    </Provider>
  );
}

// Exporting the App component as the default export
export default App;
