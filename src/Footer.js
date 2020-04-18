

import React, { Component } from 'react';
import { Container, Col} from 'react-bootstrap';

//import Logoimg from '../images/logonew.png';
import Logoimg from './images/logonew.png';

import  './App.css'; 













export default class Footerdata extends Component {
   

    constructor(props){
      super(props);
  
      this.state = {
        show: false
      }
    
      this.toggleShow = this.toggleShow.bind(this);
      this.hide = this.hide.bind(this);
    }
  
    toggleShow(){
      this.setState({show: !this.state.show});
    }
    hide(e){
      if(e && e.relatedTarget){
        e.relatedTarget.click();
      }
      this.setState({show: false});
    }
    
    render(){
         
          return (
          <footer>
              <Container fluid={true}>
              <div className="row mt-5">
                <div className="col-md-4">
                <img style={{height:"100px"}} src={Logoimg}></img>
                  <p>120 Lorem Street Loreamrod, Bolton, MP6 OAA @ 2019 alldayHelth.com </p>
                </div>
                <div className="col-md-8">
                 <div className="row">
                   <div className="col-md-2">
                   <h6>Company</h6>
                   <p>About Us</p>
                   <p>Blogs</p>
                   <p>Testmonials</p>
                   <p>Press & media</p>
                   </div>
                   <div className="col-md-2">
                    <h6>Product</h6>
                    <p>Treatments</p>
                    <p>Pricing</p>
                    <p>E-prescription</p>
                   </div>
                   <div className="col-md-2">
                     <h6>Careers</h6>
                     <p>Vacancies</p>
                     <p>Doctors</p>
                   </div>
                   <div className="col-md-2">
                     <h6>Corporate</h6>
                     <p>Businesses</p>
                     <p>NHS Practices</p>
                     <p>Pharmacies</p>
                     <p>Cost-u-lator</p>
                   </div>
                   <div className="col-md-3">
                    <h6>Support</h6>
                    <p>Contact Us</p>
                    <p>FAQs</p>
                    <p>Gphc Partner Pharmacy</p>
                   </div>
                 </div>
                 <div className="row">
                     <div className="col-md-8 bg-light">
                         <div className="row">

                         
                     <div className="col-md-5">
                     <h5>Subscribe For Updates</h5>
                     </div>
                     <div className="col-md-5">
                     <input className="form-control" placeholder="Enter Email"  />
                     </div>
                     <div className="col-md-2">
                     <button className="btn btn-info">SUBSCRIBE</button>
                     </div>
                     </div>
                     </div>
                 </div>
                </div>
              </div>
              <hr></hr>
              <div className="row">
                  <div className="col-md-8">
                  <span>Terms & Conditions </span>
                  <span style={{marginLeft:"10px"}} class="vl"></span>
                  <span style={{marginLeft:"10px"}}>Privacy Policy</span>
                  <span style={{marginLeft:"10px"}} class="vl"></span>
                  <span style={{marginLeft:"10px"}}>Cookie Policy</span>
                  <span style={{marginLeft:"10px"}} class="vl"></span>
                  <span style={{marginLeft:"10px"}}>GDPR Policy</span>
                  <span style={{marginLeft:"10px"}} class="vl"></span>
                  <span style={{marginLeft:"10px"}}>Modern Slavery Act</span>
                  <span style={{marginLeft:"10px"}} class="vl"></span>
                  <span style={{marginLeft:"10px"}}>Website Disclaimer</span>
                  </div>
                  <div className="col-md-4">
                  <i className="fas fa-facebook"></i>
                  <i class="fa fa-instagram"></i>
                    <span>
                        11111
                        <i className="fa-facebook"></i>
                    </span>
                  </div>
                  
              </div>
              </Container>
          </footer>
         
        )
      }
  }
