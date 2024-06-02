import {createSlice} from "@reduxjs/toolkit"


var cartReducer=createSlice({
    name:"addcart",
    initialState:{
      value:[
        
      ]
    },
    reducers:{
 
         addcart:(state,action)=>{

             const {name,img,price,quantity,_id}=action.payload

             state.value=[
              ...state.value,{
                _id,
                name,
                img,
                price,
                quantity
               }
             ]

             let cartdata= JSON.parse(localStorage.getItem('cart'))

   
             if(cartdata){


             const flt= cartdata.filter((data)=>{

                  return data._id!==_id
  
              })

              
              localStorage.setItem('cart',JSON.stringify([...flt,...state.value]))
             }else{
              localStorage.setItem('cart',JSON.stringify([...state.value]))
             }

      
             state.value=[]
    }
, 

total:async(state,action)=>{

//   let cartArry = JSON.parse(localStorage.getItem('cart'))
//   let amt;
// if(cartArry)(
  
//   amt =await cartArry.map((data)=>{
//      return  data.quantity*data.price
// })
// )
  
// console.log(amt.reduce())

// return amt[0]

}
    
}


})

export const {addcart,total}= cartReducer.actions

export default cartReducer.reducer;