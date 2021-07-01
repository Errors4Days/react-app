import React, {Component} from 'react';
import ProjectPost from '../ProjectPost';
import project1 from './img/project1.png';

class Project1 extends Component {
  render() {
    return(
      <div className="textbox1">
        <ProjectPost
          title="The Purrsuit of the Drip"
          summary="This was the final project for my Game Design class. I collaborated with 4 other students to produce this game in Unity.
          In this game players control a cat character to navigate the sewers and defeat the Rat King. Throughout the levels the player
          will be able to pick up various abilities."
          details="The game is powered by Unity engine. We wrote our own custom C# scripts. Many of the sprites and animations like
          the cat were custom made."

          image={project1}
          alt="project1"
          list={["Unity", "C#"]}
          link="https://ecse-csds290.itch.io/the-purr-suit-of-the-drip-s2021-team-17"
        />
      </div>
    );
  }
}

export default Project1;