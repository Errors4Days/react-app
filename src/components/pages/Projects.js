import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
 
import ImageWithText from '../ImageWithText';
import image from '../assets/img/header-project.jpg';
import ProjectCards from '../ProjectCards';

import P1 from '../assets/img/temp.jpg';
import project1Img from '../project-posts/img/project1.png';

class Projects extends Component {
	componentDidMount() {
    document.title = "My Projects"
  }
	render() {
		return(
			<div className="content">
				<ImageWithText
					title="My Projects"
					subtitle="Browse through my past projects."
					image={image}
				/>

			 <section>
				 <div className="container">
					<div className="card-grid">
						<ProjectCards
							title="Game Design Project"
							description="A 2d adventure game in built Unity. Play as a cat and navigate the dangers of the sewer.
							Made with 4 other students."
							to="projects/project1"
							image={project1Img}
							alt="Game Design"
						/>

						<ProjectCards
							title="Python Maze Generator"
							description="A Basic Maze Generator Built in Python"
							to=""
							image={P1}
							alt="Maze Generator"
						/>

						<ProjectCards
							title="Python Space Invaders"
							description="Space Invaders Running in Python"
							to=""
							image={P1}
							alt="Space Invaders"
						/>

						<ProjectCards
							title="An older website"
							description="A static website on github pages"
							to=""
							image={P1}
							alt="Space Invaders"
						/>
					</div>
				</div>
			 </section>
			</div>
		);
	}
}

export default Projects;