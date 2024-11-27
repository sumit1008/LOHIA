import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./pages/Dashboard";
import AttendanceTracker from "./pages/Attendance-Tracker";
import ToDoList from "./pages/To-Do-List";
import CodingProfile from "./pages/Coding-Profile/CodingProfile";
import DsaSheetLanding from "./pages/Dsa-Sheet-Landing";
import DsaSheet from "./pages/Dsa-Sheet";
import EditProfile from "./pages/Edit-Profile"; // Import EditProfile component

// Context for Dark Mode
export const DarkModeContext = createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // User data for the profile
  const [user, setUser] = useState({
    username: "Wonder",
    location: "Earth",
    college: "NIT",
    degree: "B.Tech",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    gmail: "wonder@gmail.com",
    profilePhoto: "/path/to/default/photo.jpg",
  });

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <div className={isDarkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"}>
        <BrowserRouter>
          <section className="main flex">
            <Routes>
              {/* Route for DSA Sheet Landing */}
              <Route
                path="/dsa-sheet"
                element={
                  <div className="content-Right w-[100%]">
                    <Navbar />
                    <DsaSheetLanding />
                  </div>
                }
              />
              {/* Route for Add DSA Sheet */}
              <Route
                path="/dsa-sheet/add"
                element={
                  <div className="content-Right w-[100%]">
                    <Navbar />
                    <DsaSheet />
                  </div>
                }
              />
              {/* Catch-All Route for Other Pages */}
              <Route
                path="*"
                element={
                  <>
                    <div className="sidebarWrapper w-[15%] bg-gray-100 dark:bg-gray-800">
                      <Sidebar user={user} />
                    </div>
                    <div className="content-Right w-[85%]">
                      <Navbar />
                      <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/attendance-tracker" element={<AttendanceTracker />} />
                        <Route path="/to-do-list" element={<ToDoList />} />
                        <Route path="/coding-profile" element={<CodingProfile />} />
                        <Route
                          path="/edit-profile"
                          element={<EditProfile user={user} setUser={setUser} />}
                        />
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
