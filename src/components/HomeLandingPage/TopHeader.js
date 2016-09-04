import React from 'react';
import {Link} from 'react-router';

require('./TopHeader.css');
//const logo = require('../images');

const TopHeader = () => {
        return (
            <div className="top-header">
                <div className="logo"><Link to='/'><img src='https://s3-us-west-2.amazonaws.com/kaileejoanphotography/assets/logo.jpg' alt="kaileejoanphotography"/></Link></div>
            </div>
        )
    }


export default TopHeader;
