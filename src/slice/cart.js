import {createSlice} from "@reduxjs/toolkit"


const cartslice=createSlice({
  
    name: 'cart',
  initialState: {
    value:[
  
    ]
  },
  reducers: {

   

    cartDt:(state,action)=>{


      let cartArry = JSON.parse(localStorage.getItem('cart'))

    if(cartArry){
      state.value=[...cartArry]
    }else{
      
    }

     


    }
,


addPizza : (state,action) => {

  let cartArry = JSON.parse(localStorage.getItem('cart'))

  state.value=[...cartArry]

 
  
  
    const {_id}=action.payload;
  
  
    if(state.value){
  
  
      let reArry = state.value.map((item) => {
  
        if (_id === item._id) {
          item.quantity += 1
          return item
    
        }
        else {
          return item
        }
      })
      state.value=[...reArry]
      localStorage.setItem('cart', JSON.stringify([...reArry]))
    }
  
   
  
  }

  ,


minPizza :(state,action) => {

  let cartArry = JSON.parse(localStorage.getItem('cart'))

  state.value=[...cartArry]

  const {_id}=action.payload;


  if(state.value){
    let reArry = state.value.map((item) => {

      if (_id === item._id) {
       
        if(item.quantity>1){
          item.quantity -= 1
          return item
        }else{
          return item
        }
        
  
      }
      else {
        return item
      }
    })
    state.value=[...reArry]
    localStorage.setItem('cart', JSON.stringify([...reArry]))
  
  }

}




  }
})

export const { addPizza,minPizza,cartDt,check  } = cartslice.actions
export default   cartslice.reducer