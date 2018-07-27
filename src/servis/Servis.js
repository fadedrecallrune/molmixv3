import React from 'react'
import './Servis.css'

import mecha from '../images/1111.png'


const Servis = () => (
  <div className='servis-container'>
    <h2 style={{fontWeight:'900',}}>Cервис и ремонт</h2>
    <h6 style={{fontWeight:'700'}} >Ремонт и сервисное обслуживание септиков любых производителей.</h6>

    <div className='servis-mecha'>
      <img src={mecha} alt='' />
      <h5 style={{marginLeft:'1%'}} >  Обслуживание септикa</h5>
    </div>

    <p>Чтобы локальная очистная установка работала исправно, необходимо регулярно проводить чистку станции (минимум 2 раза в год). Такую манипуляцию следует доверить профессионалам, которые откачают ил , удалят излишки и заполнят станцию водой до оптимального уровня. Если излишки не будут полностью удалены, то они загустеют, а система перестанет нормально функционировать. Качественно и оперативно выполнить необходимые действия, направленные на уход за септиком, могут сделать лишь специалисты нашего сервисного центра. Работу с локальной очистной системой должен производить исключительно мастер своего дела, благодаря чему сроки эксплуатации станции станут более длительными, а её функционирование – более эффективным.</p>

    <p style={{fontWeight:'900'}}>Что входит в сервис септика:</p>

    <ul>
      <li>Тщательная проверка технического состояния элементов очистной системы;</li>
      <li>Очистка загрязненных деталей;</li>
      <li>По необходимости, замена неисправных элементов.</li>
      <li>Проверка работоспособности установки.</li>
      <li style={{marginTop:'2%'}}>- Контроль объемной дозы активного ила в очистном сооружении;</li>
      <li>- Удаление излишков активного ила с помощью погружного насоса;</li>
      <li>- Удаление плавающих загрязнений с зеркала воды;</li>
      <li>- Контроль работы и обслуживание воздуходувки;</li>
    </ul>

    <p style={{marginBottom:'-0.5%'}} >Цена обслуживания септика зависит от типа устройства и его технического состояния.</p>

    <p>Тел (050) 443-85-49.</p>

    <ul style={{marginBottom:'5%'}} >
      <li>Помимо сервиса наши специалисты могут произвести квалифицированный ремонт септитка (компрессор, блок и т.д.)</li>
    </ul>
  </div>
)


export default Servis;