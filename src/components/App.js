import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import HomePage from './HomeLandingPage/HomePage';

class App extends React.Component {
    render() {
        console.log('these are the props from app.js', this.props);

        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
    };
}



export default connect(mapStateToProps)(App);
