import React from 'react';
import {Link} from 'react-router';

require('./Header.css');

const Header = ({toggleHamburger}) => {
        return (
            <div className="header">
                <div className="header-menu-options">
                  <div><Link onClick={toggleHamburger} to='/'>Home</Link></div>
                  <div><Link onClick={toggleHamburger} to='engagements'>Engagements</Link></div>
                  <div><Link onClick={toggleHamburger} to='weddings'>Weddings</Link></div>
                  <div><Link onClick={toggleHamburger} to='family'>Family</Link></div>
                  <div><Link onClick={toggleHamburger} to='portraits'>Portraits</Link></div>
                  <div><Link onClick={toggleHamburger} to='contact'>Contact</Link></div>
                  <div><Link onClick={toggleHamburger} to='bio'>Bio</Link></div>
                </div>
            </div>
        )
    }


export default Header;
