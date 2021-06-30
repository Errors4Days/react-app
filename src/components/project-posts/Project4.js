import React, {Component} from 'react';
import ProjectPost from '../ProjectPost';
import project4 from './img/project4.png';

class Project4 extends Component {
  render() {
    return(
      <div className="textbox1">
        <ProjectPost
          title="Old Website"
          summary="This website is built from static HTML tags and is hosted on github pages. It does implement some interactivity but
          lacks any complexity. By comparison the website you are currently on is more complex relying on the React Javascript
          framework. I've found React to be much more modular allowing easy editing of multiple pages. Notice that each project page has
          a similiar layout."
          details="Out of all the features implemented in the this old website the one I am most proud of is the weather section on the
          homepage. The weather displayed is of Cleveland and is pulled from the OpenWeatherMap API. I would have liked to use Dark Sky
          but Apple purchased the company and limited some features."

          image={project4}
          list={["HTML", "CSS", "Javascript"]}
          link="https://errors4days.github.io/index.html"
        />
      </div>
    );
  }
}

export default Project4;