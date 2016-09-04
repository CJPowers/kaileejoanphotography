import React from 'react';
import {Link} from 'react-router';
import _ from 'lodash';

require('./Bio.css');


class Bio extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {}
  }
  render(){
      return (
          <div className='body-container'>
            <h2>About Kailee Burdette</h2>
            <div className='about-img'>
              <img src='https://s3-us-west-2.amazonaws.com/kaileejoanphotography/assets/bio.jpg' />
            </div>
            <p className='bio-paragraph'>Hey Y'all!</p>
            <div></div>
            <div></div>
            <p className='bio-paragraph'>My name is Kailee Burdette, I am from Dallas,Texas and I am photographer located
            in the Utah County area. I am a wife and mother to an amazing husband and little boy.  ​
            I studied photography and graduated with a degree in business management from
            Utah Valley University.  I have a strong passion for photography and absolutely
            love what I do.  I work hard to go above and beyond for my clients.  Driving and
            exploring for that PERFECT location is a hobby of mine. I spend a lot of my free
            time scouting out your dream location.</p>
            <div></div>
            <div></div>
            <p className='bio-paragraph'>I am extremely detail oriented, and will work hard to make my clients ecstatic
            about their loving memories I capture. This is not just my business, its my passion.
            Sometimes you will never know the true value of a moment, until it becomes a memory.</p>
          </div>
      )
  }
}
export default Bio;
