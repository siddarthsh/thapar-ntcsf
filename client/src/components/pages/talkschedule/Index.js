import React, { Component } from "react";
import Title from "./../../title/Index";

export default class Index extends Component {
       
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
                         Talk Schedule
                        </h2>

                        <span className="text-muted">
                          Details will be uploaded soon<br></br><br></br>
                        </span>      
                        
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
