import React, {Component} from 'react';

// Adds a title and subtitle
class PageHeader extends Component {
  render() {
    return(
      <div className="page-header">
            <h2>{this.props.title}</h2>
            <p>{this.props.subtitle}</p>
        </div>
    );
  }
}

export default PageHeader;