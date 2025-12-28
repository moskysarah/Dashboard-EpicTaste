import { Link } from 'react-router-dom'
import { FaUserGroup } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { BiCycling } from "react-icons/bi";
import { AiFillMessage } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export default function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="bg-orange-600 text-white p-2 rounded-md"
        >
          {sidebarOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-orange-600 text-white flex flex-col p-4 space-y-4 transform transition-transform duration-300 ease-in-out md:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <h2 className="text-2sm font-bold mb-6 flex items-center space-x-2">
            <IoFastFood  className='w-8 h-8'/>
            <span>Epic Taste</span>
        </h2>
        <Link to="/" className="hover:text-yellow-400 flex items-center space-x-2" onClick={() => setSidebarOpen(false)}>
            <FaHome />
            <span>Dashboard</span>
        </Link>
        <Link to="/Order" className="hover:text-yellow-400 flex items-center space-x-2" onClick={() => setSidebarOpen(false)}>
            <BiCycling />
            <span>Orders</span>
        </Link>
        <Link to="/Customers" className="hover:text-yellow-400 flex items-center space-x-2" onClick={() => setSidebarOpen(false)}>
            <FaUserGroup />
            <span>Customers</span>
        </Link>

        <Link to="/favorites" className="hover:text-yellow-400 flex items-center space-x-2" onClick={() => setSidebarOpen(false)}>
            <MdFavorite/>
            <span>Favorites</span>
        </Link>
        <Link to="/Messages" className="hover:text-yellow-400 flex items-center space-x-2" onClick={() => setSidebarOpen(false)}>
            <AiFillMessage />
            <span>Messages</span>
        </Link>

        <Link to="/settings" className="hover:text-yellow-400 flex items-center space-x-2" onClick={() => setSidebarOpen(false)}>
            <IoMdSettings />
            <span>Settings</span>
        </Link>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </>
  )
}
