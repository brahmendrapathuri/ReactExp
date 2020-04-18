

import React, { Component } from 'react';
import { Container, Col} from 'react-bootstrap';

import Logoimg from './images/logonew.png';

import  './App.css'; 













export default class Headerdata extends Component {
   

  constructor(props){
    super(props);

    
  }
  
    
    
    render(){
         
          return (
        <div>
         <header>
          <nav  className="navbar navbar-expand-lg navbar-light">
         
         <Container fluid={true}>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <Col md="3" xs="6" sm="4" lg="2">
            <img style={{width:"100%"}} src={Logoimg}></img>
            </Col>
            
           
            <Col md="9" xs="12" sm="8" lg="10">
            <div className="collapse navbar-collapse float-right"  id="navbarSupportedContent">
              <ul style={{fontSize: "18px"}} className="navbar-nav mr-auto">
                <li className="nav-item ">
                  <a className="nav-link" href="/">Online Doctor <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                <a  className="nav-link text-secondary"  href="/department">Corporate</a>
                </li>
                 <li className="nav-item">
                  <a  className="nav-link text-secondary" href="/Doctor">Doctors</a>
                </li> 
                <li className="nav-item">
                  <a  className="nav-link text-secondary" href="/contact">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-secondary" href="/login">Contact Us</a>
                </li>
              </ul>
              <button className="btn btn-outline-primary">Register/Login</button>
            </div>
            
              </Col>
            </Container>
            </nav>
            </header>
            </div>
         
        )
      }
  }
