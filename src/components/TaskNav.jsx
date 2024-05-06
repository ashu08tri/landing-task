import Link from "next/link";
import { GrHomeRounded } from "react-icons/gr";
import { IoNotificationsOutline } from "react-icons/io5";
import { LiaTasksSolid } from "react-icons/lia";
import { RiSettingsLine } from "react-icons/ri";
import { MdAutoAwesome } from "react-icons/md";






function TaskNav() {
  return (
    <div className='md:w-28 h-16 md:h-auto border-b-2 md:border-r-2 border-blue-200 flex items-center justify-center'>
        <ul className='flex md:flex-col gap-8 md:gap-4 p-2'>
            <li className="p-2"><Link href='/'><GrHomeRounded /></Link></li>
            <li className="p-2"><IoNotificationsOutline /></li>
            <li className="border-b-4 md:border-b-0 md:border-l-4 rounded-l-md border-blue-400 p-2 bg-gradient-to-r from-blue-200 to-white"><LiaTasksSolid /></li>
            <li className="p-2"><RiSettingsLine /></li>
            <li className="p-2"><MdAutoAwesome /></li>
        </ul>
    </div>
  )
}

export default TaskNav;