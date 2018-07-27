import React from 'react'
import './Shipping.css'

import ship1 from '../images/ship1.png'
import ship2 from '../images/ship2.jpg'
import ship3 from '../images/ship3.jpg'
import ship4 from '../images/ship4.jpg'
import ship5 from '../images/ship5.jpg'
import ship6 from '../images/ship6.jpg'
import ship7 from '../images/ship7.jpg'
import ship8 from '../images/ship8.jpg'
import { ShipppingTable } from './ShippingTable';





const Shipping = () => (
  <div className='shipping-container'>
    <h1 style={{textAlign:'center'}}  >Доставка</h1>
    <p style={{fontWeight:'900', marginTop:'40px'}} >Условия поставки и установки:</p>
    <p>Для всех моделей от «BC-4» до BC-12» срок доставки и установки при наличии на складе до 14 рабочих дней.</p>
    <p>При отсутствии запасов моделей до «BC-12» включительно, срок доставки до двух месяцев.</p>
    <p>Модели "BC-16", "ВС-20" и "ВС-25" срок доставки составляет до 30 рабочих дней.</p>
    <p>Для моделей от «ВС-30» до «ВС-150» срок составляет до 40 рабочих дней.</p>
    <p>Мы поддерживаем постоянный запас моделей BC-4, BC-6, BC-10, ВС-12 со всеми типами автоматизации!</p>

    <div className='shipping-image-box1'>
      <img src={ship1} alt='' />
      <img src={ship2} alt='' />
    </div>

    <h6 style={{textAlign:'center'}} >Производство и склад «ENVI-PUR» s.r.o Чехия -. Город Собеслав</h6>

    <div className='shipping-image-box2'>
      <img src={ship3} alt='' />
      <img src={ship4} alt='' />
      <img src={ship5} alt='' />
      <img src={ship6} alt='' />
    </div>

    <h4 style={{textAlign:'center', fontWeight:'700'}}>Монтаж</h4>
    
    <div className='shipping-image-box2'>
      <img src={ship7} alt='' />
      <img src={ship8} alt='' />
    </div>

    <div className='garant'>
    <h4 style={{fontWeight:'900'}}>Гарантия:</h4>
    <h4>24 месяца (2 года) на оборудование - Контроллер, компрессор, аэраторы.</h4>
    <h4>Полипропиленовый контейнер с установленной в нем технологией «BIO CLEANER» практически вечен.</h4>
    <h4>Осуществляем гарантийное и пост-гарантийное обслуживание!</h4>
    <h4 style={{marginTop:'20px', fontWeight:'900'}}>Параметры очистки:</h4>
    </div>

    <div className='shipping-table'>
    <ShipppingTable />
    </div>

  </div>
)


export default Shipping;