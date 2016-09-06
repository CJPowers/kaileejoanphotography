import React from 'react';
import {Link} from 'react-router';

require('./Footer.css');

const Footer = () => {
    return (
        <div className="footer">
          <div className='inner-footer'>
            <div className='copyright'>&#169;2016 By Kailee Burdette</div>
            <div className='social-media-holder'>
              <div className='social-media-icon'>
                <a href='https://www.facebook.com/KaileeJoanPhotography/?fref=ts&ref=br_tf'>
                  <img src='https://static.wixstatic.com/media/d3470ec8ca26475da4b228f0199b5d3d.png/v1/fill/w_40,h_40,al_c,usm_0.66_1.00_0.01/d3470ec8ca26475da4b228f0199b5d3d.png' />
                </a>
              </div>
              <div className='social-media-icon'>
                <a href='https://www.instagram.com/kaileejoan_photography/?hl=en'>
                  <img src='https://static.wixstatic.com/media/530d907aaf7648c89c79be7eea724d9c.png/v1/fill/w_40,h_40,al_c,usm_0.66_1.00_0.01/530d907aaf7648c89c79be7eea724d9c.png' />
                </a>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Footer;
