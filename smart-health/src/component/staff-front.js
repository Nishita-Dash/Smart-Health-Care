import React from "react";
import { Link } from 'react-router-dom';
import { Nav, Navbar,Button } from "react-bootstrap";
import Calendar from 'react-calendar';
import image from "./download.png";
const staff_front=()=>{
    return(
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Navbar.Brand href="#home">Smart-Hospital</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto">
   <Nav.Link href="/medical-history1">View medical history</Nav.Link>
    <Nav.Link href="/inventory">Check Inventory</Nav.Link>
    <Nav.Link href="/pharmacy">Pharmacy</Nav.Link>
    <Nav.Link href="/billing">Billing</Nav.Link>
    <Nav.Link href="/insurance">Check insurance</Nav.Link>
    <Nav.Link href="/uploadtest">Upload test reports</Nav.Link>
  </Nav>
  <Nav>
 <Link to='/'><Button variant="dark" >Log out</Button></Link>
  </Nav>
</Navbar.Collapse>
</Navbar>
      <div className="image">
      <img src={image} alt="hello"></img>
        <p><b>“The life so short, the craft so long to learn.”
                                              ― Hippocrates</b>
        
        </p>
      </div>
      <div className="calender">
      <Calendar activeMonth={new Date()} />
      <br></br>
      <br></br>
    </div>
    </div>
    )
}
export default staff_front;