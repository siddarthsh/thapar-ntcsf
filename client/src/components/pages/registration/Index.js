import React, { Component } from "react";
import Title from "./../../title/Index";

export default class Index extends Component {
       
    render() {
      return (
        <div className="main-content">


<Title/>




      <div className="container-fluid">
            <div className="row mt-n7">
          <div className="col-12 col-md-6">


          <div className="card">
              <div className="card-body">
                <div className="row align-items-center">
                  
                  <div className="col-12 px-4 py-3 order-lg-1">
                  <h2>
                          Registration Fees
                        </h2>

                        <table className="text-muted">
                          <tbody>
                          <tr><td>Participants (faculty)</td><td>:</td><td> Rs. 3000</td></tr>
                          <tr><td>Students</td><td>:</td><td>Rs. 2500</td></tr>
                          <tr><td>Accompanying Person</td><td>:</td><td>Rs. 1500</td></tr>
                          <tr><td>Foreign Participants</td><td>:</td><td>$ 200</td></tr>
                          </tbody>
                        </table>      
                        
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="col-12 col-md-6">


            <div className="card">
              <div className="card-body">
                <div className="row align-items-center">
                  
                  <div className="col-12 px-4 py-3 order-lg-1">
                  <h2>
                          Bank Details
                        </h2>

                        <table className="text-muted">
                          <tbody>
                          <tr><td>Name of Beneficiary</td><td>:</td><td>THAPAR INSTITUTE OF ENGINEERING AND TECHNOLOGY</td></tr>
                          <tr><td>A/c No</td><td>:</td><td>676010011622</td></tr>
                          <tr><td>Type of A/c</td><td>:</td><td>Savings</td></tr>
                          <tr><td>IFSC Code</td><td>:</td><td>KKBK0000263</td></tr>
                          <tr><td>Swift Code</td><td>:</td><td>KKBKINBB</td></tr>
                          </tbody>
                        </table>   
                        <div className="text-muted"> Bank Name and address : Kotak Mahindra Bank Ltd. <br></br>Leela Bhawan, Patiala, Punjab, India.
                        </div>
                         
                        
                  </div>
                </div>
              </div>
            </div>




          </div>
        </div>

                  
        <div className="row">
              <div className="col-12">
                
                <div className="card">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col">
                        <h6 className="card-title text-uppercase text-muted mb-2">
                          Contact
                        </h6>
                        <span className="h4 mb-0">
                        The registration should be done before September 10, 2019 by filling out the form available here.
                        </span>
                      </div>
                      <div className="col-auto">
                        
                        <span className="h2 fe fe-phone text-muted mb-0"></span>

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
