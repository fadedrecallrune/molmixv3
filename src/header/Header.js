import React from 'react'
import './Header.css'

import molmixlogo from '../images/molmixlogo.jpg'
import { HeaderPhones } from './HeaderPhones';
import { HeaderNav } from './HeaderNav';


const Header = () => {
  return (
    <div>
      <HeaderPhones />
      <HeaderNav />
    </div>
  )
}


export default Header;



{/* <Navbar style={{backgroundColor:'white'}} className='hader'>
      <Navbar.Header>
        <img className='molmixlogo' src={molmixlogo} alt='' />
          </Navbar.Header>
          <Nav>
      <NavItem>
      <h3 className='header-phones' >(050) 443-85-49</h3>

        </NavItem>
        <NavItem>
          <h3 className='header-phones' >‎(067) 222-80-63</h3>

          </NavItem>
          </Nav>
    </Navbar> */}