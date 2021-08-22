
import React from 'react';
import {Route,Link} from 'react-router-dom';
import Gallery from '../pages/Gallery'


function Header(){
    return (
        <header class="mb-auto">
            <div>
            <h3 class="float-md-start mb-0 text-white">Cover</h3>
            <nav class="nav nav-masthead justify-content-center float-md-end">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                <a class="nav-link" href="#">Features</a>
                <a class="nav-link" href="#">Contact</a>
            </nav>
            </div>
        </header>
    )
}

export default Header;