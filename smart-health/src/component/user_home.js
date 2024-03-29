import React from 'react';//, { Component }
import { Nav, Navbar,Button } from "react-bootstrap";
import image from "./download.png";
import './user_home.css';
import Calendar from 'react-calendar';
//import { Document, Page } from 'react-pdf';
import { Link } from 'react-router-dom';

const userhome=()=>{
    return (
      <div className="boddy">
           <h1>ATHENA GROUPS <span>🏥</span>  </h1>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Smart-Hospital</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">

          <Nav.Link href="/cprescription">Current Prescription</Nav.Link>
          <Nav.Link href="/viewtest">View test reports</Nav.Link>
        </Nav>
        <Nav>
        <Link to='/user_front'><Button variant="dark" >Update your details</Button></Link>
 <Link to='/'><Button variant="dark" >Log out</Button></Link>
  </Nav> 
      </Navbar.Collapse>
      </Navbar>
      <div className="image">
        <img src={image} alt="hello"></img>
          <p>
          Welcome to ATHENA GROUPS! We at ATHENA Make sure to give our patients utmost superior treatment. If this is your first time logging in please do make sure to
update your medical history as it would help us get to know you better, here you can set your appointments, view prescriptions and test reports.
If you need further assistance feel free to contact us, our lines are open 24/7.
          </p>
        </div>
        <div className="calender">
        <Calendar activeMonth={new Date()} />
        <br></br>
        <br></br>
        <Link to='/make-appoinment'><Button variant="dark" >Make appoinment</Button></Link>
      </div>
      </div>
    );
  }
  
export default userhome;
