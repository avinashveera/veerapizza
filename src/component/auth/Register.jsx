import React, { useEffect } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import {eFunc,emptyArr} from "../../slice/registerReducer"
import axios from "axios"


const Register = () => {
const nagit=useNavigate();
const data=useSelector(state=>state.register.value)
const dispatch = useDispatch()

const registerSubmit=
()=>{ 


  if(data.name.length > 3 && data.email.length > 5 && data.password > 4){
    axios.post("https://pizzabackend-2bsi.onrender.com/api/register",data).then(Response=>{

    console.log(Response.status)
      if(Response.status===200){
  
        dispach(emptyArr())

        nagit('/login')
    
      }
      
  
    })
  }else{

    alert('wrong input')
   
  }


}
const dispach=useDispatch();

const dataChange=(evnt)=>{

  dispach(eFunc({name:evnt.target.name,value:evnt.target.value}))

}

  return (
    <>
    <div className='registerPage' style={{width:"100vw",height:"100vh", display:"flex",alignItems:"center",justifyContent:"center",  background:  "linear-gradient(rgba(255, 255, 255, 0.45),rgba(0, 0, 0, 0.45)),url(https://images.pexels.com/photos/194096/pexels-photo-194096.jpeg)",backgroundSize:"cover"}}>

     <div style={{width:"480px",minHeight:"350px",maxHeight:"100vh",backgroundColor:"#fff",padding:"20px"}}>

       <h1>CREATE AN ACCOUNT</h1>
       <div style={{display:"flex",flexWrap:"wrap",}}> 

          <input onChange={dataChange} style={{padding:"8px 10px",width:"200px",border:"1px solid grey",margin:"10px 5px"}} type="text" name="name" id="name" placeholder='username'/>
         <input onChange={dataChange} style={{padding:"8px 10px",width:"200px",border:"1px solid grey",margin:"10px 5px"}}  type="text" name="email" id="email" placeholder='email'/>
         <input onChange={dataChange} style={{padding:"8px 10px",width:"200px",border:"1px solid grey",margin:"10px 5px"}} type="text" name="password" id="password" placeholder='password' />
       </div>

       <p>
         by creating an acoount i constent to processing of my personal data in according with the
         <strong>privecy and policy</strong>
       </p>

       <button onClick={registerSubmit}  type='submit' style={ {width:"200px",height:"50px",backgroundColor:"teal",border:"none",color:"white",cursor:"pointer"}}>CREATE</button>
         &nbsp; &nbsp; &nbsp;
       <Link style={{textDecoration:"none"}} to='/login'>already hava acoount ? login</Link>
     </div>
    </div>
    </>
  )
}

export default Register