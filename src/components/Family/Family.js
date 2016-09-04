import React from 'react';
import {Link} from 'react-router';
import ImageHolder from '../HomeLandingPage/ImageHolder';
import _ from 'lodash';

require('./Family.css');

function createDataset(baseUrl, count){
  let dataset = [];
  for(let i=1; i<=count; i++){
    let photo = {
      id: i,
      url: baseUrl + i + '.jpg'
    }
    dataset.push(photo);
  }
  console.log(dataset)
  return dataset;
}

const dataset = createDataset('https://s3-us-west-2.amazonaws.com/kaileejoanphotography/family/family', 51);

class Family extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {}
  }
  render(){
      console.log(dataset);
      return (
          <div className='body-container'>
            <h2>Family</h2>
            <ImageHolder
              dataset={dataset}/>
          </div>
      )
  }
}
export default Family;
