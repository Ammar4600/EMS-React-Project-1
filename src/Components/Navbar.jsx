import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutHandle } from '../Redux/FeaturesSlices/Login';


function Navbar() {
  const userdata = useSelector((state)=> state.Login.value)
  const [data , setdata] = useState('');
  useEffect(()=>{
    if (userdata) {
      setdata(JSON.parse(userdata))
    }
  },[userdata]);
  
  const dispatch = useDispatch();
  function handlelogout() {
  dispatch(logoutHandle())  
  }
  return (
    <div className='h-[12%] flex justify-between items-center p-8 bg-sky-950'>
        <h1 className='text-2xl text-yellow-50'>EMS</h1>
        <div className='flex justify-between items-center gap-5'>
          <h1 className='text-yellow-50'>{data.name}</h1>
          <img 
           src={data.userimage} alt="pic" 
           className=' rounded-[50%] p-2 w-[77px] h-[70px] '/>
          <button onClick={handlelogout} className='bg-red-700 py-1.5 px-2 rounded-md text-yellow-50 font-bold'>Logout</button>
        </div>
      
    </div>
  )
}

export default Navbar
