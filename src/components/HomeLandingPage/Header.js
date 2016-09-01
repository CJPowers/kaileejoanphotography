import React from 'react';
import {Link} from 'react-router';
import LoginModal from "./LoginModal";
import SignInModal from "./SignInModal";

require('./Header.css');

const Header = () => {
        return (
            <div className="header">
                <div className="header-menu-options">
                    <div>Engagements</div>
                    <div>Family</div>
                    <div>Portraits</div>
                    <div><Link to="chart">More</Link></div>
                </div>
            </div>
        )
    }


export default Header;
