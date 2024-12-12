import { useEffect, useState } from 'react'
import './App.css'
import AdminDashboard from './Pages/AdminDashboard'
import EmployeeDashboard from './Pages/EmployeeDashboard'
import Login from './Pages/Login'
import { useSelector } from 'react-redux'
import { setlocalstorage } from './Local Storage/LocalStorage'



function App() {

  const logeduser = useSelector((state)=> state.Login.value);
  const [user , setuser]  = useState('');
 
  useEffect(()=>{
    if (logeduser) {
      const data = JSON.parse(logeduser);
      setuser(data.role)
    } else{
      setuser('')
    }

  },[logeduser])


    
    useEffect(()=>{
      setlocalstorage();
    },[])
  

  return (
    <>
    
  
  { user == '' ? <Login/> : user === 'admin' ? <AdminDashboard/> : user == 'employee' ? <EmployeeDashboard/>  :''}
    </>
  )
}

export default App
