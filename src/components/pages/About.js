import React, {Component} from 'react';
import ImageWithText from '../ImageWithText';
import image from '../assets/img/header-about.jpg';
import AboutCards from '../AboutCards'

class About extends Component {
  componentDidMount() {
    document.title = "About Me";
  }
  render() {
    return(
      <div className="content">
        <ImageWithText
          title="Hi, I'm Justin"
          subtitle="Learn more about me on this page."
          image={image}
        />
        
        <section className="textbox1">
          <div className="container">
            <h2>About Me</h2>
            <p> 
              I'm currently a senior at Case Western Reserve University majoring in Computer Science with a concentration in Software 
              Engineering. My coding interests include Unity and web applications. I'm most familiar with python 3 but I also know Java
              and some C. Outside of programming I enjoy playing video games, hiking, and longboarding. Check out my github below.
            </p>
          </div>
        </section>
        <section className="textbox2">
          <div className="container">
            <h2>Proficient Technologies</h2>
            <AboutCards 
              list={["Python 3", "Java", "HTML", "CSS", "MySQL", "Unity", "React", "R", "Scheme", "Haskell"]}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default About;