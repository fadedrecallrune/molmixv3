import React from "react";
import Header from "../header/Header";
import { Image } from 'react-bootstrap'

import headerimage from "../images/headerimage.jpg";
import { WhoWeAre } from "./WhoWeAre";
import { Speacialization } from "./Specialization";
import { Advantages } from "./Advantages";
import { Directions } from "./directions/Directions";
import Footer from "../footer/Footer";

export const Home = () => (
  <div>
    <Image
      style={{ width: "100%", marginTop: "-20px" }}
      responsive
      src={headerimage}
      alt=""
    />
    <WhoWeAre />
    <Speacialization />
    <Advantages />
    <Directions />
  </div>
);
