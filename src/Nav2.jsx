import React from 'react'
import { useSelector } from 'react-redux';
import { Link
} from "react-router-dom";

const Nav2 = () => {
  const user=localStorage.getItem('user')
  const cartcount=useSelector(state=>state.cart);
  

  return (
   <>
   <div className='container' >
  
  <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
   <img src="/images/logo.png" alt="alt" style={{height:"60px"}} />  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mg-auto mb-2 mb-lg-0" style={{marginLeft:"auto"}}>
          <li className="nav-item">
            {
              user?user:<Link className="nav-link navcontainerlink" aria-current="page" to="/login" style={{color:"black"}}>Login</Link>
            }
          </li>
  
          <li className="nav-item">
            <a className="nav-link navcontainerlink" aria-current="page" href="/cart" style={{color:"black",marginLeft:"10px"}}>cart <strong style={{color:"red"}}>{}</strong></a>
          </li>
  
        </ul>
      </div>
    </div>
  </nav>
  </div>
   </>
  )
}

export default Nav2