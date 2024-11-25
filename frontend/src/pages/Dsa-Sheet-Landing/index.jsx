import React, { useContext } from "react";
import {
  TextField,
  Button,
  Card,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { DarkModeContext } from "../../App";
import { useLocation } from "react-router-dom";
import DsaSidebar from "../../components/dsa-sidebar/dsaSidebar"; // Import the sidebar
import CodeIcon from "@mui/icons-material/Code";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    height: "100vh",
    width: "100%",
  },
  sidebar: {
    width: "250px",
    background: "#1f1f1f", // Sidebar dark background
    padding: "20px",
  },
  mainContent: {
    flex: 1,
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "linear-gradient(135deg, #f7f7f7, #e6e6e6)", // Light gray gradient for light mode
    minHeight: "100vh",
    transition: "background 0.3s ease",
  },
  mainContentDark: {
    background: "linear-gradient(135deg, #333333, #111111)", // Dark mode gradient
  },
  welcomeSection: {
    width: "100%",
    padding: "40px",
    textAlign: "center",
    borderRadius: "15px",
    background: "#fff", // Default to white for light mode
    color: "#000",
    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
    animation: "fadeIn 1s ease-in-out",
    position: "relative",
  },
  welcomeSectionDark: {
    background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)", // Dark gradient for dark mode
  },
  welcomeTitle: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
    fontFamily: "Poppins, Arial, sans-serif",
  },
  welcomeText: {
    fontSize: "1.3rem",
    lineHeight: "1.8",
    fontFamily: "Roboto, sans-serif",
    opacity: "0.9",
  },
  createSheetCard: {
    width: "100%",
    maxWidth: "700px",
    padding: "30px",
    textAlign: "center",
    borderRadius: "15px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
    animation: "slideIn 0.8s ease-out",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
    color: "#fff",
  },
  inputField: {
    margin: "15px 0",
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#fff",
    },
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: "bold",
    borderRadius: "5px",
    "&:hover": {
      background: "linear-gradient(135deg, #2575fc 0%, #6a11cb 100%)",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
    },
  },
  icon: {
    fontSize: "40px",
    marginBottom: "15px",
    color: "#6a11cb", // Matching the gradient color
  },
}));

function DsaSheetLanding() {
  const classes = useStyles();
  const { isDarkMode } = useContext(DarkModeContext);
  const location = useLocation();

  const renderLandingPage = () => (
    <div
      className={`${classes.welcomeSection} ${isDarkMode ? classes.welcomeSectionDark : ""}`}
    >
      <h1 className={classes.welcomeTitle}>
        Welcome to the DSA Sheet Section
      </h1>
      <p className={classes.welcomeText}>
        Begin your journey of mastering Data Structures and Algorithms with us!
        <br />
        Create a custom DSA sheet or track your progress through our tools.
        Unlock your coding potential now!
      </p>
    </div>
  );

  const renderCreateYourOwnSheet = () => (
    <Card
      className={classes.createSheetCard}
      style={{
        backgroundColor: isDarkMode ? "#333" : "#f3f4f6", // Subtle light gray for light mode
        color: isDarkMode ? "#fff" : "#000",
      }}
    >
      <Box className="flex flex-col items-center mb-4 mr-2">
        <CodeIcon className={classes.icon} />
        <Typography variant="h4" gutterBottom>
          Create Your Own DSA Sheet
        </Typography>
      </Box>
      <Typography variant="body1" paragraph>
        Add your custom DSA questions and build your personal problem-solving
        plan.
      </Typography>
      {/* Input Fields */}
      <TextField
        label="Question Title"
        variant="outlined"
        fullWidth
        className={classes.inputField}
      />
      <TextField
        label="Question Description"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        className={classes.inputField}
      />
      <TextField
        label="Category (e.g., Arrays, Linked List)"
        variant="outlined"
        fullWidth
        className={classes.inputField}
      />
      <Button className={classes.button}>Add Question</Button>
    </Card>
  );

  return (
    <div className={classes.root}>
      {/* Sidebar */}
      <DsaSidebar />

      {/* Main Content */}
      <div
        className={`${classes.mainContent} ${
          isDarkMode ? classes.mainContentDark : ""
        }`}
      >
        {location.hash === "#add"
          ? renderCreateYourOwnSheet()
          : renderLandingPage()}
      </div>
    </div>
  );
}

export default DsaSheetLanding;
