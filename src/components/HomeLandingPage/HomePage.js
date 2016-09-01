import React from 'react';
import {Link} from 'react-router';
import TopHeader from './TopHeader';
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer';

require('./HomePage.css');

class HomePage extends React.Component {

    render(){
        return (
            <div className='homepage'>
                <TopHeader />
                <Header />
                <MainContent />
                <Footer />
            </div>
        )
    }
}
export default HomePage;
