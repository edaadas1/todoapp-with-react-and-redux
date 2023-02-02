import { configureStore } from '@reduxjs/toolkit'
import AddReducer from './AddSlice'

export const store = configureStore({
  reducer: {
    user:AddReducer
  },
})