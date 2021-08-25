import React, {Component} from 'react';
import ImageWithText from '../ImageWithText';
import image from '../assets/img/header-blog.jpg';
import ToDoList from '../todo/ToDoList';
import * as THREE from 'three';

class Blog extends Component {
  componentDidMount() {
    document.title = "My Blog"
    const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight);
    document.body.appendChild( renderer.domElement );

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame( animate );

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render( scene, camera );
		};
		animate();
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
            <h2>Interesting React components</h2>
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
          <div ref={ref => (this.mount = ref)}/>
        </section>
      </div>
    );
  }
}

export default Blog;