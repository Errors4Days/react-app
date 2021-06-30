import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// Header for all pages.
class PageWrapper extends Component{
	constructor(props) {
		super(props);
		this.state = {display: false};
		this.toggle = this.toggle.bind(this);
  }

	toggle() {
		this.setState({display: !this.state.display});
	}

	render() {
		return(
			<div>
				<header>
					<div className="container">
						<nav className="navbar">
							<div className="subbar">
								<div id="logo">
									<h1>Justin's Website</h1>
								</div>

								<div className="burger-button" onClick={this.toggle}>
									<div className="bar bar1" id={this.state.display ? "turn" : ""}/>
									<div className="bar bar2" id={this.state.display ? "turn" : ""}/>
									<div className="bar bar3" id={this.state.display ? "turn" : ""}/>
								</div>
							</div>

							<div className="navbar-links" id={this.state.display ? "show" : ""}>
								<ul>
									<li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
									<li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
									<li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
									<li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
									<li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
								</ul>
							</div>
						</nav>
					</div>
				</header>
				{/* The children refers to the rest of the page. */}
				{this.props.children}
			</div>
		)
	}
}

export default PageWrapper;	