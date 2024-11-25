import React, { useState, createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/navbar/Navbar';
import Dashboard from './pages/Dashboard';
import AttendanceTracker from './pages/Attendance-Tracker';
import ToDoList from './pages/To-Do-List';
import CodingProfile from './pages/Coding-Profile/CodingProfile';
import DsaSheetLanding from './pages/Dsa-Sheet-Landing';
import DsaSheet from './pages/Dsa-Sheet'; // Import the DsaSheet component

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
            <Routes>
              {/* Route for DsaSheetLanding */}
              <Route
                path="/dsa-sheet"
                element={
                  <div className="content-Right w-[100%]">
                    <Navbar />
                    <DsaSheetLanding />
                  </div>
                }
              />
              {/* Route for Make Your Own DSA Sheet */}
              <Route
                path="/dsa-sheet/add"
                element={
                  <div className="content-Right w-[100%]">
                    <Navbar />
                    <DsaSheet />
                  </div>
                }
              />
              <Route
                path="*"
                element={
                  <>
                    <div className="sidebarWrapper w-[15%] bg-gray-100 dark:bg-gray-800">
                      <Sidebar />
                    </div>
                    <div className="content-Right w-[85%]">
                      <Navbar />
                      <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/attendance-tracker" element={<AttendanceTracker />} />
                        <Route path="/to-do-list" element={<ToDoList />} />
                        <Route path="/coding-profile" element={<CodingProfile />} />
                      </Routes>
                    </div>
                  </>
                }
              />
            </Routes>
          </section>
        </BrowserRouter>
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
