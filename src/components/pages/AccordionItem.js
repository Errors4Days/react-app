import React, {Component} from 'react';

class AccordionItem extends Component{
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  
  render() {
    return(
      <div>
       <button className="accordionButton"
        onClick={() => this.setState({open: !this.state.open})}
        >
          {this.props.title}
        </button>

        <div className={"accordion" + (this.state.open ? "Show" : "Hide")}>
          <div className="accordionShowItem">
            <iframe width="600" height="500" src={this.props.url} title="YouTube video player" 
            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;" allowFullScreen>
            </iframe>
          </div>
          <div className="accordionShowItem">
            {this.props.description}
          </div>
        </div>
      </div>
    );
  }
}

export default AccordionItem;