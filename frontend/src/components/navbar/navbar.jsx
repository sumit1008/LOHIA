import React, { useContext } from 'react';
import { IconButton, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArticleIcon from '@mui/icons-material/Article';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { DarkModeContext } from '../../App'; // Import the context

function Navbar() {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext); // Get dark mode state and toggle function from context

  return (
    <nav className={`navbar flex items-center justify-right py-2 px-4 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}>
      {/* Centered Search Box */}
      <div className="flex-1 flex justify-center">
        {/* <TextField
          variant="outlined"
          placeholder="Findings"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          className={`w-[250px] bg-white rounded-full ${isDarkMode ? 'text-white' : 'text-gray-700'}`}
        /> */}
      </div>

      {/* Buttons with Bold Labels */}
      <div className="buttons flex items-center space-x-4">
        {/* Dark Mode Button */}
        <div className="flex flex-col items-center">
          <IconButton onClick={toggleDarkMode} color="primary" aria-label="dark mode">
            <Brightness4Icon className={`${isDarkMode ? 'text-white' : 'text-gray-700'}`} />
          </IconButton>
          <span className="text-xs font-bold">Dark Mode</span>
        </div>

        {/* Other Buttons */}
        <div className="flex flex-col items-center">
          <IconButton color="primary" aria-label="chat">
            <ChatIcon />
          </IconButton>
          <span className="text-xs font-bold">Chat</span>
        </div>

        <div className="flex flex-col items-center">
          <IconButton color="primary" aria-label="notifications">
            <NotificationsIcon />
          </IconButton>
          <span className="text-xs font-bold">Alerts</span>
        </div>

        {/* DSA Sheet Button linked to the /dsa-sheet route */}
        <div className="flex flex-col items-center">
          <Link to="/dsa-sheet"> {/* Use Link to navigate */}
            <IconButton color="primary" aria-label="dsa sheet">
              <ArticleIcon />
            </IconButton>
          </Link>
          <span className="text-xs font-bold">DSA Sheet</span>
        </div>

        <div className="flex flex-col items-center">
          <IconButton color="primary" aria-label="profile">
            <AccountCircleIcon />
          </IconButton>
          <span className="text-xs font-bold">Profile</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
