import React, {Component} from 'react';
import ProjectPost from '../ProjectPost';
import project3 from './img/project3.png';

class Project3 extends Component {
  render() {
    return(
      <div className="textbox1">
        <ProjectPost
          title="Python Space Invaders"
          summary="During my softmore year of college I decided to build Space Invaders for fun. I ended up using Python since I could 
          easily control the frame rate with pygame. The frame rate was causing issues with my Java version so I rebuilt it in Python."
          details="I used the pygame library since it offered many usefull tools like a set framerate. I found the space invaders
          assets on a similiar github project. Except for the alien assets, all of the code was written from scratch."

          image={project3}
          alt="project3"
          list={["Python 3"]}
          link="https://github.com/Errors4Days/Final_Space_Invaders"
        />
      </div>
    );
  }
}

export default Project3;