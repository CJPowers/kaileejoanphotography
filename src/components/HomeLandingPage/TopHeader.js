import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as menuActions from '../../actions/menuActions';
import HamburgerMenu from 'react-hamburger-menu';
import Header from './Header';

var Menu = require('react-burger-menu').fallDown;


require('./TopHeader.css');
//const logo = require('../images');



class TopHeader extends React.Component {
        constructor(props, context) {
          super(props, context);
          this.state = {
            showHamburger: this.props.showHamburger,
            open:false
          }
        }
        handleClick() {
          this.setState({
              open: !this.state.open
          });
          this.props.actions.toggleHamburger();
        }
        render(){
          console.log('this is props ', this.props);
          console.log('this is state ', this.state);
          let menu = this.state.open? <Header toggleHamburger={this.handleClick.bind(this)}/> : null
          return (
            <div className="top-header">
                <div className="logo"><Link to='/'><img src='https://s3-us-west-2.amazonaws.com/kaileejoanphotography/assets/logo.jpg' alt="kaileejoanphotography"/></Link></div>
                <div className='hamburger'>
                  <HamburgerMenu
                    isOpen={this.state.open}
                    menuClicked={this.handleClick.bind(this)}
                    width={50}
                    height={36}
                    strokeWidth={1}
                    rotate={0}
                    color='gray'
                    borderRadius={0}
                    animationDuration={0.5} />
                </div>
                {menu}
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
      actions: bindActionCreators(menuActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopHeader);
