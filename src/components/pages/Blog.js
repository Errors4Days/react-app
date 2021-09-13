import React, {Component} from 'react';
import ImageWithText from '../ImageWithText';
import image from '../assets/img/header-blog.jpg';
import ToDoList from '../todo/ToDoList';
//import * as THREE from 'three';

class Blog extends Component {
  componentDidMount() {
    document.title = "My Blog";
  }

  render() {
    return(
      <div className="content">
        <ImageWithText
          title="A Random Blog"
          subtitle=""
          image={image}
          icons={false}
        />
        <section className="textbox1">
          <div className="container">
            <h2>Interesting React Components</h2>
            <p>
              This page is dedicated to exploring interesting React applications. So far it contains a to-do list and an animation
              experiment.
            </p>
          </div>
        </section>

        <section className="textbox2">
          <div className="container">
            <h2>A To-Do List</h2>
            <p>Fully interactive to-do list. Built with native React.</p>
            <ToDoList/>
          </div>
        </section>

        <section className="textbox1">
          <div className="container">
            <h2>Fun with Blender</h2>
            <p>
              Over the summer I learned React and some blender. I wanted to learn blender after seeing really impressive 3D animations.
              Blender is a 3D rendering tool for creating models and animations. Here is some of my work!
            </p>

            <div>
              <h3>Fancy Rolling Ball</h3>
              <iframe width="600" height="500" src="https://www.youtube.com/embed/17szWB6p2M4" 
              title="YouTube video player" frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; " allowfullscreen></iframe>
              <p>
                This is my most recent render. I took inspiration from a youtube challenge, in which contestants would animate a
                a falling ball. I used a 3D rendering service, Blendergrid to render out the video since it would have taken many hours to 
                render on my own computer.
              </p>
            </div>

            <div>
              <h3>Basic Rolling Ball</h3>
              <iframe width="600" height="500" src="https://www.youtube.com/embed/kHPvQkOv_Og" title="YouTube video player" 
              frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;" allowfullscreen></iframe>            
            </div>

            <div>
              <h3>Chair Tutorial</h3>
              <iframe width="600" height="500" src="https://www.youtube.com/embed/4ZrlCMsR9bw" title="YouTube video player" 
              frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;" allowfullscreen></iframe>
            </div>

            <div>
              <h3>Doughnut Tutorial</h3>
              <iframe width="600" height="500" src="https://www.youtube.com/embed/IYf4LonneIE" 
              title="YouTube video player" frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media;" allowfullscreen></iframe>
              <p>
                I followed a Blender guru's guide.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Blog;