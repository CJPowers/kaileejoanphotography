import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as twitterActions from '../actions/twitterActions';
import {browserHistory} from 'react-router';

// for testing/design purposes


class Counter extends React.Component{
    constructor(props, context) {
        super(props, context);

        this.state = {
            counter: this.props.twitter.counter
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        let count = ++this.state.counter;
        this.props.actions.increment(count);
        console.log(this.state.counter);
    }
    decrement() {
        let count = --this.state.counter;
        this.props.actions.decrement(count);
        console.log(this.state.counter);
    }

    render(){
        console.log(this.state.counter);
        console.log('this is my counter props', this.props);
        return (
            <div>
                {this.state.counter}
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
