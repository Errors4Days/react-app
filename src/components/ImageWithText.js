import React, {Component} from 'react';
import {AiFillGithub, AiFillLinkedin, AiOutlineMail} from "react-icons/ai";
///style={{backgroundImage: 'url("' + this.props.image + '")'}}
class ImageWithText extends Component {
  render() {
    return(
      <section>
        <div className="image" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("' + this.props.image + '")'}}>
          <div className="img-container">
            <div className="image-textbox">
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
          </div>
        </div>
      </section>
    )
  }
}

export default ImageWithText;