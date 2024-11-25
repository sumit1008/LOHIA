import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import logo from '../../assets/images/logo.png'; // Import logo from src folder

const DsaSidebar = () => {
  const sidebarItems = [
    { name: 'Overview', path: '/dsa-sheet', icon: <DashboardIcon /> },
    { name: 'Make Your Own DSA Sheet', path: '/dsa-sheet/add', icon: <AddCircleOutlineIcon /> },
    { name: 'Solve DSA Questions', path: '/dsa-sheet#progress', icon: <TaskAltIcon /> },
  ];

  return (
    <nav className="dsa-sidebar w-[20%] bg-gray-100 dark:bg-gray-800 h-screen p-4">
     
      <div className="mb-8">
        <Link
          to="/"
          className="flex items-center space-x-3 p-3 rounded-md bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-gray-600 font-bold transition-colors no-underline"
        >
          <HomeIcon className="text-lg no-underline" />
          <span className='no-underline'>Home</span>
        </Link>
      </div>

      {/* Menu Items */}
      <h2 className="text-lg font-extrabold mb-6 text-blue-500 dark:text-blue-400">DSA Sheet Menu</h2>
      <ul className="space-y-4">
        {sidebarItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center space-x-3 p-2 rounded-md hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors"
          >
            <div className="text-blue-500 dark:text-blue-400 text-lg">{item.icon}</div>
            <Link
              to={item.path}
              className="text-md font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 no-underline"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DsaSidebar;
