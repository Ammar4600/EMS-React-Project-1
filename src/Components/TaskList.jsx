import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { completed, failed } from '../Redux/FeaturesSlices/Login';

function TaskList() {
    const userdata = useSelector((state) => state.Login.value);
    const [tasks, settasks] = useState([]);
    const dispatch = useDispatch();


    useEffect(() => {
        if (userdata) {
            const data = JSON.parse(userdata).tasks
            settasks(data)
        }

        else {
            settasks([])
        }
    }, [userdata])


    function handleComplete(item) {

       dispatch(completed(item))

    }

    function handleFail(item) {
        dispatch(failed(item))
    }



    return (
        <div className='gap-10 px-10 overflow-scroll flex-shrink-0 h-[48%] flex items-center justify-start'>

            {Array.isArray(tasks) ? tasks.map((item, idx) => {
                return (
                    <div key={idx} className='border-2 flex-shrink-0 bg-slate-200 p-5 flex flex-col h-[70%] w-[33%] rounded-md justify-between'>
                        <div className='flex justify-between '>
                            <div >
                                <h1 className='text-2xl pb-2'>{item.tasktitle}</h1>
                                <h1>{item.taskdescription}</h1>
                            </div>
                            <h1 className='text-red-600 font-bold'>{item.duedate}</h1>
                        </div>
                        <div className='flex justify-between items-center'>
                            <button onClick={() => handleComplete(item)} className='bg-sky-950  py-1 p-3 rounded-md text-yellow-100' >Mark Completed</button>
                            <button onClick={()=> handleFail(item)} className='bg-red-950  py-1 p-3 rounded-md text-yellow-100'>Mark Failed</button>
                        </div>
                    </div>
                )
            })
                :
                <div className='border-2 flex-shrink-0 bg-slate-200 p-5 flex flex-col h-[70%] w-[33%] rounded-md justify-between'>
                    <div className='flex justify-between '>
                        <div >
                            <h1 className='text-2xl pb-2'>{tasks.tasktitle}</h1>
                            <h1>{tasks.taskdescription}</h1>
                        </div>
                        <h1 className='text-red-600 font-bold'>{tasks.duedate}</h1>
                    </div>
                    <div className='flex justify-between items-center'>
                        <button onClick={() => handleComplete(item)} className='bg-sky-950  py-1 p-3 rounded-md text-yellow-100' >Mark Completed</button>
                        <button onClick={()=> handleFail(item)} className='bg-red-950  py-1 p-3 rounded-md text-yellow-100'>Mark Failed</button>
                    </div>
                </div>

            }
        </div>
    )
}

export default TaskList
