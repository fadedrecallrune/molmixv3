import React from 'react'
import '../Home.css'
import { DirectionSecondTable } from './DirectionSecondTable'

import image2 from '../../images/direction2.png';


export const DirectionSecondBox = () => (
  <div style={{marginTop:'50px'}} className="direcion">
  

  <div className="direction-container">
  <div className='direction-sub-container' >
      <img className='secondboximage' style={{ width: "100%" }} src={image2} alt="" />
    </div>


    <div className='direction-sub-container2'>
      <h4 style={{fontWeight:'700', textAlign:'center'}} >Установка комплексных очистных сооружений</h4>
      <p className='direction-text' style={{ marginTop: "20px", textAlign:'center' }}>
        Комплексные очистные сооружения предназначенны для очистки сточных вод от малых изолированных источников, как, например, микрорайоны посёлков, горные отели, кемпинги, гостиницы, бензозаправочные станции или маленькие производства.
      </p>
      <p className='direction-text' style={{ marginTop: "30px", textAlign:'center' }}>
      Основные характеристики комплексных очистных сооружений BioCleaner®
      </p>
      <DirectionSecondTable />
    </div>

    
  </div>
</div>
)




