import React from 'react';
import {Link} from 'react-router';
import Masonry from 'react-masonry-component';

require('./ImageHolder.css');

var masonryOptions = {
    transitionDuration: 0
};

const ImageHolder = ({dataset}) => {
    var images = dataset.map(image=>{
      return (
        <div key={image.id} className='image-element-class img-div'>
          <img src={image.url} />
        </div>
      )
    })
    return (
      <Masonry
              className={'img-container'}
              options={masonryOptions}
              disableImagesLoaded={false}
              updateOnEachImageLoad={false} >
        {images}
      </Masonry>
    )
}


export default ImageHolder;
