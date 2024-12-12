import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';


function TaskReport() {
  const dataofall = useSelector((state)=> state.AllEmployees.value);
  const [employees ,setemployees] = useState([]);
  useEffect(()=>{

    if (dataofall) {
      const data = dataofall;
      setemployees(data)
    }

  },[dataofall])
 
  return (
    <div className='h-[38%] bg-slate-300 p-5 flex flex-col gap-3'>
      <div className=' rounded-lg  text-center flex justify-around p-2 bg-red-900 text-yellow-50 font-bold'>
        <h1>Employee Name </h1>
        <h1>Completed Task</h1>
        <h1> Failed Task</h1>
        <h1>Task in Progress</h1>
        <h1>Total Assigned Tasks</h1>
      </div>
     <div className='flex  flex-col text-center h-[90%] overflow-scroll gap-3'>

      {Array.isArray(employees)? employees.map((item ,idx)=>{
        return(
        
           <div key={idx}  className=' rounded-lg flex justify-around p-2 bg-red-900 text-yellow-50 font-bold' >
            <h1>{item.name}</h1>
            <h1>{item.taskreport.completed}</h1>
            <h1>{item.taskreport.failed}</h1>
            <h1>{item.taskreport.inprogress}</h1>
            <h2>{item.taskreport.total}</h2>
          </div> 
        )
      }) 
      : 
      <div key={idx}  className=' rounded-lg flex justify-around p-2 bg-red-900 text-yellow-50 font-bold' >
       <h1>{employees.name}</h1>
       <h1>{employees.taskreport.completed}</h1>
       <h1>{employees.taskreport.failed}</h1>
       <h1>{employees.taskreport.inprogress}</h1>
       <h2>{employees.taskreport.total}</h2>
     </div> 
      
      }
      
      </div>
    </div>
  )
}

export default TaskReport
