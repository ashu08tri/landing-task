import { Toaster, toast } from 'sonner';
import PuffLoader from "react-spinners/PuffLoader";
import { IoIosArrowDown } from "react-icons/io";

function TaskTable({ data, onRefresh, isLoading }) {

    const deleteHandler = async (id, status) => {
        if (status === 'Complete') {
            let res = await fetch('https://landing-taskapp.vercel.app/api/' + id, {
                method: 'DELETE'
            });
            res = await res.json();
        } else {
            return toast.error('Task is not completed yet!');
        }
        toast.error('Task Deleted!')
        onRefresh(true)
    }

    return (
        <>
            <div className="flex  w-[calc(50vw)] gap-2 items-center mt-4">
                <Toaster richColors closeButton />
                <div className="p-1 rounded-full bg-blue-200 text-center">
                    <IoIosArrowDown className="rounded-full text-blue-500 text-xl" />
                </div>
                <h1 className="text-2xl font-semibold py-2">Group Name</h1>
            </div>
            <div className="h-[calc(50vh)] w-[calc(85vw)] md:w-screen overflow-x-scroll no-scrollbar">
                <table className="w-[calc(100vw)] md:w-[calc(90%)] text-left text-gray-500 border-separate border-spacing-1">
                    <thead>
                        <tr>
                            <th className='p-3 hover:bg-gray-300 cursor-pointer w-3/12 rounded-sm'>Task</th>
                            <th className='p-3 hover:bg-gray-300 cursor-pointer rounded-sm w-1/12'>Assignee</th>
                            <th className='p-3 hover:bg-gray-300 cursor-pointer rounded-sm'>Priority</th>
                            <th className='p-3 hover:bg-gray-300 cursor-pointer rounded-sm'>Status</th>
                            <th className='p-3 hover:bg-gray-300 cursor-pointer rounded-sm'>Start Date</th>
                            <th className='p-3 hover:bg-gray-300 cursor-pointer rounded-sm'>End Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{isLoading && <PuffLoader
                            color='blue'
                            loading={isLoading}
                            size={50}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />}</td>
                        </tr>
                        {!isLoading && data.length === 0 && <tr><td>No task available!</td></tr>}
                        {!isLoading && data.length > 0 && data.map((task, i) =>
                            <tr className="hover:bg-blue-100" key={i}>
                                <td className='p-3 text-sm md:text-base mr-2 cursor-pointer w-3/12 border-2  rounded-sm'>{task.task}</td>
                                <td className='p-3 mr-2 cursor-pointer border-2 rounded-sm text-center w-1/12'><img src={task.assignee} alt="user" className="w-6 h-6 block" style={{ margin: '0 auto' }} /></td>
                                <td className='p-3 text-sm md:text-base mr-2 cursor-pointer text-white rounded-sm'
                                    style={{ background: task.priority === 'High' ? '#047857' : '' || task.priority === 'Medium' ? '#2563eb' : '' || task.priority === 'Low' ? '#f87171' : '' }}
                                >{task.priority}</td>
                                <td className='p-3 text-sm md:text-base mr-2 cursor-pointer text-white rounded-sm' onClick={() => deleteHandler(task._id, task.status)}
                                    style={{ background: task.status === 'Complete' ? '#65a30d' : '' || task.status === 'Assigned' ? '#60a5fa' : '' || task.status === 'To pick' ? '#fca5a5' : '' }}
                                >{task.status === 'Complete' ? 'Complete/Remove' : task.status}</td>
                                <td className='p-3 text-sm md:text-base mr-2 cursor-pointer border-2 rounded-sm'>{task.start.split("T")[0]}</td>
                                <td className='p-3 text-sm md:text-base cursor-pointer border-2 rounded-sm'>{task.end.split("T")[0]}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TaskTable;