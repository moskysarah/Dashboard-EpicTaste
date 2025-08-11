import { Link } from 'react-router-dom'
import { FaUserGroup } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { BiCycling } from "react-icons/bi";
import { AiFillMessage } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";




export default function Sidebar() {
  return (
    <div className="h-[calc(170vh-64px)] w-64 bg-orange-600 text-white flex flex-col p-4 space-y-4">

        <h2 className="text-2sm font-bold mb-6 flex items-center space-x-2">
            <IoFastFood  className='w-8 h-8'/>
            <span>Epic Taste</span>
        </h2>
        <Link to="/" className="hover:text-yellow-400 flex items-center space-x-2">
            <FaHome />
            <span>Dashboard</span>
        </Link>
        <Link to="/Order" className="hover:text-yellow-400 flex items-center space-x-2">
            <BiCycling />
            <span>Orders</span>
        </Link>
        <Link to="/Customers" className="hover:text-yellow-400 flex items-center space-x-2">
            <FaUserGroup />
            <span>Customers</span>
        </Link>
        
        <Link to="/favorites" className="hover:text-yellow-400 flex items-center space-x-2">
            <MdFavorite/>
            <span>Favorites</span>
        </Link>
        <Link to="/Messages" className="hover:text-yellow-400 flex items-center space-x-2">
            <AiFillMessage />
            <span>Messages</span>
        </Link>

        <Link to="/settings" className="hover:text-yellow-400 flex items-center space-x-2">
            <IoMdSettings />
            <span>Settings</span>
        </Link>
    </div>

  )
}
