import {createSlice} from "@reduxjs/toolkit"
import {pizzaItem } from '../pizzas'

const pizzaSlice=createSlice({
    name: 'pizza',
  initialState: [...pizzaItem],
  reducers: {


  }
})

export const { getpizza } = pizzaSlice.actions
export default   pizzaSlice.reducer