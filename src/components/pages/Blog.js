import React, {Component} from 'react';
import ImageWithText from '../ImageWithText';
import image from '../assets/img/header-blog.jpg';
import ToDoList from '../todo/ToDoList';
import AccordionItem from './AccordionItem';
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
              This page is dedicated to exploring interesting libraries and technology.
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

        <section className="textbox1 container">
         <h2>Fun with Blender</h2>
            <p>
              Over the summer I learned React and some blender. I wanted to learn blender after seeing really impressive 3D animations.
              Blender is a 3D rendering tool for creating models and animations. Here is some of my work!
            </p>

          <AccordionItem
          title="Fancy Rolling Ball"
          url="https://www.youtube.com/embed/17szWB6p2M4"
          description="This is my most recent render. I took inspiration from a youtube challenge, in which contestants would 
          animate a rolling ball. I used a 3D rendering service, Blendergrid to render out the video since my computer isn't
          very powerful."
          />

          <AccordionItem
          title="Basic Rolling Ball"
          url="https://www.youtube.com/embed/kHPvQkOv_Og"
          description="A fun experiment with the Blender physics engine. I followed a youtube tutorial to learn the basics."
          />

          <AccordionItem
          title="Chair Tutorial"
          url="https://www.youtube.com/embed/4ZrlCMsR9bw"
          description="Another tutorial made by Blender Guru. This tutorial focused mainly on modeling and studio lighting."
          />

          <AccordionItem
          title="Doughnut Tutorial"
          url="https://www.youtube.com/embed/IYf4LonneIE"
          description="The infamous doughnut tutorial. I followed the Blender Guru's introductory tutorial for blender. After completing it I added my own twist by
          adding steam."
          />

        </section>
      </div>
    );
  }
}

export default Blog;