import React, {Component} from "react";
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import ScrollToTop from "./components/ScrollToTop";
import PageWrapper from "./components/PageWrapper";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";

import Project1 from "./components/project-posts/Project1";
import Project2 from "./components/project-posts/Project2";
import Project3 from "./components/project-posts/Project3";
import Project4 from "./components/project-posts/Project4";

// Swap back to BrowserRouter and implement catch all for refresh/page redirect 
class App extends Component {
  render() {
    return(
      <Router>
        <ScrollToTop/>
        <PageWrapper>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/blog" component={Blog}/>
            <Route exact path="/contact" component={Contact}/>

            {/* Project Post routes */}
            <Route exact path="/projects/project1" component={Project1}/>
            <Route exact path="/projects/project2" component={Project2}/>
            <Route exact path="/projects/project3" component={Project3}/>
            <Route exact path="/projects/project4" component={Project4}/>
          </Switch>
        </PageWrapper>
      </Router>
    )
  }
}

export default App;
