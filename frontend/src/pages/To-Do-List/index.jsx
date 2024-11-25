import React, { useState, useContext } from 'react';
import { TextField, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DarkModeContext } from '../../App';

function ToDoList() {
  const { isDarkMode } = useContext(DarkModeContext);
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [reminderTime, setReminderTime] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // Request Notification Permission
  const requestNotificationPermission = async () => {
    if (Notification.permission === 'default') {
      await Notification.requestPermission();
    }
  };

  // Send Reminder Data to Service Worker
  const sendToServiceWorker = (task, delay) => {
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({
        type: 'SET_REMINDER',
        task: task,
        delay: delay,
      });
    }
  };

  // Add or Update Task
  const handleAddOrUpdateTask = () => {
    if (editMode) {
      const updatedTasks = tasks.map((task, index) =>
        index === editIndex ? { text: taskInput, reminderTime } : task
      );
      setTasks(updatedTasks);
      setEditMode(false);
      setEditIndex(null);
    } else {
      const newTask = { text: taskInput, reminderTime };
      setTasks([...tasks, newTask]);

      // Send Reminder to Service Worker
      if (reminderTime) {
        const reminderDelay = reminderTime * 60 * 1000; // Convert minutes to milliseconds
        sendToServiceWorker(taskInput, reminderDelay);
      }
    }
    setTaskInput('');
    setReminderTime('');
  };

  // Delete Task
  const handleDeleteTask = (index) => {
    const filteredTasks = tasks.filter((_, i) => i !== index);
    setTasks(filteredTasks);
  };

  // Edit Task
  const handleEditTask = (index) => {
    setTaskInput(tasks[index].text);
    setReminderTime(tasks[index].reminderTime);
    setEditMode(true);
    setEditIndex(index);
  };

  // Request Notification Permission on Load
  React.useEffect(() => {
    requestNotificationPermission();
  }, []);

  return (
    <div className={`p-4 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'}`}>
      <h1 className="text-center font-bold text-2xl mb-4">To-Do List</h1>

      {/* Input and Add Button */}
      <div className="flex items-center mb-4">
        <TextField
          variant="outlined"
          placeholder="Enter a task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          className={`flex-1 mr-2 ${isDarkMode ? 'bg-gray-800 text-white' : ''}`}
        />
        {/* <TextField
          variant="outlined"
          placeholder="Reminder in minutes"
          value={reminderTime}
          onChange={(e) => setReminderTime(e.target.value)}
          type="number"
          className={`mr-2 w-32 ${isDarkMode ? 'bg-gray-800 text-white' : ''}`}
        /> */}
        <Button variant="contained" color="primary" onClick={handleAddOrUpdateTask} className='w-40 ml-10 mr-11'>
          {editMode ? 'Update' : 'Add'}
        </Button>
      </div>

      {/* Task List */}
      <List>
        {tasks.map((task, index) => (
          <ListItem
            key={index}
            className={`rounded-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100'} mb-2`}
          >
            <ListItemText primary={`${task.text} (Reminder: ${task.reminderTime || 'None'} min)`} />
            <IconButton onClick={() => handleEditTask(index)} color="primary">
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => handleDeleteTask(index)} color="secondary">
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default ToDoList;
