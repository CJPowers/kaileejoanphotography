import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Masonry from 'react-masonry-component';

require('./ImageHolder.css');

var masonryOptions = {
    transitionDuration: 0
};

const loadingGif = (<div className='loading'>
    <img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif' />
  </div>);

class ImageHolder extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      classes: 'image-holder'
    }
    this.show = this.show.bind(this);
    this.handleImagesLoaded = this.handleImagesLoaded.bind(this);
  }
  show(){
    this.setState({ classes: 'image-holder', loading: false })
  }
  hide(){
    this.setState({ classes: 'image-holder hide', loading: true })
  }
  componentDidMount() {
      this.hide();
  }
  handleImagesLoaded(imagesLoadedInstance) {
      this.show();
  }

  render() {
    var images = this.props.dataset.map(image=>{
      return (
        <div key={image.id} className='image-element-class img-div'>
          <img src={image.url} />
        </div>
      )
    })
    return (
      <div className={this.state.classes}>
        {this.state.loading? loadingGif: null}
        <Masonry
                onImagesLoaded={this.handleImagesLoaded}
                className={'img-container'}
                options={masonryOptions}
                disableImagesLoaded={false}
                updateOnEachImageLoad={true} >
          {images}
        </Masonry>
      </div>
    )
  }
}


function mapStateToProps(state, ownProps) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageHolder);
