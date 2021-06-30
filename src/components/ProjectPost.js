import React, {Component} from 'react';
import {Link} from 'react-router-dom';

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
        </div>
      </div>
    );
  }
}

export default ProjectPosts;