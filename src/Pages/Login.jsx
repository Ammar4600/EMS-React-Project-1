import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { LoginHandle } from '../Redux/FeaturesSlices/Login';
import { allemployes } from '../Redux/FeaturesSlices/AllEmployess';


function Login() {
  const [email , setemail] = useState("");
  const [password ,setpassword] = useState("");
  const dispatch = useDispatch();
function handlesubmit(e) {
  e.preventDefault();
  const data = {
    'email' : email,
    'password': password,
  }
  dispatch(LoginHandle(data))
  dispatch(allemployes())
  setemail("")
  setpassword("")
}

  return (
    <div className='h-screen w-full bg-slate-300 flex justify-center items-center'>
      <div className='border-2 p-10  rounded-md flex flex-col justify-center items-center gap-5'>
        <h1 className='text-5xl bg-blue-500 p-5 rounded-md text-white'>EMS Portal</h1>
        <h1 className='text-4xl'>Login</h1>
        <form onSubmit={(e)=>handlesubmit(e)}  className='flex flex-col gap-3'>
          <input onChange={(e)=> setemail(e.target.value)} value={email} className='p-3 rounded-md' type="email" placeholder='Enter your Email' />
          <input onChange={(e)=> setpassword(e.target.value)}  value={password} className='p-3 rounded-md' type="password" placeholder='Enter your Password' />
          <button   className='p-3 rounded-md bg-blue-500 text-white font-bold'>Login</button>
        </form>

      </div>
      
    </div>
  )
}

export default Login
