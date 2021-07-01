import React, {Component} from 'react';

class AboutCards extends Component{
  render() {
    return(
      <div className="card-grid-A">
        {this.props.list.map((item) => <div className="card-A" key={item}>{item}</div>)}      
      </div>
    );
  }
}

export default AboutCards;