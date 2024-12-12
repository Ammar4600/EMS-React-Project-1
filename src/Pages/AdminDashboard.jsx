import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import AddTask from '../Components/AddTask'
import TaskReport from '../Components/TaskReport'
import { useSelector } from 'react-redux'

function AdminDashboard() {
  
  return (
    <div className='h-screen w-full bg-slate-100'>
      <Navbar/>
      <AddTask/>
      <TaskReport/>
    </div>
  )
}

export default AdminDashboard
