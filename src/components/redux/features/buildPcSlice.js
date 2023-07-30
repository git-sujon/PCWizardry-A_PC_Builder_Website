import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products:[],
  totalCatagories:[]
}

export const buildPcSlice = createSlice({
  name: 'buildPc',
  initialState,
  reducers: {
    addProduct:(state, action)=> {
         state.products.push(action.payload)
    },

  },
})

// Action creators are generated for each case reducer function
export const { addProduct } = buildPcSlice.actions

export default buildPcSlice.reducer