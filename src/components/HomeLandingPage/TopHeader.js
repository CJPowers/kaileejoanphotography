import React from 'react';
import {Link} from 'react-router';

require('./TopHeader.css');
//const logo = require('../images');

const TopHeader = () => {
        return (
            <div className="top-header">
                <div className="logo"><img src='https://static.wixstatic.com/media/30d0d6_0be04e063a9d4c5c99356ed591120a13~mv2.jpg/v1/crop/x_3,y_191,w_771,h_324/fill/w_896,h_378,al_c,lg_1,q_80/30d0d6_0be04e063a9d4c5c99356ed591120a13~mv2.jpg' alt="kaileejoanphotography"/></div>
            </div>
        )
    }


export default TopHeader;
