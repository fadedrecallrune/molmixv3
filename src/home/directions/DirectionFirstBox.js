import React from 'react'
import "../Home.css";
import { DirectionFirstTable } from "./DirectionFirstTable";


import image2 from '../../images/direction.png';


export const DirectionFirstBox = () => (
  <div className="direcion">
  <h2
    style={{ textAlign: "center", marginTop: "50px", marginBottom: "50px", fontWeight:'700' }}
  >
    Основные направления нашей работы
  </h2>

  <div className="direction-container">
    <div className='direction-sub-container'>
      <h4 style={{fontWeight:'700', textAlign:'center'}} > Установка индивидуальных очистных сооружений </h4>
      <p className='direction-text' style={{ marginTop: "20px" }}>
        Индивидуальные ОС сточных вод, предназначенные для очистки стоков из
        самых маленьких индивидуальных источников загрязнения, а именно
        частных домов, маленьких пансионов и т.д. С точки зрения
        производительности, полностью заменяют старые септики, выгребные ямы,
        биодисковые очистные сооружения или другие сооружения для очистки
        канализационных сточных вод и соответствуют современному образу жизни.
      </p>
      <p className='direction-text' style={{ marginTop: "30px", textAlign:'center' }}>
        Основные характеристики индивидуальных очистных сооружений BioCleaner®
      </p>
      <DirectionFirstTable />
    </div>

    <div className='direction-sub-container'>
      <img style={{ width: "100%" }} src={image2} alt="" />
    </div>
  </div>
</div>
)