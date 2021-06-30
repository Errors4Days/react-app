import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ProjectCard extends Component {
	render() {
		return(
			<div className="card">
				<img className="card-image" src={this.props.image} alt={this.props.altText}></img>
				<h2><Link className="card-link" to ={this.props.to}>{this.props.title}</Link></h2>
				<p>{this.props.description}</p>

			</div>
		);
	}
}
export default ProjectCard;