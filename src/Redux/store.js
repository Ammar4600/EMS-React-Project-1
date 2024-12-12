import { configureStore } from '@reduxjs/toolkit'
import  LoginSlice  from './FeaturesSlices/Login'
import  AssignTaskSlice  from './FeaturesSlices/AssignTasks'
import  AllEmployeesSlice  from './FeaturesSlices/AllEmployess'
// import  TaskStatusSlice  from './FeaturesSlices/TaskStatus'

export const store = configureStore({
  reducer: {
    Login : LoginSlice,
    TaskAssingment : AssignTaskSlice,
    AllEmployees : AllEmployeesSlice,
    // taskstatus : TaskStatusSlice,
  },
})