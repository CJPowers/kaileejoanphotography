import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TopHeader from './TopHeader';
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer';

require('./HomePage.css');

class HomePage extends React.Component {
  constructor(props, context) {
          super(props, context);

          this.state = {}
      }
    render(){
        console.log('these are the props from app.js', this.props);
        return (
            <div className='homepage'>
                <TopHeader
                  showHamburger={this.props.showHamburger} />
                <div className='body-container'>
                  {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}
function mapStateToProps(state, ownProps) {
    return {
      showHamburger: state.menu.showHamburger
    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
