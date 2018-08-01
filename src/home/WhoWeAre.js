import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

import whoweare from '../images/whoweare.png'

export const WhoWeAre = () => (
  <div className='whoweare' >
    <div className='whowetext'>
      <h1 style={{textAlign:'center'}} >Кто мы?</h1>
      <h4 className='whowearemargin' >Компания «Молмикс» является представителем ООО «ENVI-PUR» в Украине. В нашем портфолио  более 200 проданых, смонтированых и введенных в эксплуатацию больших и малых очистных сооружений BIO Cleaner®.
Регулярный мониторинг и поддержание тесных контактов с клиентами в отношении эксплуатации BIO Cleaner® создает доверие к нашей компании «Молмикс».</h4>
{/* <Link style={{textAlign:'center', marginTop:'25px'}} to='/aboutus'>подробнее </Link> */}

    </div>
    <img className='whoweareimage' src={whoweare} alt='' />
  </div>
)
