import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


function TaskCount() {
  const logeduser = useSelector((state)=> state.Login.value);
  const [user , setuser]  = useState('');
 
  useEffect(()=>{
    if (logeduser) {
      const data = JSON.parse(logeduser);
      setuser(data.taskreport)
    } else{
      setuser('')
    }
  },[logeduser])
  
  

  return (
    <div className=' h-[40%] w-full bg-slate-50 flex '>
      <div className='flex justify-around items-center w-full'>
        <div className='bg-yellow-300  h-[75%] w-[17%] p-5 rounded-md flex flex-col items-center gap-7 justify-center'>
            <h1 className='text-4xl font-bold text-blue-950 '>Completed</h1>
            <h1 className='text-3xl font-bold  text-blue-600'>{user.completed}</h1>
        </div>
        <div className='bg-red-950  h-[75%] w-[17%] p-5 rounded-md flex flex-col items-center gap-7 justify-center'>
            <h1 className='text-4xl font-bold text-white '>Failed </h1>
            <h1 className='text-3xl font-bold  text-sky-300'>{user.failed}</h1>
        </div>
        <div className='bg-blue-950  h-[75%] w-[17%] p-5 text-center rounded-md flex flex-col items-center gap-7 justify-center'>
            <h1 className='text-4xl font-bold text-white '>OnGoing</h1>
            <h1 className='text-3xl font-bold  text-green-300'>{user.inprogress}</h1>
        </div>
        <div className='bg-green-950  h-[75%] w-[17%] p-5 rounded-md flex flex-col items-center gap-7 justify-center'>
            <h1 className='text-4xl font-bold text-white '>Total</h1>
            <h1 className='text-3xl font-bold  text-yellow-300'>{user.total}</h1>
        </div>
      </div>
    </div>
  )
}

export default TaskCount
