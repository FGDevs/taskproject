import React, { Component } from 'react';
import './css/Header.css'
import { logoicons } from "../assets";


function Header() {
  
  return (
    <section id='header'>
      <div className="main">
        <div className="navlink-menu">
          <div> Product </div>
          <div> Sale </div>
          <div> Contact </div>
        </div>
        <div className="logo">
          <img src={logoicons} alt="logo-icon"/>
        </div>
        <div className="navlink-user">
          {
            // // isLogin
            // <>
            //   <div> login / regis </div>
            // </>
            <>  
              <div> Cart </div>
              <div> Username </div>
            </>
          }
        </div>
      </div>
    </section>
  );
}

export default Header;