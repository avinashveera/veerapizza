import React from 'react'


const Cartcard = ({img,name,price,_id,addpizza,minPizza,quantity}) => {
 
  return (
    <>

             

    <div style={{display:"flex",flexWrap:"wrap"}}>

    

        <img style={{height:"150px"}} src={img} alt="" />

         <div>
             <p><strong>product :</strong> {name}</p>
       
             <p><strong>price : </strong> {price}</p>
          

         </div>

         <div style={{margin:"20px 50px"}}>
             <button key={_id} onClick={()=>{minPizza(_id,price)}} >-</button>
             <strong style={{margin:"0px 20px"}}>{quantity}</strong>
             <button key={_id} onClick={()=>{addpizza(_id,price)}} >+</button>  
             

             <h2>₹{price}</h2>  
         </div>
    </div>
    </>
  )
}

export default Cartcard