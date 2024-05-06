import React from 'react'
import TaskNav from '@/components/TaskNav';
import TaskTabs from '@/components/TaskTabs';
import { IoIosArrowDown } from "react-icons/io";

function task() {
  return (
    <div className='flex flex-col md:flex-row'>
      <TaskNav/>
      {/*container */}
      <div>
      <div className='h-16 w-screen border-b-2 border-blue-200 flex items-center'>
          <h1 className='text-xl text-blue-500 font-semibold pl-5'>Workspace </h1>
         <div className='pt-2 pl-1'><IoIosArrowDown /></div>
      </div>
      {/*Main Container */}
      <div>
      <div className='mt-6 ml-2 md:ml-8 flex flex-col items-start'>
        <h1 className='text-2xl font-bold p-2 border-2 border-blue-200 rounded-xl'>Sub Project Type</h1>
        <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati porro soluta voluptatem, aut, provident explicabo asperiores, pariatur illum autem cum ducimus voluptate sunt aspernatur corporis <br /> incidunt commodi sit mollitia. Illum!
        Incidunt expedita facere dolores numquam sequ</p>
        <div>
          <TaskTabs/>
        </div>
      </div>
      </div>
      
      </div>
    </div>
  )
}

export default task;