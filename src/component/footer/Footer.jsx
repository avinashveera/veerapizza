import React from 'react';
import './Footer.css';
import {Link,useNavigate} from "react-router-dom"
import { useEffect } from 'react';
const Footer = () => {
  const navigt=useNavigate();
  const logout=()=>{

    localStorage.removeItem("token")
    localStorage.removeItem("user")
    
   
    window.location.reload()

  }


  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-col">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ultricies urna.</p>
        </div>
        <div className="footer-col">
          <h3>Contact Us</h3>
          <p>802301 katira more</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@pizzadeliveryapp.com</p>
        </div>
      </div>
      <div className="footer-row">
        <div className="footer-col">
          <h3>Terms and Policy</h3>
          <ul>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
          <button onClick={logout} style={{width:"200px",height:"50px",margin:"20px 0px",backgroundColor:"teal",border:"none",color:"white",cursor:"pointer"}}>LOGOUT</button>
        </div>
        <div className="footer-col">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-row">
        <p>&copy; 2024 Pizza Delivery App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
