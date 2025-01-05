import React, { useState } from "react";
import SignUp from "./Signup/Signup";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Grid,
  Divider,
} from "@mui/material";
import { Google as GoogleIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Submitted", { email, password });
  };

  const handleGoogleSignIn = () => {
    alert("Google Sign-In Successful");
  };

  return (
    <Container
      maxWidth="xs"
      style={{
        marginTop:"100px",
        background: "#fff",
        borderRadius: "8px",
        padding: "2rem",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h4" color="primary" gutterBottom>
          Welcome Back
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Login to continue
        </Typography>
      </Box>

      <form onSubmit={handleSubmit}>
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
          onClick={()=>{
            alert("Login Successfull");
            window.location.href = "/";
          }}
        >
          Login
        </Button>
      </form>

      <Button
        onClick={handleGoogleSignIn}
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
        Sign in with Google
      </Button>

      <Grid container justifyContent="space-between" style={{ marginTop: "1rem" }}>
        <Grid item>
          <Typography
            variant="body2"
            color="textSecondary"
            component="a"
            href="/forgot-password"
            style={{ textDecoration: "none" }}
          >
            Forgot Password?
          </Typography>
        </Grid>
        <Grid item>
          <Link to={"/SignUp"}><Typography
            variant="body2"
            color="primary"
            component="a"
            href="/sign-up"
            style={{ textDecoration: "none" }}
          >
            Don’t have an account? Sign Up
          </Typography></Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
