import React from 'react'
import "./header.css"
import { Link
} from "react-router-dom";
import{MdLocalOffer} from "react-icons/md"

 const Navbar = () => {
  return (
    <>
    
<div className='navcontainer' >
  
<nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" style={{color:"white"}}><MdLocalOffer style={{color:"yellow"}} /> &nbsp; &nbsp; &nbsp; free home delivery above 500rs</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mg-auto mb-2 mb-lg-0" style={{marginLeft:"auto"}}>
        <li className="nav-item">
          <Link className="nav-link navcontainerlink" aria-current="page" to="/">Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link navcontainerlink" aria-current="page" to="/about">About</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link navcontainerlink" aria-current="page" to="/contact">Contact us</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link navcontainerlink" aria-current="page" to="/TermsAndPolicy">Term and policy</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
</div>
    
    </>
  )
}

export default Navbar;
