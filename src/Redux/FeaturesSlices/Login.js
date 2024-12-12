import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';
import { setlocalstorage } from '../../Local Storage/LocalStorage';


const initialState = {
  value:  localStorage.getItem('logedUser') ? localStorage.getItem('logedUser') : ''
}

export const LoginSlice = createSlice({
  name: 'Login/Out',
  initialState,
  reducers: {
    LoginHandle: (state, action) => {
     const ourdata  = action.payload;
     const Adminlocaldata = JSON.parse(localStorage.getItem("admin"));
     const employeelocaldata = JSON.parse(localStorage.getItem('employee'))

      if (Array.isArray(Adminlocaldata)) {
        const data = Adminlocaldata.find((item)=> item.email == ourdata.email && item.password == ourdata.password)
        if(data){
          localStorage.setItem('logedUser' , JSON.stringify(data))
          state.value = localStorage.getItem('logedUser');
          toast.success("Log in succesfully")
          return;
        }
      } else{
        if (Adminlocaldata.email == ourdata.email && Adminlocaldata.password == ourdata.password) {
          const data = Adminlocaldata;
          if (data) {
            localStorage.setItem('logedUser' , JSON.stringify(data))
            state.value = localStorage.getItem('logedUser');
            toast.success("Log in succesfully")
            return;
          }
        } 
      }

      if (Array.isArray(employeelocaldata)) {
        const data = employeelocaldata.find((item)=> item.email == ourdata.email && item.password ==ourdata.password)
        if (data) {
          localStorage.setItem('logedUser' ,JSON.stringify(data));
          state.value = localStorage.getItem('logedUser')
          toast.success("Login Succesfully")
          return;
        }
      } else {
        if (employeelocaldata) {
        if (employeelocaldata.email == ourdata.email && employeelocaldata.password ==ourdata.password) {
          const data = employeelocaldata;
          localStorage.setItem('logedUser' , JSON.stringify(data));
          state.value = data;
          toast.success("login Succesfully")
        }
        }
      }



      if(state.value == ''){
        toast.error("invalid credintials")
      }
    },
    logoutHandle:(state , action) =>{
        localStorage.setItem('logedUser' , '');
        state.value = localStorage.getItem('logedUser');
        toast.success("Log-out succesfully")
    },
    completed: (state, action) => {
      const ourdata = action.payload;

      
      
      const employeelocaldata = JSON.parse(localStorage.getItem("employee"))
     
      employeelocaldata.forEach((elem)=> {
        if(elem.email == ourdata.email){
          const ind = elem.tasks.findIndex((e)=> e.tasktitle == ourdata.tasktitle)
          elem.tasks.splice(ind , 1);
          elem.taskreport.completed =  elem.taskreport.completed  + 1;
          elem.taskreport.inprogress =  elem.taskreport.inprogress - 1; 
          localStorage.setItem('employee' , JSON.stringify(employeelocaldata))
          state.value = JSON.stringify(elem);
          localStorage.setItem('logedUser' ,JSON.stringify(elem))
        }
        
      

     });
  },
  failed:(state ,action) =>{
    const ourdata = action.payload
    const employeelocaldata = JSON.parse(localStorage.getItem('employee'))
    console.log(employeelocaldata)
    if (Array.isArray(employeelocaldata)) {
      employeelocaldata.forEach((elem)=>{
        if (elem.email == ourdata.email) {
        const index = elem.tasks.findIndex((e)=>  e.tasktitle == ourdata.tasktitle)
          elem.tasks.splice(index ,1)
          elem.taskreport.failed =  elem.taskreport.failed + 1; 
          elem.taskreport.inprogress =  elem.taskreport.inprogress - 1; 
          console.log(employeelocaldata)
          localStorage.setItem("employee" , JSON.stringify(employeelocaldata))
          state.value = JSON.stringify(elem);
          localStorage.setItem("logedUser" , JSON.stringify(elem))
        }

      })


    }
  },
},
})

// Action creators are generated for each case reducer function
export const { failed, completed,  logoutHandle , LoginHandle} = LoginSlice.actions

export default LoginSlice.reducer;
