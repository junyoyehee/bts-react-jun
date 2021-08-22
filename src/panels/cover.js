
import React from 'react';
//import '../scss/main.scss';
import '../panels/Cover.css';
import {Link} from 'react-router-dom';
import Gallery from '../pages/Gallery';



function Cover(){
    return (
        
        <main class="px-3">
            <i class="bi bi-alarm"></i><h1 class="text-white">Cover your page.</h1>
            <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
            <p class="lead">
             <Link to="/Gallery">
                <a href="#" class="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</a>
            </Link>
            </p>
        </main>

    )
}

export default Cover;