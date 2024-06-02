import {createSlice} from "@reduxjs/toolkit"
const loginSlice=createSlice({

    name:"login",
    initialState:{
        value:{
            email:""
          ,  password:""
        }
    },
    reducers:{

        eFunc:(state,action)=>{
            const {name,value}=action.payload

            state.value={
                ...state.value,
                [name]: value
              }

        }

    }

})


export const {eFunc}=loginSlice.actions


export default loginSlice.reducer
