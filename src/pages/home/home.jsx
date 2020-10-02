import React, { Component } from 'react';
import { Header , Navbar } from "../../components";
// import { Admin , Login } from "../../pages";
import './home.css'


class Home extends Component {
    render() {
      return(
        <div>
          {/* <Header /> */}
          <Navbar />
        </div>
      ) 
    }
}
 
export default Home;