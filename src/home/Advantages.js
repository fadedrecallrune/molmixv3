import React from "react";
import "./Home.css";

import icon4 from "../images/icons_4.png";
import icon5 from "../images/icons_5.png";
import icon6 from "../images/icons_6.png";


export const Advantages = () => (
  <div className='advantage-container'>
    <h2 style={{textAlign:'center', marginTop:'60px', fontWeight:'900', marginBottom:'30px' }} >Преимущества нашего оборудования </h2>


  <div className="advantage">
  <div  className="advantage-item">
      <img className="home-icon" src={icon5} alt="" />
      <h4>Запатентованная технология</h4>
      <p className='advantage-text' >Запатентованная технология, использованная в сооружениях гарантирует обеспечивает минимальное накопление избыточного ила, который можно закладывать в компост, в результате чего исключаются расходы на его утилизацию.</p>
    </div>

    <div className="advantage-item">
      <img className="home-icon" src={icon4} alt="" />
      <h4 style={{textAlign:'center'}} >Возможность установки в септики и колодцы</h4>
      <p className='advantage-text' >Автономная канализация может быть установлена в существующий септик или колодец</p>
    </div>

    <div  className="advantage-item">
      <img className="home-icon" src={icon6} alt="" />
      <h4 style={{textAlign:'center'}} >Минимальные эксплуатационные расходы</h4>
      <p className='advantage-text' >Минимальные эксплуатационные расходы, которые гарантированы возможностью использования предварительно запрограммированных режимов работы очистного сооружения (гости, отпуск и т.д.)</p>
    </div>
  </div>
  </div>
);