// rsc এটার মাধ্যমে একটা স্ট্রাকচার অ্যাড করা যায় ।
import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Review</a>
                <a href="/manage">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;