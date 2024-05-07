import React, { useState } from 'react';
import { Toaster, toast } from 'sonner';
import { RxCross2 } from "react-icons/rx";

function FormModal({ ontoggleClose, onRefresh }) {
 
  const [task, setTask] = useState("")
  const [assignee, setAssignee] = useState("/profile.jpeg")
  const [priority, setPriority] = useState("High")
  const [status, setStatus] = useState("To pick")
  const [start, setStart] = useState("")
  const [end, setEnd] = useState("")


  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = {
      task,
      assignee,
      priority,
      status,
      start,
      end
    };

    try {
      let res = await fetch('https://landing-taskapp.vercel.app/api', {
        method: 'POST',
        body: JSON.stringify(formData)
      })
      res = await res.json();
    } catch (err) {
      console.log(err);
    }
    toast.success('Task Created Successfully!')
    onRefresh(true);
  }

  return (
    <>
     <Toaster richColors closeButton />
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl p-4 font-semibold'>Task Name</h1>
        <div className='text-xl pr-8' onClick={ontoggleClose('right', false)}>
          <RxCross2 />
        </div>

      </div>

      <form method='POST' onSubmit={submitHandler}>

        <div className='flex justify-evenly items-center my-4'>
          <div className='w-1/4 flex justify-start'>
            <label htmlFor="task" className='ml-5'>Task</label>
          </div>
          <div className='w-3/4 flex justify-center'>
            <input type="text" id='task' name='task' placeholder='Enter Task' onChange={(e) => setTask(e.target.value)} className='bg-gray-200 text-black py-1 px-3 w-3/4 rounded-sm focus:outline-none' required />
          </div>

        </div>

        <div className='flex justify-evenly items-center my-4'>

          <div className='w-1/4 flex justify-start'>
            <label htmlFor="assignee" className='ml-5'>Assignee</label>
          </div>
          <div className='w-3/4 flex flex-col gap-2 items-center justify-center' onClick={(e) => setAssignee(e.target.children[0].alt)}>
            <div className='w-3/4 flex items-center bg-gray-200 rounded-sm hover:bg-gray-300 cursor-pointer' 
            style={{background: assignee==='/profile.jpeg' && '#9ca3af',color: assignee==='/profile.jpeg' && '#fff'}}
            >
              <img src="/profile.jpeg" alt="/profile.jpeg" className='w-8 h-8 pl-3 mr-3' />
              Peter Parker
            </div>
            <div className='w-3/4 flex items-center bg-gray-200 rounded-sm hover:bg-gray-300 cursor-pointer'
            style={{background: assignee==='/marie_jane_profile.jpeg' && '#9ca3af',color: assignee==='/marie_jane_profile.jpeg' && '#fff'}}
            >
              <img src="/marie_jane_profile.jpeg" alt="/marie_jane_profile.jpeg" className='w-8 h-8 pl-3 mr-3' />
              Marie Jane
            </div>
            <div className='w-3/4 flex items-center bg-gray-200 rounded-sm hover:bg-gray-300 cursor-pointer'
            style={{background: assignee==='/Lex_Luthor.jpg' && '#9ca3af',color: assignee==='/Lex_Luthor.jpg' && '#fff'}}
            >
              <img src="/Lex_Luthor.jpg" alt="/Lex_Luthor.jpg" className='w-8 h-8 pl-3 mr-3' />
              Lex Luthor
            </div>
          </div>

        </div>

        <div className='flex justify-evenly items-center my-4'>

          <div className='w-1/4 flex justify-start'>
            <label htmlFor="priority" className='ml-5'>Priority</label>
          </div>
          <div className='w-3/4 flex justify-center items-center'>
            <select id="prioritySelect" required value={priority} onChange={(e) => setPriority(e.target.value)} className='py-1 px-3 rounded-sm focus:outline-none w-3/4 appearance-none' 
             style={{background: priority==='High' ? '#dcfce7' : '' || priority==='Medium' ? '#dbeafe' : '' || priority==='Low' ? '#fee2e2' : '',
             color: priority==='High' ? '#15803d' : '' || priority==='Medium' ? '#1d4ed8' : '' || priority==='Low' ? '#b91c1c' : ''
             }}
            >
            <option value="High" className='py-1 px-3 bg-green-200 text-green-700'>High</option>
              <option value="Medium" className='py-1 px-3 bg-blue-200 text-blue-700'>Medium</option>
              <option value="Low" className='py-1 px-3 bg-red-200 text-red-700'>Low</option>
            </select>
          </div>


        </div>

        <div className='flex justify-evenly items-center my-4'>

          <div className='w-1/4 flex justify-start'>
            <label htmlFor="status" className='ml-5'>Status</label>
          </div>

          <div className='w-3/4 flex justify-center'>
            <select id="statusSelect" value={status} required onChange={(e) => setStatus(e.target.value)} className='py-1 px-3 rounded-sm focus:outline-none w-3/4 appearance-none'
            style={{background: status==='Complete' ? '#dcfce7' : '' || status==='Assigned' ? '#dbeafe' : '' || status==='To pick' ? '#fee2e2' : '',
            color: status==='Complete' ? '#15803d' : '' || status==='Assigned' ? '#1d4ed8' : '' || status==='To pick' ? '#b91c1c' : ''}}
            >
              <option value="Complete" className='py-1 px-3 bg-green-200 text-green-700'>Completed</option>
              <option value="Assigned" className='py-1 px-3 bg-blue-200 text-blue-700'>Assigned</option>
              <option value="To pick" className='py-1 px-3 bg-red-200 text-red-700'>To Pick</option>
            </select>
          </div>

        </div>

        <div className='flex justify-evenly items-center my-4'>
          <div className='w-1/4 flex justify-start'>
            <label htmlFor="start" className='ml-5'>Start Date</label>
          </div>
          <div className='w-3/4 flex justify-center'>
            <input type="date" required onChange={(e) => setStart(e.target.value)} className='bg-gray-300 text-black py-1 px-3 rounded-sm focus:outline-none w-3/4' />
          </div>


        </div>

        <div className='flex justify-evenly items-center my-4'>
          <div className='w-1/4 flex justify-start'>
            <label htmlFor="end" className='ml-5'>End Date</label>
          </div>
          <div className='w-3/4 flex justify-center'>
            <input type="date" required onChange={(e) => setEnd(e.target.value)} className='bg-gray-300 text-black py-1 px-3 rounded-sm focus:outline-none w-3/4' />
          </div>

        </div>

        <div className='flex items-center justify-center mt-8'>
          <button className='px-7 py-2 bg-indigo-600 text-white rounded-md active:scale-90'>Add Task</button>
        </div>
      </form>
    </>
  )
}

export default FormModal