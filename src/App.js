import React from "react";
import "./App.css";
import Body from "./components/containers/Body";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "./context/appContext";

function App() {
  return (
    <Provider>
      <div className="App">
        <Router>
          <Body />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
