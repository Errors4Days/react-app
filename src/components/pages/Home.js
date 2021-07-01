import React, {Component} from 'react';
import ImageWithText from '../ImageWithText';
import image from '../assets/img/header-home.jpg';

class Home extends Component {
  componentDidMount() {
    document.title = "Justin's Website"
  }

  render() {
    return(
      <div className="content">
        <ImageWithText
          title="Welcome To My Website!"
          subtitle="This is my personal website. Here you can find my projects, personal blog, and more."
          image={image}
        />
        <section className="textbox1">
          <div className="container">
            <h2>Welcome visitors!</h2>
            <p> 
              In this website you can find my projects and code. All of the pictures used here are
              my own. The layout and color scheme of the website were created from scratch. This website is built using the React javascript 
              framework. I built it to be fully responsive, so try changing the window size. Feel free to contact me via the contact page. 
              You can learn more about me on the about page. Explore my projects and this website! 
            </p>
            </div>
          </section>
          
        <section className="textbox2">
          <div className="container">
            <h2>About this website</h2>
            <p>
              I built this website using the React JS framework along with HTML and CSS. Everything here is built from scratch including the 
              navbar. On the Projects page you can a see some of my noteworthy projects. I chose to use React JS for this website due
              to React's modularity and built in features. 
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;