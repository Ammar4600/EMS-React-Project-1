import { createSlice } from '@reduxjs/toolkit'
import { setlocalstorage } from '../../Local Storage/LocalStorage'
import toast from 'react-hot-toast';
import { act } from 'react';

const initialState = {
value: localStorage.getItem('employee') ? JSON.parse(localStorage.getItem('employee')) : []
}

export const AllEmployeesSlice = createSlice({
  name: 'TasksAssingment',
  initialState,
  reducers: {
    allemployes: (state, action) => {
      const data = JSON.parse(localStorage.getItem('employee'))
      console.log(data)
      state.value = data;
      localStorage.setItem('employee' ,JSON.stringify(state.value))
  }},
})

// Action creators are generated for each case reducer function
export const { allemployes } = AllEmployeesSlice.actions

export default AllEmployeesSlice.reducer;
