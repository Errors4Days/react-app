import React, {Component} from 'react';
import {AiFillGithub, AiFillLinkedin, AiOutlineMail} from "react-icons/ai";

class ImageWithText extends Component {
  render() {
    return(
      <section className="image" style={{backgroundImage: 'url("' + this.props.image + '")'}}>
        <div className="container">
          <div className="img-title">{this.props.title}</div>
          <div className="img-subtitle">{this.props.subtitle}</div>
          {this.props.icons && <div className="icons">
            <a href="mailto:justinleecontact62@gmail.com">
              <AiOutlineMail className="icon" size={"80px"}/>
            </a>
            <a href="https://linkedin.com/in/justin-lee-272692174">
              <AiFillLinkedin className="icon" size={"80px"}/>
            </a>
            <a href="https://github.com/Errors4Days">
              <AiFillGithub className="icon" size={"80px"}/>
            </a>
          </div>}
        </div>
      </section>
    )
  }
}

export default ImageWithText;