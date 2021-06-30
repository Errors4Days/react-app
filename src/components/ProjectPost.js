import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// Template for creating a project page
class ProjectPosts extends Component {
  render() {
    return(
      <div className="container">
        <div className="textbox1">
        <Link className="back-link" to="/projects">
          <button className="back-button" type="button">
            Back
          </button>
        </Link>

          <h2>{this.props.title}</h2>
          <p>{this.props.summary}</p>
          <p>{this.props.details}</p>
          <img className="project-image" src={this.props.image}/>

          <h3 style={{ margin: '20px 0px 5px 0px  ' }}>Technology Used</h3>
          <ul className="post-bullets">
            {this.props.list.map((item) => <li className="post-bullet">{item}</li>)}
          </ul>
          <a href={this.props.link}>Take a look!</a>
        </div>
      </div>
    );
  }
}

export default ProjectPosts;