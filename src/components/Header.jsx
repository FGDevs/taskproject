import './Header.css'
import React, { useState } from 'react';
import Logo from '../assets/logo-icons.png'
import { Link } from "react-router-dom";

// Library
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  // NavbarText
} from 'reactstrap';
import { RiAccountCircleLine } from "react-icons/ri"

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  // u/ design, ganti 'digantiboder' --> 'border border-secondary' 
  return (
    <div>
      <Navbar className='css-nav-color' color="light" light expand="md">
        <NavbarBrand className='d-flex css-nav-text pt-2 ml-4' href="/">
            <div className='css-companyname' style={{color:"white"}}> FAR </div> 
            <img className='css-companylogo'  
              src={Logo}
              alt='logo-black'
            />
            <div className='css-companyname' style={{color:"white"}}> WAY </div>
        </NavbarBrand>
        <NavbarToggler className='' onClick={toggle} />
        <Collapse className='' isOpen={isOpen} navbar>
          <Nav className="css-nav-text mr-auto" navbar>
            <NavItem className=''>
              <NavLink className='css-nav-text' href="/components/"></NavLink>
            </NavItem>
            <NavItem className=''>
              <NavLink className='css-nav-text' href="https://github.com/reactstrap/reactstrap"></NavLink>
            </NavItem>
          </Nav>
          <UncontrolledDropdown className='pr-5' >
              <DropdownToggle className='css-nav-text css-text-option css-icon-option' nav caret>
                <div className='css-icon-account mr-2' style={{display:'flex', fontSize:30}}><RiAccountCircleLine/></div>
              </DropdownToggle>
              <DropdownMenu className='' right>
                <DropdownItem className='css-dropdown-select'>
                  <Link to='/login' className='css-dropdown-select' style={{textDecoration:'none'}}>
                    Login
                  </Link>  
                </DropdownItem>
                <DropdownItem className='css-dropdown-select'>
                  <Link to='/adminpage' className='css-dropdown-select' style={{textDecoration:'none'}}> 
                    Admin
                  </Link>
                </DropdownItem>
                <DropdownItem className='css-nav-text' divider />
                <DropdownItem className='css-dropdown-select'>
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;