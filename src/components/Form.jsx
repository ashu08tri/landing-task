"use client"
import { useState, useEffect ,Fragment } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { TbMenuDeep } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { AiFillPlusCircle } from "react-icons/ai";
import Drawer from "./Drawer";
import TaskTable from "./TaskTable";


function Form() {
 
  const[data,setData] = useState([])
  const[isLoading,setIsloading] = useState(false);
  const [refresher,setRefresher] = useState(false)
  const[state,setState] = useState(false);

  useEffect(() => {
    async function getData(){
      try{
            setIsloading(true)
            let res = await fetch('https://landing-taskapp.vercel.app/api',{cache: 'no-store'});
            if(res.ok){
            res = await res.json();
            setData(res.result); 
            setIsloading(false)
          }
          }catch(e){
            setIsloading(false)
            console.log(e);
            return null;
          }
    } 
    getData()
  },[refresher])

  const refreshHandler = () => {
    setRefresher(!refresher)
  }

  const toggleDrawer = () => {
    setState(!state)
  };
 
 
  return (
    <>
    {
      state && <Drawer isOpen={state} onClose={toggleDrawer} onRefresh={refreshHandler} />
    }
        <div className="flex">
            <p className="flex justify-evenly items-center h-11 md:h-auto border-2 border-blue-200 rounded-md rounded-r-none text-gray-400"><span className="px-1 md:px-3"><TbMenuDeep /></span> All <span className="px-1 md:px-3"><IoIosArrowDown /></span></p>
            <div className="relative">
                <div className="absolute top-3 left-36 md:left-5 text-xl">
                <CiSearch />
                </div>
            <input type="text" placeholder="Search" className="py-2 px-1 md:px-12 h-11 md:h-auto border-2 border-blue-200 rounded-md rounded-l-none border-l-0 focus:outline-none"/>
            </div>
            <div className="px-1 md:px-4 flex gap-2">
                <p className="hidden md:flex justify-evenly items-center h-10 md:h-auto p-2 border-2 border-blue-200 rounded-md text-gray-400">Sort By <span className="px-1"><IoIosArrowDown /></span></p>
               <button onClick={()=>setState(!state)} className="flex h-11 md:h-auto justify-evenly text-xs md:text-base items-center bg-indigo-600 text-white px-2 md:px-4 rounded-md active:scale-90"><AiFillPlusCircle className="text-xl mr-2"/> Add Group</button>
            </div>
            
        </div>
        <TaskTable data={data} onRefresh={refreshHandler} isLoading={isLoading}/>
    </>
  );
}

export default Form;