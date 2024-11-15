import React, { useState, createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/navbar/Navbar';
import Dashboard from './pages/Dashboard';

// Create a Context for Dark Mode
export const DarkModeContext = createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); // State to manage dark mode

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(prevState => !prevState); // Toggle dark mode
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <BrowserRouter>
        <section className={`main flex ${isDarkMode ? 'dark' : ''}`}>
          <div className="sidebarWrapper w-[15%]">
            <Sidebar />
          </div>
          <div className="content-Right w-[85%]">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </section>
      </BrowserRouter>
    </DarkModeContext.Provider>
  );
}

export default App;
