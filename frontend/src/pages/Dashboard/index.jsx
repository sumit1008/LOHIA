import React, { useContext } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ListIcon from '@mui/icons-material/List';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../App'; // Import context

const cardsData = [
  {
    title: 'Coding Profile',
    icon: <PersonIcon style={{ fontSize: 100, opacity: 0.15, position: 'absolute', top: '30%', right: '10%' }} />,
    bgGradient: 'linear-gradient(135deg, #EF4444, #F87171)',
    path: '/coding-profile',
  },
  {
    title: 'Attendance Tracker',
    icon: <CheckCircleIcon style={{ fontSize: 100, opacity: 0.15, position: 'absolute', top: '30%', right: '10%' }} />,
    bgGradient: 'linear-gradient(135deg, #10B981, #34D399)',
    path: '/attendance-tracker',
  },
  {
    title: 'Assignment Reminder',
    icon: <ListIcon style={{ fontSize: 100, opacity: 0.15, position: 'absolute', top: '30%', right: '10%' }} />,
    bgGradient: 'linear-gradient(135deg, #F59E0B, #FBBF24)',
    path: '/assignment-reminder',
  },
  {
    title: 'To-Do List',
    icon: <ListIcon style={{ fontSize: 100, opacity: 0.15, position: 'absolute', top: '30%', right: '10%' }} />,
    bgGradient: 'linear-gradient(135deg, #FB923C, #FDBA74)',
    path: '/to-do-list',
  },
  {
    title: 'Contest Reminder',
    icon: <LeaderboardIcon style={{ fontSize: 100, opacity: 0.15, position: 'absolute', top: '30%', right: '10%' }} />,
    bgGradient: 'linear-gradient(135deg, #1dadb1, #2DD4BF)',
    path: '/contest-remainder',
  },
  {
    title: 'Database of Imp File',
    icon: <LeaderboardIcon style={{ fontSize: 100, opacity: 0.15, position: 'absolute', top: '30%', right: '10%' }} />,
    bgGradient: 'linear-gradient(135deg, #8829dc, #A855F7)',
    path: '/database-of-imp-file',
  },
];

const leaderboardCard = {
  title: 'LeaderBoard',
  icon: <LeaderboardIcon style={{ fontSize: 100, opacity: 0.15, position: 'absolute', top: '30%', right: '10%' }} />,
  bgGradient: 'linear-gradient(135deg, #3B82F6, #60A5FA)',
  path: '/leaderboard',
};

function Dashboard() {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div className={`p-4 space-y-4 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'}`}>
      {/* Marquee Cards */}
      <div className="flex flex-col space-y-4">
  {/* Daily Challenge Card */}
  <Card
    className={`rounded-lg shadow-md ${
      isDarkMode ? 'bg-black text-white' : 'bg-purple-500 text-white'
    }`}
  >
    <CardContent>
      <marquee
        behavior="scroll"
        direction="left"
        className={`text-sm font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}
      >
        <a
          href="https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/description/"
          className={`hover:underline ${isDarkMode ? 'text-gray-300' : 'text-gray-700 no-underline'}`}
        >
          Subarray to be removed (Daily Challenge)
        </a>
      </marquee>
    </CardContent>
  </Card>

  {/* Weekly Challenge Card */}
  <Card
    className={`rounded-lg shadow-md ${
      isDarkMode ? 'bg-black text-white' : 'bg-indigo-500 text-white'
    }`}
  >
    <CardContent>
      <marquee
        behavior="scroll"
        direction="left"
        className={`text-sm font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}
      >
        <a
          href="https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/?envType=daily-question&envId=2024-11-15"
          className={`hover:underline ${isDarkMode ? 'text-gray-300' : 'text-gray-700 no-underline'}`}
        >
          Shortest Subarray to be Removed (Weekly Challenge)
        </a>
      </marquee>
    </CardContent>
  </Card>
</div>

      {/* Main Content */}
      <div className="grid grid-cols-3 gap-4">
        {/* Main Cards */}
        <div className="col-span-2 grid grid-cols-2 gap-4">
          {cardsData.map((card, index) => (
            <Link to={card.path} key={index} className="no-underline">
              <Card
                style={{
                  background: card.bgGradient,
                  color: 'white',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                className="rounded-lg shadow-lg transform hover:scale-105 transition-transform"
              >
                <CardContent>
                  <div className="absolute top-0 left-0 w-full h-full z-0">{card.icon}</div>
                  <div className="relative z-10">
                    <Typography variant="h5" component="div">
                      {card.title}
                    </Typography>
                    <Typography variant="body2" className="mt-2">
                      Last Month
                    </Typography>
                    <Typography variant="h6" className="mt-1 font-semibold">
                      277 Users
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Notice and Leaderboard */}
        <div className="col-span-1 space-y-8 mb-5">
         {/* Notice Card */}
         <Card
  className={`rounded-lg shadow-lg h-64 p-4 mb-2 ${
    isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'
  }`}
>
  <Typography
    variant="h5"
    className={`mb-2 font-semibold ${isDarkMode ? 'text-gray-300' : 'text-purple-600'}`}
  >
    Notice Board
  </Typography>
  <div className="relative h-full overflow-hidden">
    <div
      className={`absolute animate-vertical-scroll ${
        isDarkMode ? 'text-gray-300' : 'text-gray-900'
      }`}
      style={{ animationDuration: '10s' }}
    >
      <p className="mb-4">Welcome to the Notice Board. Here you will find important updates and announcements.</p>
      <p className="mb-4">Reminder: Project submission deadline is next week. Please make sure to submit your work on time.</p>
      <p className="mb-4">Don't forget to participate in the upcoming hackathon!</p>
      <p className="mb-4">Check the latest leaderboard standings in the LeaderBoard section.</p>
    </div>
  </div>
</Card>




          {/* Leaderboard Card */}
          <Link to={leaderboardCard.path} className="no-underline">
            <Card
              style={{
                background: leaderboardCard.bgGradient,
                color: 'white',
                position: 'relative',
                overflow: 'hidden',
              }}
              className="rounded-lg shadow-lg h-50 p-4 transform hover:scale-105 transition-transform"
            >
              <CardContent>
                <div className="absolute top-0 left-0 w-full h-full z-0">{leaderboardCard.icon}</div>
                <div className="relative z-10">
                  <Typography variant="h5" component="div">
                    {leaderboardCard.title}
                  </Typography>
                  <Typography variant="body2" className="mt-2">
                    View the top performers of the month!
                  </Typography>
                  <Typography variant="h6" className="mt-1 font-semibold">
                    277 Users
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
