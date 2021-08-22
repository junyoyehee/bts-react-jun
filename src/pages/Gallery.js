
import React from 'react';

import img1 from '../assets/images/about/geeksui-img-1.jpg'
import img2 from '../assets/images/about/geeksui-img-2.jpg'
import img3 from '../assets/images/about/geeksui-img-3.jpg'
import img4 from '../assets/images/about/geeksui-img-4.jpg'
import img5 from '../assets/images/about/geeksui-img-5.jpg'
import img6 from '../assets/images/about/geeksui-img-6.jpg'


const Gallery = () => {
    return (
        <div class="gallery ">

            <figure class="gallery__item gallery__item--1 mb-0">
                <img src={img1} alt="Gallery image 1" class="gallery__img rounded-3"/>
            </figure>

            <figure class="gallery__item gallery__item--2 mb-0">
                <img src={img2} alt="Gallery image 2" class="gallery__img rounded-3"/>
            </figure>

            <figure class="gallery__item gallery__item--3 mb-0">
                <img src={img3} alt="Gallery image 3" class="gallery__img rounded-3"/>
            </figure>

            <figure class="gallery__item gallery__item--4 mb-0">
                <img src={img4} alt="Gallery image 4" class="gallery__img rounded-3"/>
            </figure>

            <figure class="gallery__item gallery__item--5 mb-0">
                <img src={img5} alt="Gallery image 5" class="gallery__img rounded-3"/>
            </figure>

            <figure class="gallery__item gallery__item--6 mb-0">
                <img src={img6} alt="Gallery image 6" class="gallery__img rounded-3"/>
            </figure>
        </div>
    )
};

export default Gallery;

