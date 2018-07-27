import React from "react";
import "./Home.css";

import icon1 from "../images/icons_1.png";
import icon2 from "../images/icons_2.png";
import icon3 from "../images/icons_3.png";



export const Speacialization = () => (
  <div className='specialization-container'>
    <h2 style={{textAlign:'center', marginTop:'60px', fontWeight:'900', marginBottom:'30px' }} >Наша специализация </h2>
    
  <div className="specialization">
    <div className="special-item">
      <img className="home-icon" src={icon1} alt="" />
      <h6 style={{fontWeight:'700'}} >Продажа очистных сооружений</h6>
    </div>

    <div className="special-item">
      <img className="home-icon" src={icon2} alt="" />
      <h6 style={{fontWeight:'700'}} >Установка очистных сооружений</h6>
    </div>

    <div className="special-item">
      <img className="home-icon" src={icon3} alt="" />
      <h6 style={{fontWeight:'700'}} >Обслуживание очистных сооружений</h6>
    </div>
  </div>
  </div>
);
