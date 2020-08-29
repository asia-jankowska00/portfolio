import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import ProjectsContextProvider from "./ProjectsContext";

import Homepage from "./pages/Homepage";
import Skills from "./pages/Skills";
import Story from "./pages/Story";
import Values from "./pages/Values";
import Projects from "./pages/Projects";
import ProjectPage from "./pages/ProjectPage";

import "./styles/main.scss";

function App() {
  return (
    <ProjectsContextProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/skills" component={Skills}></Route>
        <Route exact path="/story" component={Story}></Route>
        <Route exact path="/values" component={Values}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route path="/projects/:projectPath" component={ProjectPage}></Route>
      </Router>
    </ProjectsContextProvider>
  );
}

export default App;
