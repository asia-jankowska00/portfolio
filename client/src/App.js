import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Skills from "./pages/Skills";
import Story from "./pages/Story";
import Values from "./pages/Values";

function App() {
  //
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/skills" component={Skills}></Route>
        <Route exact path="/story" component={Story}></Route>
        <Route exact path="/values" component={Values}></Route>
      </Router>
    </div>
  );
}

export default App;
