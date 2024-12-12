import React from 'react'
import Navbar from '../Components/Navbar'
import TaskCount from '../Components/TaskCount'
import TaskList from '../Components/TaskList'

function EmployeeDashboard() {
  return (
    <div className='h-screen w-screen  bg-slate-50'>
      <Navbar/>
      <TaskCount/>
      <TaskList/>
    </div>
  )
}

export default EmployeeDashboard
