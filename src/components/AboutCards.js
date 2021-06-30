import React, {Component} from 'react';

class AboutCards extends Component{
  render() {
    return(
      <div className="card">
				<h2>{this.props.language}</h2>
			</div>
    );
  }
}

export default AboutCards;