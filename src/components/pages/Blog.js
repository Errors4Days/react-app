import React, {Component} from 'react';
import ImageWithText from '../ImageWithText';
import image from '../assets/img/header-blog.jpg';

import BlogRow from '../BlogRow';

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
        />
        <h1>
          This section of the website is incomplete.
        </h1>

      </div>
    );
  }
}

export default Blog;