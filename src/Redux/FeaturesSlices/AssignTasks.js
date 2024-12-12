import { createSlice } from '@reduxjs/toolkit'
import { setlocalstorage } from '../../Local Storage/LocalStorage'
import toast from 'react-hot-toast';
import { act } from 'react';

const initialState = {
value: localStorage.getItem('employee') ? JSON.parse(localStorage.getItem('employee')) : []
}

export const AssignTaskSlice = createSlice({
  name: 'TasksAssingment',
  initialState,
  reducers: {
    addtask: (state, action) => {
      // const paste = action.payload;
      // state.value.push(paste)
      // localStorage.setItem("pastes" ,JSON.stringify(state.value)) 
      // toast("Added task Succesfully")
      const task = action.payload;
      const employeelocaldata = JSON.parse(localStorage.getItem("employee"));
    
      if (task.email) {
        if (Array.isArray(employeelocaldata)) {
          employeelocaldata.forEach((item)=>{
            if (item.email === task.email) {
              item.tasks.push(task)
              item.taskreport.total  = item.taskreport.total + 1;
              item.taskreport.inprogress =  item.taskreport.inprogress + 1; 
              localStorage.setItem("employee" , JSON.stringify(employeelocaldata))
              state.value = JSON.stringify(employeelocaldata);
              toast.success("Task Succesfully Added")
          
              return;
            } 
          })
        } else{
          if (employeelocaldata.email === task.email) {
            employeelocaldata.tasks.push(task);
            employeelocaldata.taskreport.total  = employeelocaldata.taskreport.total + 1;
            state.value = employeelocaldata;
            localStorage.setItem('employee' , JSON.stringify(state.value))
            toast.success("Task Succesfully Added")
            return
          } 
          
        }
      }  else{

        toast.error("Please enter a valid email ")
        return
      }
   
    
    }
  },
})

// Action creators are generated for each case reducer function
export const { addtask } = AssignTaskSlice.actions

export default AssignTaskSlice.reducer;
