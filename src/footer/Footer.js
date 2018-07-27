import React from 'react'
import './Footer.css'

import whitelogo from '../images/molmixlogosmall.jpg'

// const Footer = () => {
//   return (
//     <div style={{display:'flex', flexDirection:'column'}}>
//     <div className='footer'>

//     <div style={{width:'300px', marginLeft:'80px', marginTop:'50px'}} className=''>
//     <img style={{width:'50%'}} src={whitelogo} alt='' />
//       <p  >Компания Molmix со своим многолетним опытом – одна из немгоих в Украине, успешно занимающаяся продажей, установкой и обслуживанием оборудования для экологии, ориентированного главным образом для очистки сточных вод.</p>
//     </div>

//     <div className='contacts'>
//     <h4 style={{fontWeight:'900'}} >Контактная информация</h4>
//       <p>Компания "Molmix"</p>
//       <p>03022 Украина Киев </p>
//       <p>ул. Васильковская 34, В-303</p>
//       <p>+38 (050) 443-85-49</p>
//       <p>+38 (067) 222-80-63</p>
//       <p>Email:info@molmix.in.ua</p>
//     </div>

//     <div className='map'>
//     <iframe
//         className="map"
//         title="map"
//         frameborder="0"
//         src="https://www.google.com/maps/embed/v1/place?key=AIzaSyACaHaFmTNfvMA7eLAYBrLm1SOJt0FtVfA
//     &zoom=13&language=ru&q=Васильковская 34"
//         allowfullscreen
//       />
//     </div>
    
//       </div>
//       <div style={{backgroundColor:'#333333', color:'white', height:'50px'}}>
//         <p style={{textAlign:'center', marginTop:'15px'}} >Copyright © 2015 Компания Molmix. Все права защищены.</p>
        
//       </div>
//     </div>
//   )
// }
const Footer = () => (
  <div style={{display:'flex', flexDirection:'column'}}>
    <div className='footer'>
      <div className='logo-container'>
        <div className='logo'>
         <img style={{width:'60%'}} src={whitelogo} alt='' />
          
        </div>
          <div className='logo-text'>
        <span >Компания Molmix со своим многолетним опытом – одна из немгоих в Украине, успешно занимающаяся продажей, установкой и обслуживанием оборудования для экологии, ориентированного главным образом для очистки сточных вод.</span>
        </div>
      </div>

      <div className='contacts-container'>
        <div className='contacts'>
        <h4 style={{fontWeight:'900'}} >Контактная информация</h4>
      <p>Компания "Molmix"</p>
      <p>03022 Украина Киев </p>
      <p>ул. Васильковская 34, В-303</p>
      <p>+38 (050) 443-85-49</p>
      <p>+38 (067) 222-80-63</p>
      <p>Email:info@molmix.in.ua</p>
        </div>
      </div>

      <div className='map-container'>
      <iframe
        style={{width:'100%', height:'100%'}}
        title="map"
        frameborder="0"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyACaHaFmTNfvMA7eLAYBrLm1SOJt0FtVfA
    &zoom=13&language=ru&q=Васильковская 34"
        allowfullscreen
      />
      </div>
    </div>
    <div style={{backgroundColor:'#333333', color:'white', height:'50px'}}>
        <p style={{textAlign:'center', marginTop:'15px'}} >Copyright © 2015 Компания Molmix. Все права защищены.</p>
        
      </div>
  </div>
)
export default Footer



