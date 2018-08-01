import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap'
import './Header.css'



import molmixlogosmall from '../images/molmixlogosmall.jpg'

export const HeaderNav = () => {
  return (
    <Navbar staticTop fluid collapseOnSelect className='header-nav' >
      <Navbar.Header style={{marginLeft:'20px'}} className='header-brand'  >
      <Link to='/'>  <Navbar.Brand >
      <img className='molmixlogo' src={molmixlogosmall} alt='' />
        </Navbar.Brand></Link>
      </Navbar.Header>
      <Navbar.Toggle  style={{marginTop:"-58px"}} />

    <Navbar.Collapse>

      <Nav style={{marginRight:'00px'}} pullRight >
    <NavItem className='navlink' eventKey={1} href="#">
    <Link to='/aboutus'>  О НАС</Link>
    </NavItem>
    <NavItem className='navlink' eventKey={2} href="#">
      ГАЛЕРЕЯ
    </NavItem>
    <NavItem className='navlink' eventKey={3} href="#">
     <Link to='/shipping'> ДОСТАВКА</Link>
    </NavItem>
    <NavItem className='navlink' eventKey={4} href="#">
    <Link to='/montag'> МОНТАЖ</Link>
    </NavItem>
    <NavItem className='navlink' eventKey={5} href="#">
     <Link to='/servis'> СЕРВИС </Link>
    </NavItem>
    <NavItem className='navlink' eventKey={6} href="#">
      <Link to='/sravnenie'> СРАВНЕНИЕ </Link>
    </NavItem>
    {/* <NavItem className='navlink' eventKey={7} href="#">
      СЕРТИФИКАТЫ
    </NavItem> */}
    <NavItem className='navlink' eventKey={7} href="#">
     <Link to='/contacts'> КОНТАКТЫ </Link>
    </NavItem>
  </Nav>

    </Navbar.Collapse>

    </Navbar>
  )
}



