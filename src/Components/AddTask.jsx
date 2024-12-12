import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addtask } from '../Redux/FeaturesSlices/AssignTasks';
import { allemployes } from '../Redux/FeaturesSlices/AllEmployess';

function AddTask() {
  const [title, settitle] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [date, setdate] = useState("");
  const [description, setdescription] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const data = 
      {
      tasktitle: title,
      name: name,
      email: email,
      duedate: date,
      taskdescription: description,
      }
    
    dispatch(addtask(data))
    dispatch(allemployes())

    settitle('')
  }

  return (
    <div className='addtask py-4 px-10 bg-slate-700 min-[50%]'>
      <h1 className='text-yellow-50 text-xl pb-5' >Assign task to Employees</h1>
      <form onSubmit={(e) => handleSubmit(e)} className='form flex justify-between'>
        <div className='flex flex-col items-start gap-4'>
          <input onChange={(e) => settitle(e.target.value)} value={title} type="text" className='py-1 px-2 rounded-md w-[20vw]' placeholder='Enter Task TItle' />
          <input onChange={(e) => setname(e.target.value)} value={name} type="text" className='py-1 px-2 rounded-md w-[20vw]' placeholder='Enter Employee Name' />
          <input onChange={(e) => setemail(e.target.value)} value={email} type="email" className='py-1 px-2 rounded-md w-[20vw]' placeholder='Enter Employee Email' />
          <input onChange={(e) => setdate(e.target.value)} value={date} type="date" className='py-1 px-2 rounded-md w-[20vw]' />
        </div>
        <div className='flex flex-col items-center gap-4'>
          <textarea onChange={(e) => setdescription(e.target.value)} value={description} rows="7" cols="40" placeholder="Enter Task Here" className="py-2 px-2 rounded-md"></textarea>

          <button className='bg-white rounded-md py-2 px-2 w-[30%]'>Assign Task</button>
        </div>
      </form>

    </div>
  )
}

export default AddTask
