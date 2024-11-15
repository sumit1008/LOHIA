import React, { useContext } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ListIcon from '@mui/icons-material/List';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../App'; // Import context

const cardsData = [
  { title: 'Coding Profile', icon: <PersonIcon />, bgColor: '#EF4444', path: '/coding-profile' },
  { title: 'Attendance Tracker', icon: <CheckCircleIcon />, bgColor: '#10B981', path: '/attendance-tracker' },
  { title: 'Assignment Reminder', icon: <ListIcon />, bgColor: '#F59E0B', path: '/assignment-reminder' },
  { title: 'To-Do List', icon: <ListIcon />, bgColor: '#FB923C', path: '/to-do-list' },
  { title: 'Contest Reminder', icon: <LeaderboardIcon />, bgColor: '#1dadb1', path: '/contest-remainder' },
  { title: 'Database of Imp File', icon: <LeaderboardIcon />, bgColor: '#8829dc', path: '/database-of-imp-file' },
];

// Define leaderboard card data separately for the right side
const leaderboardCard = {
  title: 'LeaderBoard',
  icon: <LeaderboardIcon />,
  bgColor: '#3B82F6',
  path: '/leaderboard',
};

function Dashboard() {
  const { isDarkMode } = useContext(DarkModeContext); // Get dark mode state from context

  return (
    <div className={`p-4 space-y-4 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'}`}>
      {/* Marquee Cards */}
      <div className="flex flex-col space-y-4">
        <Card className={`w-full ${isDarkMode ? 'bg-purple-700' : 'bg-purple-500'} text-white`}>
          <CardContent>
            <marquee behavior="scroll" direction="left">
              <span>
                <a href="https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/description/" className={`text-black-300 hover:text-blue-500 font-bold no-underline ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Subarray to be removed(Daily Challange)
                </a>
              </span>
            </marquee>
          </CardContent>
        </Card>

        <Card className={`w-full ${isDarkMode ? 'bg-indigo-700' : 'bg-indigo-500'} text-white`}>
          <CardContent>
            <marquee behavior="scroll" direction="left">
              <span>
                <a href="https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/?envType=daily-question&envId=2024-11-15" className={`text-black-300 hover:text-blue-500 font-bold no-underline ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Shortest Subarray to be Removed(Weekly Challange)
                </a>
              </span>
            </marquee>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-3 gap-4">
        {/* Main Cards (Left Side) */}
        <div className="col-span-2 grid grid-cols-2 gap-4">
          {cardsData.map((card, index) => (
            <Link to={card.path} key={index} className="no-underline">
              <Card style={{ backgroundColor: card.bgColor, color: 'white' }} className={`text-white shadow-lg ${isDarkMode ? 'bg-opacity-90' : 'bg-opacity-100'}`}>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Typography variant="h5" component="div">
                      {card.title}
                    </Typography>
                    <div className="text-4xl">{card.icon}</div>
                  </div>
                  <Typography variant="body2" className="mt-2">
                    Last Month
                  </Typography>
                  <Typography variant="h6" className="mt-1 font-semibold">
                    277 Users
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Right Side: Notice Card and Leaderboard Card */}
        <div className="col-span-1 space-y-4">
          {/* Notice Card */}
          <Card className={`w-full shadow-lg h-64 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100'}`}>
            <CardContent>
              <div className="relative overflow-hidden h-full">
                <Typography variant="h5" className="mb-2 font-semibold">Notice</Typography>
                <div className="scrolling-text">
                  <p>Welcome to the Notice Board. Here you will find important updates and announcements.</p>
                  <p>Reminder: Project submission deadline is next week. Please make sure to submit your work on time.</p>
                  <p>Don't forget to participate in the upcoming hackathon!</p>
                  <p>Check the latest leaderboard standings in the LeaderBoard section.</p>
                  <p>Stay tuned for more updates!</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Leaderboard Card */}
          <Link to={leaderboardCard.path} className="no-underline">
            <Card style={{ backgroundColor: leaderboardCard.bgColor, color: 'white' }} className={`text-white shadow-lg h-48 mt-4 ${isDarkMode ? 'bg-opacity-90' : 'bg-opacity-100'}`}>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Typography variant="h5" component="div">
                    {leaderboardCard.title}
                  </Typography>
                  <div className="text-4xl">{leaderboardCard.icon}</div>
                </div>
                <Typography variant="body2" className="mt-2">
                  View the top performers of the month!
                </Typography>
                <Typography variant="h6" className="mt-1 font-semibold">
                  277 Users
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
