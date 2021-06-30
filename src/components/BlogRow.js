import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class BlogRow extends Component {
    render() {
        return(
            <div className="container">
                <Link to="/blog/">{this.props.title}</Link>
                <p>{this.props.description}</p>

            </div>
        );
    }
}
export default BlogRow;