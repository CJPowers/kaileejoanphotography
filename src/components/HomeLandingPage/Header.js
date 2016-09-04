import React from 'react';
import {Link} from 'react-router';
import LoginModal from "./LoginModal";
import SignInModal from "./SignInModal";

require('./Header.css');

const Header = () => {
        return (
            <div className="header">
                <div className="header-menu-options">
                  <div><Link to='/'>Home</Link></div>
                  <div><Link to='engagements'>Engagements</Link></div>
                  <div><Link to='weddings'>Weddings</Link></div>
                  <div><Link to='family'>Family</Link></div>
                  <div><Link to='portraits'>Portraits</Link></div>
                  <div><Link to='contact'>Contact</Link></div>
                  <div><Link to='bio'>Bio</Link></div>
                </div>
            </div>
        )
    }


export default Header;
