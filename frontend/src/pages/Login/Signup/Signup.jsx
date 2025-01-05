import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import { Google as GoogleIcon } from "@mui/icons-material";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign Up Submitted", { name, email, password });
    alert("Account Created Successfully!");
    window.location.href = "/";
  };

  const handleGoogleSignUp = () => {
    alert("Google Sign-Up Successful!");
  };

  return (
    <Container
      maxWidth="xs"
      style={{
        background: "#fff",
        borderRadius: "8px",
        padding: "2rem",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h4" color="primary" gutterBottom>
          Create Account
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Sign up to get started
        </Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          type="text"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
        />
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          style={{ marginTop: "1rem" }}
        >
          Sign Up
        </Button>
      </form>

      <Button
        onClick={handleGoogleSignUp}
        startIcon={<GoogleIcon />}
        fullWidth
        variant="outlined"
        size="large"
        style={{
          marginTop: "1rem",
          color: "#4285F4",
          borderColor: "#4285F4",
        }}
      >
        Sign up with Google
      </Button>

      <Grid container justifyContent="center" style={{ marginTop: "1rem" }}>
        <Grid item>
          <Typography
            variant="body2"
            color="primary"
            component="a"
            href="/login"
            style={{ textDecoration: "none" }}
          >
            Already have an account? Log In
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUp;
