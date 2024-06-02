import {createSlice} from "@reduxjs/toolkit"

const regiaterData=createSlice({
    name:"register",
    initialState:{
        value:
        {
        name:"",
        email:"",
        password:""
        
        }
    }
    ,
    reducers:{

        eFunc:(state,action)=>{
            const {name,value}=action.payload

            state.value={
                ...state.value,
                [name]: value
              }

        }

,
emptyArr:(state,action)=>{
    state.value=     {
        name:"",
        email:"",
        password:""
        
        }
}


    }


})
export const {eFunc,emptyArr} =regiaterData.actions;

export default regiaterData.reducer;