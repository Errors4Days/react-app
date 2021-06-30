import React, {Component} from 'react';

class ImageWithText extends Component {
  render() {
    return(
      <section className="image" style={{backgroundImage: 'url("' + this.props.image + '")'}}>
        <div className="container">
          <div className="img-title">{this.props.title}</div>
          <div className="img-subtitle">{this.props.subtitle}</div>
        </div>
      </section>
    )
  }
}

export default ImageWithText;