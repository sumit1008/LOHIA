import React, { useState, useContext } from 'react';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import axios from 'axios';
import { DarkModeContext } from '../../App'; // Import dark mode context

const platforms = [
  { name: 'LeetCode', icon: LeaderboardIcon, url: 'https://leetcode.com/' },
  { name: 'Codeforces', icon: TrendingUpIcon, url: 'https://codeforces.com/profile/' },
  { name: 'CodeChef', icon: FlashOnIcon, url: 'https://www.codechef.com/users/' },
  { name: 'GeeksforGeeks', icon: AccountCircleIcon, url: 'https://www.geeksforgeeks.org/user/' },
];

function CodingProfile() {
  const { isDarkMode } = useContext(DarkModeContext); // Get dark mode state from context

  // Separate state for each platform's username
  const [usernames, setUsernames] = useState({
    LeetCode: '',
    Codeforces: '',
    CodeChef: '',
    GeeksforGeeks: '',
  });

  const [platformStats, setPlatformStats] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleUsernameChange = (platform, value) => {
    setUsernames((prev) => ({
      ...prev,
      [platform]: value,
    }));
  };

  const fetchStats = async () => {
    try {
      setLoading(true);
      setError('');
      const stats = {};

      // Fetch stats for each platform
      for (const platform of Object.keys(usernames)) {
        if (usernames[platform]) {
          try {
            const response = await axios.get(
              `https://leetcode-stats-api.herokuapp.com/${usernames[platform]}`
            );
            stats[platform] = response.data;
          } catch (err) {
            stats[platform] = 'Error fetching stats';
          }
        }
      }

      setPlatformStats(stats);
    } catch (err) {
      setError('Error fetching data. Please check the usernames or try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`p-4 min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}
    >
      <Typography variant="h4" gutterBottom className="text-center font-bold">
        Coding Profile
      </Typography>

      {/* Input fields for each platform's username */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {platforms.map((platform) => (
          <div key={platform.name} className="flex flex-col items-center">
            <TextField
              label={`Enter ${platform.name} Username`}
              variant="outlined"
              value={usernames[platform.name]}
              onChange={(e) =>
                handleUsernameChange(platform.name, e.target.value)
              }
              fullWidth
              className={`rounded-lg ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-50 text-black'}`}
              InputLabelProps={{
                style: { color: isDarkMode ? 'white' : 'black' },
              }}
            />
          </div>
        ))}
      </div>

      {/* Fetch stats button */}
      <div className="flex justify-center mb-8">
        <Button
          variant="contained"
          color="secondary"
          onClick={fetchStats}
          className={`${isDarkMode ? 'bg-purple-500 hover:bg-purple-700 text-white' : 'bg-purple-500 hover:bg-purple-700 text-black'}`}
        >
          Fetch Stats
        </Button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center">
          <CircularProgress className={`${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
        </div>
      ) : error ? (
        <Typography color="error" className="text-center">
          {error}
        </Typography>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <a
                href={platform.url + usernames[platform.name]} // Link to the user's profile
                target="_blank"
                rel="noopener noreferrer"
                key={platform.name}
                className="w-full"
                style={{ textDecoration: 'none' }} // No underline
              >
                <Card
                  key={platform.name}
                  className={`shadow-lg hover:scale-105 transition-transform rounded-lg overflow-hidden ${
                    isDarkMode
                      ? 'bg-black text-white' // Dark mode: background black, text white
                      : 'bg-white text-black' // Light mode: background white, text black
                  }`}
                >
                  <CardContent className="flex flex-col items-center">
                    <div className="text-center mb-4">
                      <Icon
                        fontSize="large"
                        style={{ color: isDarkMode ? 'white' : 'black' }} // Icon color changes based on mode
                      />
                      <Typography
                        variant="h5"
                        className={`font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}
                      >
                        {platform.name}
                      </Typography>
                    </div>
                    {platformStats[platform.name] ? (
                      <div className="space-y-2 text-center">
                        <Typography variant="body2">
                          <span className="font-semibold">Total Solved:</span>{' '}
                          {platformStats[platform.name].totalSolved || 'N/A'}
                        </Typography>
                        <Typography variant="body2">
                          <span className="font-semibold">Rating:</span>{' '}
                          {platformStats[platform.name].rating || 'N/A'}
                        </Typography>
                        <Typography variant="body2">
                          <span className="font-semibold">Streak:</span>{' '}
                          {platformStats[platform.name].streak || 'N/A'}
                        </Typography>
                      </div>
                    ) : (
                      <Typography
                        variant="body2"
                        className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                      >
                        Stats not available
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CodingProfile;
