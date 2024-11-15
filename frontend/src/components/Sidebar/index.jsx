import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaUniversity, FaGraduationCap, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { DarkModeContext } from "../../App"; // Importing dark mode context
import logo from '../../assets/images/logo.png'; // Import logo from src folder
import photo from '../../assets/images/photo.jpg'; // Import profile photo from src folder
// import axios from "axios";


// const userData = {
//   "email" : "ss6156852@gmail.com",
//   "password" : "ca96"
// }

// const response = axios.post("http://localhost:3000/api/auth/login",userData)


const Sidebar = () => {
  const { isDarkMode } = useContext(DarkModeContext); // Get dark mode state from context

  return (
    <div className={`sidebar fixed top-0 left-0 z-[100] w-[15%] h-full p-4 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}>
      {/* Logo */}
      <Link to="/">
        <div className="logoWrapper flex items-center space-x-2 mb-4">
          <img src={logo} alt="Logo" className="w-12 h-12 rounded-full" />
        </div>
      </Link>

      {/* Profile Section */}
      <div className="profile-section mb-6">
        <div className="profile-picture w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2">
          <img src={photo} alt="Profile" className="rounded-full" />
        </div>
        <h3 className="text-center text-lg font-semibold">Wonder</h3>
        <p className="text-center text-sm">@wonder</p>
        <button className="mt-2 w-full bg-gray-200 text-sm font-medium py-1 rounded">Edit Profile</button>
      </div>

      {/* Links Section */}
      <div className="links-section space-y-4">
        <Link to="/location" className="flex items-center space-x-2 no-underline">
          <FaMapMarkerAlt />
          <span>Location</span>
        </Link>
        <Link to="/college" className="flex items-center space-x-2 no-underline">
          <FaUniversity />
          <span>College</span>
        </Link>
        <Link to="/degree" className="flex items-center space-x-2 no-underline">
          <FaGraduationCap />
          <span>Degree</span>
        </Link>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 no-underline">
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 no-underline">
          <FaGithub />
          <span>GitHub</span>
        </a>
        <a href="mailto:someone@example.com" className="flex items-center space-x-2 no-underline">
          <FaEnvelope />
          <span>Gmail</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
 