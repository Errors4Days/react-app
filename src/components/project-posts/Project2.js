import React, {Component} from 'react';
import ProjectPost from '../ProjectPost';
import project2 from './img/project2.png';

class Project2 extends Component {
  render() {
    return(
      <div className="textbox1">
        <ProjectPost
          title="Python Maze Generator"
          summary="I built a Python maze generator as a fun challenge. It creates the maze by drawing random paths until it hits a dead
          end. I've also structured the generator to gurantee that the maze would always be solvable."
          details="This Python program utilizes the Python turtle library to draw the maze. It can generate a maze from 3 to 30 tiles. 
          The image shown below displays a full sized maze."

          image={project2}
          alt="project2"
          list={["Python 3"]}
          link="https://github.com/Errors4Days/Maze-Generator.git"
        />
      </div>
    );
  }
}

export default Project2;