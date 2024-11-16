import React, { useState, createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/navbar/Navbar';
import Dashboard from './pages/Dashboard';
import AttendanceTracker from './pages/Attendance-Tracker';
import DsaSheet from './pages/Dsa-Sheet'; // Import the DSA Sheet page

// Create a Context for Dark Mode
export const DarkModeContext = createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <div className={isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-black'}>
        <BrowserRouter>
          <section className="main flex">
            {/* Sidebar */}
            <div className="sidebarWrapper w-[15%] bg-gray-100 dark:bg-gray-800">
              <Sidebar />
            </div>

            {/* Content Area */}
            <div className="content-Right w-[85%]">
              <Navbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/attendance-tracker" element={<AttendanceTracker />} />
                <Route path="/dsa-sheet" element={<DsaSheet />} /> {/* Add route for DSA Sheet */}
              </Routes>
            </div>
          </section>
        </BrowserRouter>
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
