import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";
import Title from "./../../title/Index";
class Index extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
     
    render() {
      return (
        <div className="main-content">


<Title/>



      <div className="container-fluid">
            <div className="row mt-n7">
          <div className="col-12">


          <div className="card">
              <div className="card-body">
                <div className="row align-items-center">
                  
                  <div className="col-12 px-4 py-3 order-lg-1">
                    
                    <h2>
                      Admin Dashboard
                    </h2>

                    <p className="text-muted">
                     Coming Soon
                      </p>
                      <button onClick={this.onLogoutClick} className="btn btn-primary">
                    Sign Out
                    </button>
                
                  </div>
                </div>
              </div>
            </div>







          </div>
        </div>
         
                    
        <div className="credit">
             Made with <span className="red">❤</span> by <a href="https://github.com/siddarthsh">Siddarth Sharma</a>
             </div>
 
          
            </div>
      </div>
      );
      }}



Index.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Index);
