import React from 'react'
import './Montag.css'

import aboutus2 from '../images/aboutus2.png'
import montag1 from '../images/montag1.png'
import montag2 from '../images/montag2.png'
import montag3 from '../images/montag3.png'
import montag4 from '../images/montag4.png'
import montag5 from '../images/montag5.png'
import montag6 from '../images/montag6.png'
import montag7 from '../images/montag7.png'
import montag8 from '../images/montag8.png'
import montag10 from '../images/montag10.png'





const Montag = () => (
  <div className='montag-container'>

    <h1 className='margin-left' >Монтаж</h1>

    <p>Очистные сооружения BIO Cleaner® устанавливаются на бетонную подушку толщиной 100 мм. Монтаж осуществляется один раз в траншею, соответствующую размеру конкретной модели установки очистки и может быть закрыта с тем же уровнем траншеи без дополнительного усиления. Станции очистки сточных вод BIO Cleaner® изготовлены из чрезвычайно прочного, высококачественного и однородного полипропилена.</p>

    <div className='' style={{display:'flex', justifyContent:'center', marginBottom:'3%'}} >
    <img  src={aboutus2} alt='' />
    </div>

    <div className='montag-images' >
    <img src={montag1} alt='' />

    <img src={montag2} alt='' />
    </div>

    <div className='' style={{display:'flex', justifyContent:'center', marginBottom:'3%'}} >
    <img src={montag3} alt='' />
    </div>


    <p>Надстройка для очистных сооружений используется, когда канализационная труба закопана ниже чем на 60см. Его высота выбирается таким образом, чтобы крышка станции стояла на уровне земли.</p>

    <div className='montag-images3' className=''>
    <img className='montag-group-image' src={montag4} alt='' />
    <img src={montag10} alt='' />

    </div>

    <div className='montag-images2' >
    <img src={montag5} alt='' />

    <img src={montag6} alt='' />

    <img src={montag7} alt='' />

    <img src={montag8} alt='' />
    </div>

    
  </div>
)



export default Montag;