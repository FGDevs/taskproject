import React, { Component } from 'react';
import './css/Header.css'
import { logoicons } from "../assets";


function Header() {
  
  return (
    <section id='header'>
      <div className="main">
        <div className="logo">
          <img src={logoicons} alt="logo-icon"/>
        </div>
      </div>
    </section>
    
  );
}

export default Header;