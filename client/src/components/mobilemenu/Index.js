import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class MobileMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {addClass: false}
  }
  toggle() {
    this.setState({addClass: !this.state.addClass});
		this.setState({
			shown: !this.state.shown
		});
  }
	render() {
    let boxClass = ["menu"];
    if(this.state.addClass) {
      boxClass.push('open');
    }
    var hidden = {
			display: this.state.shown ? "block" : "none"
		}
    let windowWidth = (window.innerWidth >= 760);
    if (windowWidth) {
    return(
      <></>
    );
    }
    else{
		return (
			<div className="container center">


        <div id="mobileMenu" className={boxClass.join(' ')}>
        <div className="wrapper">
            <div className="inner">
                    <nav className="mobile" style={ hidden }>

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
 
                        </nav>


            </div>
        </div> 
        <div id="hamburger" className="hamburger" onClick={this.toggle.bind(this)}>
            <p><span></span></p>
        </div>
         </div>
			</div>
		)
  }
}
}