import React from "react";
import Header from "../header/Header";
import { Image, Carousel } from 'react-bootstrap'
import './Home.css'
import headerimage from "../images/headerimage.jpg";
import { WhoWeAre } from "./WhoWeAre";
import { Speacialization } from "./Specialization";
import { Advantages } from "./Advantages";
import { Directions } from "./directions/Directions";
import Footer from "../footer/Footer";
import sliderhome from '../assets/slide_home_3.jpg'
import sliderrest from '../assets/slide_restoran_3.jpg'

export const Home = () => (
  <div className='home-container' >
    {/* <div className='header-image-box'>
    <Image
      className='header-image'
      responsive
      src={headerimage}
      alt=""
    />
    <div className='header-image-caption'>
        <h1>BioCleaner</h1>
        <p>в гармонии с природой</p>
    </div>
    </div> */}

    <Carousel>
      <Carousel.Item>
        <img src={sliderhome} alt=''/>
      <Carousel.Caption className='carouse-caption' >
        <div className='header-image-caption'>
          <h1 >BioCleaner</h1>
          <h2 >в гармонии с природой</h2> 
        </div>
      </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={sliderrest} alt='' />
        <Carousel.Caption className='carouse-caption' >
        <div className='header-image-caption'>
          <h1 >Molmix</h1>
          <h2 >сделаем Украину цветущей</h2> 
        </div>
      </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <WhoWeAre />
    <Speacialization />
    <Advantages />
    <Directions />
  </div>
);
