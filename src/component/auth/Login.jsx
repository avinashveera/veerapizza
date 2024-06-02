import React from 'react'
import {Link,useNavigate} from "react-router-dom"
import {eFunc} from "../../slice/loginReducer"
import {useDispatch,useSelector} from "react-redux"
import axios from "axios"

const Register = () => {
  const navigt=useNavigate();
  const data=useSelector(state=>state.login.value)
const dispach=useDispatch();
  const loginEmit=(evnt)=>{

dispach(eFunc({name:evnt.target.name,value:evnt.target.value}))
  }


const login=()=>{


  if(data.email.length > 5 && data.password > 4){

    axios.post('https://pizzabackend-2bsi.onrender.com/api/login',data).then(Response=>{
      console.log("200")
      if(Response.status===200)
      {   
        
        const{token}=Response.data
        const{name}=Response.data.data
    
        localStorage.setItem("token",token)
        localStorage.setItem("user",name)
        

       window.location.reload('/home')

        
        
      }else{
        alert({message:"invalid login"})
      }
    
      
      })

  }else{

alert('invalid input')
  }




}
   

  return (
    <>
    <div className='registerPage' style={{width:"100vw",height:"100vh", display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",  background:  "linear-gradient(rgba(255, 255, 255, 0.45),rgba(0, 0, 0, 0.45)),url(https://images.pexels.com/photos/194096/pexels-photo-194096.jpeg)",backgroundSize:"cover"}}>

     <div style={{width:"480px",minHeight:"350px",maxHeight:"100vh",backgroundColor:"#fff",padding:"60px"}}>

       <h1>login</h1>
       <div> 
         <input onChange={loginEmit} style={{padding:"8px 10px",width:"300px",border:"1px solid grey",margin:"10px 5px"}}  type="text" name="email" id="email" placeholder='email'/>
         <input onChange={loginEmit} style={{padding:"8px 10px",width:"300px",border:"1px solid grey",margin:"10px 5px"}} type="text" name="password" id="password" placeholder='password' />
          </div>
        

       <button onClick={login} style={{width:"200px",height:"50px",margin:"20px 0px",backgroundColor:"teal",border:"none",color:"white",cursor:"pointer"}}>LOGIN</button>

      <br/>
       <Link style={{textDecoration:"none"}} to='/'>forget you password ??</Link>
         <br/>
         <p><Link style={{textDecoration:"none"}} to='/register'>create a account</Link></p>
     </div>
    </div>
    </>
  )
}

export default Register
