import React from "react";
import Header from "../header/Header";
import { Image } from 'react-bootstrap'
import './Home.css'
import headerimage from "../images/headerimage.jpg";
import { WhoWeAre } from "./WhoWeAre";
import { Speacialization } from "./Specialization";
import { Advantages } from "./Advantages";
import { Directions } from "./directions/Directions";
import Footer from "../footer/Footer";

export const Home = () => (
  <div className='home-container' >
    <div className='header-image-box'>
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
    </div>
    <WhoWeAre />
    <Speacialization />
    <Advantages />
    <Directions />
  </div>
);
