import React, { Component } from 'react';
import './home.css'
import BootstrapCarousel from '../../components/BootstrapCarousel.jsx'
import Header from '../../components/Header.jsx'
// import Admin from '../admin'
// import Login from '../login'


class Home extends Component {
    render() {
      return(
        <div>
          <Header />
          <BootstrapCarousel />
          {/* <Admin />
          <Login /> */}
        </div>
      ) 
    }
}
 
export default Home;