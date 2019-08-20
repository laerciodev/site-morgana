import React, { Component } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';
import img1 from '../../images/imagem-1.jpg';
import img2 from '../../images/imagem-2.jpg';
import img3 from '../../images/imagem-3.jpg';


class Gallery extends Component {

   render() {
      const settings = {
         dots: true,
         infinite: true,
         speed: 1000,
         autoplay: true,
         variableWidth: true,
         useTransform: false,
         zIndex: 1
      }


      return (
         <Slider {...settings}>
            <img className="item-carousel" src={img1} alt='' />
            <img className="item-carousel" src={img2} alt='' />
            <img className="item-carousel" src={img3} alt='' />
         </Slider>
      )
   }


}

export default Gallery;
   




