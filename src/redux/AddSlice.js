import { createSlice } from '@reduxjs/toolkit'


export const AddSlice = createSlice({
  name: "user",
  initialState:{
    user:"",
    list:[]
  },
  reducers: {
    getName: (state,action) => {
      state.user = action.payload
    },
    addToList: (state) => {
     state.list = [...state.list,state.user]
    },
    removeName: (state) => {
      if(state.user){
        state.user=""
      }
    },
  },
})

export const { getName,addToList ,removeName} = AddSlice.actions

export default AddSlice.reducer