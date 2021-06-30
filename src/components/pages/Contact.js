import React, {Component} from 'react';
import PageHeader from '../PageHeader';

class Contact extends Component {
  componentDidMount() {
    document.title = "Contact Me"
  }

  render() {
    return(
      <div className="content">
        <div className="container">
          <PageHeader 
            title="Contact Me!"
            subtitle="Use this google form to contact me. You can also contact me via Linkedin or email."
          />

            <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLScPzH6hJ02a9-Q-ObHgc6H79oGPBA1iHmPszFhYNkJLn7pVTw/viewform?embedded=true" 
            id="contact-form" title="contact" width="620" height="900" frameBorder="0">
              Loading…
            </iframe>          
        </div>
      </div>
    );
  }
}

export default Contact;