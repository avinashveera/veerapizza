import {createSlice} from "@reduxjs/toolkit"
import axios from 'axios'
import {jwtDecode }from "jwt-decode"

// const token=localStorage.getItem('token')

// const {_id}=jwtDecode(token)
// const veera=await axios.post(`http://localhost:5000/api/showcart`,{
//      _id:_id,
// })



var showreducer=createSlice({
    name:"showcart",
    initialState:[
    // ...veera.data.cart
    ]
    ,reducers:{
        showcart:(state,action)=>{

            const token=localStorage.getItem('token')

const {_id}=jwtDecode(token)

            axios.post(`http://localhost:5000/api/showcart`,{
     _id:_id,
}).then((res)=>{
    state=res.data.cart
})

        }
    }



})

export const {showcart}= showreducer.actions

export default showreducer.reducer;