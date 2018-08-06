import React from 'react'
import './Contacts.css'

const Contacts = () => (
  <div className='contacts-container-box'>
    <h2 style={{marginLeft:'2%', fontWeight:'900'}}>Контакты</h2>

    <div className='contacts-box'>
      <div className='contacts-first-box'>
        <h4 style={{marginBottom:'25px'}} >Контактная информация</h4>

        <p>Компания "Molmix"</p>
        <p>03022 Украина Киев</p>
        <p>ул. Васильковская 34, В-303</p>
        <p>+38 (050) 443-85-49</p>
        <p>+38 (067) 222-80-63</p>
        <p>Email: info@molmix.in.ua</p>
      </div> 

      {/* <div className='contacts-map-box'>
        <h4>Карта проезда </h4>
        <iframe
        style={{width:'100%', height:'100%'}}
        title="map"
        frameborder="0"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyACaHaFmTNfvMA7eLAYBrLm1SOJt0FtVfA
    &zoom=13&language=ru&q=Васильковская 34"
        allowfullscreen
      />
      </div> */}
     </div>
  </div>
        
)

export default Contacts;