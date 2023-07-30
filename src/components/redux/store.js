import { configureStore } from '@reduxjs/toolkit'
import buildPcReducer from './features/buildPcSlice'

export const store = configureStore({
  reducer: {
    buildPc: buildPcReducer
  },
})