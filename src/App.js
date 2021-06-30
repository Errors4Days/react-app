import React, {Component} from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';

import PageWrapper from "./components/PageWrapper";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import Project1 from "./components/project-posts/Project1";

class App extends Component {
  render() {
    return(
      <Router>
        <PageWrapper>
          <Route
            exact={true}
            path="/"
            component={Home}
          />

          <Route
            exact={true}
            path="/about"
            component={About}
          />

          <Route
            exact={true}
            path="/projects"
            component={Projects}
          />

          <Route
            exact={true}
            path="/blog"
            component={Blog}
          />

          <Route
            exact={true}
            path="/contact"
            component={Contact}
          />

          {/* Project Post routes */}
          <Route
            exact={true}
            path="/projects/project1"
            component={Project1}
          />
        </PageWrapper>
      </Router>
    )
  }
}

export default App;
