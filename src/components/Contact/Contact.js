import React from 'react';
import {Link} from 'react-router';
import _ from 'lodash';

require('./Contact.css');


class Contact extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {}
  }
  render(){
      return (
          <div className='body-container'>
            <h2>Let me make your moments...</h2>
            <div className='contact-img'>
              <img src='https://s3-us-west-2.amazonaws.com/kaileejoanphotography/assets/contact.jpg' />
            </div>
          </div>
      )
  }
}
export default Contact;
