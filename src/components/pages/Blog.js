import React, {Component} from 'react';
import ImageWithText from '../ImageWithText';
import image from '../assets/img/header-blog.jpg';
import ToDoList from '../todo/ToDoList';

class Blog extends Component {
  componentDidMount() {
    document.title = "My Blog"
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
              This page is dedicated to exploring interesting React applications.
            </p>
          </div>
        </section>

        <section className="textbox2">
          <div className="container">
            <h2>A To-Do List</h2>
            <ToDoList/>
          </div>
        </section>
      </div>
    );
  }
}

export default Blog;