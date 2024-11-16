import React, { useContext, useState } from 'react';
import { TextField, Button, Checkbox, Card, Typography, Table, TableBody, TableCell, TableHead, TableRow, CircularProgress, IconButton } from '@mui/material';
import { makeStyles } from "@mui/styles";
import { DarkModeContext } from '../../App';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReplayIcon from '@mui/icons-material/Replay';

// Custom styles for the DSA Sheet page
const useStyles = makeStyles((theme) => ({
  card: {
    padding: '20px',
    margin: '20px 0',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  table: {
    marginTop: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  progress: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#4caf50',
  },
  iconButton: {
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'scale(1.2)',
    },
  },
}));

function DsaSheet() {
  const classes = useStyles();
  const { isDarkMode } = useContext(DarkModeContext);
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [newLink, setNewLink] = useState('');
  const [notes, setNotes] = useState('');
  const [completed, setCompleted] = useState(false);
  const [revision, setRevision] = useState(false);

  const addQuestion = () => {
    if (newQuestion && newLink) {
      const questionData = {
        question: newQuestion,
        link: newLink,
        completed,
        revision,
        notes,
      };
      setQuestions([...questions, questionData]);
      setNewQuestion('');
      setNewLink('');
      setNotes('');
      setCompleted(false);
      setRevision(false);
    }
  };

  const handleCheckboxChange = (index, field) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][field] = !updatedQuestions[index][field];
    setQuestions(updatedQuestions);
  };

  const completedQuestions = questions.filter((q) => q.completed).length;
  const totalQuestions = questions.length;
  const completionPercentage = totalQuestions ? Math.round((completedQuestions / totalQuestions) * 100) : 0;
  const remainingQuestions = questions.length - completedQuestions;


  return (
    <div className={`container mx-auto p-4 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      {/* Add Question Section */}
      <Card className={classes.card} style={{ backgroundColor: isDarkMode ? '#333' : '#f5f5f5', color: isDarkMode ? '#fff' : '#000' }}>
        <Typography variant="h5">Add DSA Question</Typography>
        <div className="flex space-x-4">
          <TextField
            label="Question"
            variant="outlined"
            fullWidth
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            style={{
              backgroundColor: isDarkMode ? '#555' : '#fff',
              color: isDarkMode ? '#fff' : '#000',
            }}
            InputProps={{
              style: { color: isDarkMode ? '#fff' : '#000' },
            }}
            InputLabelProps={{
              style: { color: isDarkMode ? '#fff' : '#000' },
            }}
          />
          <TextField
            label="Link"
            variant="outlined"
            fullWidth
            value={newLink}
            onChange={(e) => setNewLink(e.target.value)}
            style={{
              backgroundColor: isDarkMode ? '#555' : '#fff',
              color: isDarkMode ? '#fff' : '#000',
            }}
            InputProps={{
              style: { color: isDarkMode ? '#fff' : '#000' },
            }}
            InputLabelProps={{
              style: { color: isDarkMode ? '#fff' : '#000' },
            }}
          />
        </div>
        <div className="mt-4">
          <TextField
            label="Notes"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            style={{
              backgroundColor: isDarkMode ? '#555' : '#fff',
              color: isDarkMode ? '#fff' : '#000',
            }}
            InputProps={{
              style: { color: isDarkMode ? '#fff' : '#000' },
            }}
            InputLabelProps={{
              style: { color: isDarkMode ? '#fff' : '#000' },
            }}
          />
        </div>
        <div className="mt-4 flex space-x-4">
          <Button
            variant="contained"
            color="primary"
            onClick={addQuestion}
            className="mt-4"
            style={{
              backgroundColor: isDarkMode ? '#1976d2' : '#3f51b5',
              color: '#fff',
            }}
          >
            Add Question
          </Button>
        </div>
      </Card>

      {/* Question List Section */}
      <div className="mt-8">
        <Typography variant="h5">DSA Questions</Typography>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell style={{ color: isDarkMode ? '#fff' : '#000' }}>Question</TableCell>
              <TableCell style={{ color: isDarkMode ? '#fff' : '#000' }}>Link</TableCell>
              <TableCell style={{ color: isDarkMode ? '#fff' : '#000' }}>Completed</TableCell>
              <TableCell style={{ color: isDarkMode ? '#fff' : '#000' }}>Revision</TableCell>
              <TableCell style={{ color: isDarkMode ? '#fff' : '#000' }}>Notes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {questions.map((q, index) => (
              <TableRow key={index}>
                <TableCell style={{ color: isDarkMode ? '#fff' : '#000' }}>{q.question}</TableCell>
                <TableCell style={{ color: isDarkMode ? '#fff' : '#000' }}>
                  <a href={q.link} target="_blank" rel="noopener noreferrer" style={{ color: isDarkMode ? '#1976d2' : '#3f51b5' }}>
                    {q.link}
                  </a>
                </TableCell>
                <TableCell style={{ color: isDarkMode ? '#fff' : '#000' }}>
                  <Checkbox
                    className={classes.iconButton}
                    onClick={() => handleCheckboxChange(index, 'completed')}
                    color="primary"
                  >
                    {q.completed ? <CheckCircleIcon /> : <ReplayIcon />}
                  </Checkbox>
                </TableCell>
                <TableCell style={{ color: isDarkMode ? '#fff' : '#000' }}>
                  <Checkbox
                    checked={q.revision}
                    onChange={() => handleCheckboxChange(index, 'revision')}
                    color="secondary"
                  />
                </TableCell>
                <TableCell style={{ color: isDarkMode ? '#fff' : '#000' }}>{q.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Summary Section with Circular Progress */}
      <div className="mt-8">
        <Typography variant="h6">Completion Status</Typography>
        <div className={classes.progress}>
          <CircularProgress
            variant="determinate"
            value={completionPercentage}
            size={100}
            thickness={4}
            style={{ marginRight: '20px' }}
            color={completionPercentage === 100 ? 'success' : 'primary'}
          />
          <div>
            <Typography variant="h6">{completedQuestions} Completed</Typography>
            <Typography variant="h6">{remainingQuestions} Remaining</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DsaSheet;
