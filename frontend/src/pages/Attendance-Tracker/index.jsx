import React, { useState, useContext } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Button, TextField, Card } from '@mui/material';
import { DarkModeContext } from '../../App';

function AttendanceTracker() {
  const [subjects, setSubjects] = useState([]);
  const [newSubject, setNewSubject] = useState('');
  const [attendance, setAttendance] = useState({});
  const { isDarkMode } = useContext(DarkModeContext); // Get the dark mode status from context

  // Add Subject Function
  const addSubject = () => {
    if (newSubject.trim()) {
      setSubjects([...subjects, newSubject]);
      setAttendance({ ...attendance, [newSubject]: { present: 0, absent: 0, total: 0 } });
      setNewSubject('');
    }
  };

  // Mark Attendance for Present or Absent
  const markAttendance = (subject, isPresent) => {
    const current = attendance[subject];
    const updated = {
      present: current.present + (isPresent ? 1 : 0),
      absent: current.absent + (isPresent ? 0 : 1),
      total: current.total + 1,
    };
    setAttendance({ ...attendance, [subject]: updated });
  };

  // Calculate Attendance Percentage
  const calculatePercentage = (subject) => {
    const { present, total } = attendance[subject];
    return total ? ((present / total) * 100).toFixed(2) : '0.00';
  };

  // Delete Subject Function
  const deleteSubject = (subject) => {
    setSubjects(subjects.filter((s) => s !== subject));
    const updatedAttendance = { ...attendance };
    delete updatedAttendance[subject];
    setAttendance(updatedAttendance);
  };

  return (
    <div>
      {/* Add Subject Section */}
      <Card
        style={{
          padding: '20px',
          margin: '20px',
          backgroundColor: isDarkMode ? '#333' : '#fff', // Black for dark mode, white otherwise
          color: isDarkMode ? '#fff' : '#000', // White text for dark mode, black otherwise
        }}
      >
        <TextField
          label="Add Subject"
          value={newSubject}
          onChange={(e) => setNewSubject(e.target.value)}
          style={{
            marginRight: '10px',
            backgroundColor: isDarkMode ? '#555' : '#f5f5f5', // Darker background in dark mode
            color: isDarkMode ? '#fff' : '#000',
            borderRadius: '5px',
          }}
          InputProps={{
            style: { color: isDarkMode ? '#fff' : '#000' }, // Adjust input text color for dark mode
          }}
          InputLabelProps={{
            style: { color: isDarkMode ? '#fff' : '#000' }, // Change label color for dark mode
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={addSubject}
          style={{
            backgroundColor: isDarkMode ? '#1976d2' : '#3f51b5',
            color: '#fff',
          }}
        >
          Add Subject
        </Button>
      </Card>

      {/* Attendance Table */}
      <Table style={{ color: isDarkMode ? '#fff' : '#000' }}>
        <TableHead>
          <TableRow>
            <TableCell style={{ color: isDarkMode ? '#fff' : '#000' }}>Subject</TableCell>
            <TableCell style={{ color: isDarkMode ? '#fff' : '#000' }}>Present</TableCell>
            <TableCell style={{ color: isDarkMode ? '#fff' : '#000' }}>Absent</TableCell>
            <TableCell style={{ color: isDarkMode ? '#fff' : '#000' }}>Total</TableCell>
            <TableCell style={{ color: isDarkMode ? '#fff' : '#000' }}>Attendance (%)</TableCell>
            <TableCell style={{ color: isDarkMode ? '#fff' : '#000' }}>Mark Attendance</TableCell>
            <TableCell style={{ color: isDarkMode ? '#fff' : '#000' }}>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {subjects.map((subject) => (
            <TableRow key={subject}>
              <TableCell style={{ color: isDarkMode ? '#fff' : '#000' }}>{subject}</TableCell>
              <TableCell style={{ color: isDarkMode ? '#fff' : '#000' }}>
                {attendance[subject]?.present || 0}
              </TableCell>
              <TableCell style={{ color: isDarkMode ? '#fff' : '#000' }}>
                {attendance[subject]?.absent || 0}
              </TableCell>
              <TableCell style={{ color: isDarkMode ? '#fff' : '#000' }}>
                {attendance[subject]?.total || 0}
              </TableCell>
              <TableCell style={{ color: isDarkMode ? '#fff' : '#000' }}>
                {calculatePercentage(subject)}%
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => markAttendance(subject, true)}
                  style={{ marginRight: '10px', color: '#fff' }}
                >
                  Present
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => markAttendance(subject, false)}
                  style={{ color: '#fff' }}
                >
                  Absent
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => deleteSubject(subject)}
                  style={{ color: '#fff' }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default AttendanceTracker;
