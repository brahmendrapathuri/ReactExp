import React, { Component } from 'react';
import { Container,Row, Col} from 'react-bootstrap';
import expimg from './images/dc6.jpg'
import googleplay from './images/googleplay.png'
import appstore from './images/appstore.png'


import './App.css'

//import Footerdata from '../Templates/footer';
import Headerdata from './Header'
import Footerdata from './Footer'








  

 const seconddata = {
    float : "right",
    paddingTop:"50px",
  }
 

class App extends Component {
    render(){
        
        return (
            <div>
            <Headerdata/>
            <Bodydata/>
            <Footerdata/>
           
            </div>
            
      );
    }
}



class Bodydata extends Component {

    render(){
        
        return (
          <div>
       <section>


         

                  <div className="seconddata imgmargin">
                  <Container>
                      <div style={seconddata}>
                      
                      
                      <Col md="6" xs="12">
                      <h6>ONLINE DOCTOR</h6>
                      <h1 style={{color:"#3277BC"}}>Connect With A Doctor</h1>
                      <h1>Instantly</h1>
                      <h5>GMC Registered - CQC Regulated - Quick Responce</h5>
                       
                         <p style={{textAlign:"justify"}}>
                             alldayHelth has made it easy for to get fast effective treatments for some of your more 'embarrassing' problems.Through our easy to fill in online questions get treated here, allday, everyday
                         </p>

                         <div>
                       <a className="btn btn-outline-primary" style={{textDecoration:"none"}} href={"/#"}>Book Appointment</a>
                        </div>
                         
                      </Col>
 
                      </div>
                  </Container>
                  </div>
             
      </section>
      <br></br>
      <section>
        <Container>
          <div className="row">
             <div className="col-md-4 col-sm-12 col-xs-12">
                <div className="card firstdata" style={{height:"230px"}}>
                  <Container>
                    <div className="col-md-6">
                    <h3>Corporate Doctors</h3>
                    </div>
                    <div className="col-md-1 carddata">
                    <i style={{color:"darkcyan"}} class="fa fa-chevron-right"></i>
                    </div>
                    
                  </Container>
                    
                </div>
             </div>
             <div className="col-md-4 col-sm-12 col-xs-12">
             <div className="card secondcard" style={{height:"230px"}}>
             <Container>
                    <div className="col-md-6">
                    <h3>Doctors Medicine</h3>
                    </div>
                    <div className="col-md-1 carddata">
                    <i style={{color:"darkcyan"}} class="fa fa-chevron-right"></i>
                    </div>
                  </Container>
            </div>
             </div>
             <div className="col-md-4 col-sm-12 col-xs-12">
             <div className="card thirdcard" style={{height:"230px"}}>
             <Container>
                    <div className="col-md-8">
                    <h3>Online Appointment</h3>
                    </div>
                    <div className="col-md-1 carddata">
                    <i style={{color:"darkcyan"}} class="fa fa-chevron-right"></i>
                    </div>
                  </Container>
             </div>
             </div>
          </div>
        </Container>
      </section>
      <br></br>
      <section>


         

                  <div className="thirddata imgmargin">
                  <Container>
                      <div style={seconddata}>
                      
                      
                      <Col md="6" xs="12">
                      <h6>LOREM IPSUM IS</h6>
                      <h1 style={{color:"#3277BC"}}>See & get Treated by a doctor at click of</h1>
                      <h1>a button</h1>
                      <h5>GMC Registered - CQC Regulated - Quick Responce</h5>
                       
                         <p style={{textAlign:"justify"}}>
                             alldayHelth has made it easy for to get fast effective treatments for some of your more 'embarrassing' problems.Through our easy to fill in online questions get treated here, allday, everyday
                         </p>

                         <div>
                       <a className="btn btn-outline-primary" style={{textDecoration:"none"}} href={"/#"}>Book Appointment</a>
                        </div>
                         
                      </Col>
 
                      </div>
                  </Container>
                  </div>
             
      </section>
      <br></br>
      <section>
        <Container>
          <h1>Latest Articles</h1>
          <div className="row">
             <div className="col-md-4">
              <div className="row">
                <div className="col-md-12">
                <img style={{height:"200px",width:"100%"}} src={expimg}></img>
                <p>20 Feb 2019</p>
                <h3>A Healthy Take on Asian Cuisine</h3>
                <p>Do you happen to be looking for the best free medical website templates? You are in the right place because we have created many great templates and are giving them away for free. All of them! They are suited for physicians, doctors, dentist, clinics, hospitals and anyone else involved in the healthcare and pharmaceutical industry.</p>
                </div>
              </div> 
             
             </div>
             
             <div className="col-md-4">
                   <img style={{height:"200px",width:"100%"}} src={expimg}></img>
                   <p>20 Feb 2019</p>
                   <p>Let's Talk About sex-Education coming from a...</p>
             </div>
             <div className="col-md-4">
             <img style={{height:"200px",width:"100%"}} src={expimg}></img>
             <p>20 Feb 2019</p>
             <p>Online Gp Consultations - The Future is Bright</p>
             </div>
          </div>
        </Container>
      </section>
      <br></br>
      <section>
      <div style={{minHeight: "400px"}} className="imgbg">
        <Container fluid={true}>
         <div className="row">
           <div className="col-md-6 col-sm-12 col-xs-12 mt-5 text-white">
               <h2>Download the Free alldayHelth app</h2>
               <p>Do you happen to be looking for the best free medical website templates? You are in the right place because we have created many great templates and are giving them away for free. All of them! They are suited for physicians, doctors, dentist, clinics, hospitals and anyone else involved in the healthcare and pharmaceutical industry.</p>
           </div>
           <div className="col-md-3 col-sm-12 col-xs-12 mt-5">
             <img style={{height:"80px"}} src={googleplay}></img>
           </div>
           <div className="col-md-3 col-sm-12 col-xs-12 mt-5">
           <img style={{height:"80px"}} src={appstore}></img>
           </div>

         </div>
        </Container>
        </div>
      </section>
      </div>
            );
        }
    }

    
       
export default App;
