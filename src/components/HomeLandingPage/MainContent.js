import React from 'react';
import {Link} from 'react-router';
var Slider = require('react-slick');

require('./MainContent.css');
require('slick-carousel');


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

const dataset = createDataset('https://s3-us-west-2.amazonaws.com/kaileejoanphotography/portraits/portraits', 14);

const images = dataset.map(image=>{
  return (
    <div key={image.id} className='slider-img-div'>
      <img src={image.url} />
    </div>
  )
})

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

class MainContent extends React.Component {
  constructor(props, context) {
        super(props, context);

        this.state = {}
  }

  render(){

    return (
      <div className="container">
        <Slider {...settings}>
          {images}
        </Slider>
      </div>
    )
  }
}
export default MainContent;
