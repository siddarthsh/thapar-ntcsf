import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Sidebar extends Component {
  render() {
    let windowWidth = (window.innerWidth <= 760);
    if (windowWidth) {
    return(
      <></>
    );
    }
    else{
    return (
      <nav className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light" id="sidebar">
        <div className="container-fluid">

          <Link className="navbar-brand" to="/">
            <img src="logo.png" className="navbar-brand-img 
            mx-auto" alt="..." />
          </Link>

          <div className="collapse navbar-collapse" id="sidebarCollapse">

            <ul className="navbar-nav mb-md-4">
            <li className="nav-item">
                <Link className="nav-link " to="/">
                  <i className="fe fe-home"></i> Home 
                </Link>
            </li>             
            <li className="nav-item">
                <a className="nav-link " href="http://www.thapar.edu/academics/schools/school-of-mathematics">
                  <i className="fe fe-book-open"></i> School of Mathematics
                </a>
            </li>            
            <li className="nav-item">
                <Link className="nav-link " to="/registration">
                  <i className="fe fe-user"></i> Registration
                </Link>
            </li>             
            <li className="nav-item">
                <Link className="nav-link " to="/accomodation">
                  <i className="fe fe-umbrella"></i> Accomodation &amp; Travel
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link " to="/schedule">
                  <i className="fe fe-clipboard"></i> Talk Schedule
                </Link>
            </li>        
              
            </ul>
            <div className="mt-auto"></div>


            <div className="navbar-user d-none d-md-flex">
            <Link to="/" className="red">
                NTCSF
                  <h6>
                11-12 October, 2019
              </h6>
            </Link>
        

            </div>



          </div>


          </div>
  </nav>

    );
    }
  }
}
