import React, {Component} from 'react';

class ProjectPosts extends Component {
  render() {
    return(
      <div className="container">
        <div className="textbox1">
          <h2>{this.props.title}</h2>
          <h3>Hello</h3>
        </div>
      </div>
    );
  }
}

export default ProjectPosts;