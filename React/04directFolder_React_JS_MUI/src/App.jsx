import './App.css'
import React, { useState } from "react";
import {
  Box,
  Paper,
  Grid,
  TextField,
  Typography,
  Button,
} from "@mui/material";

import loginImage from "./assets/login.jpg";
import Login from './login';

function App() {
  // State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  // Handle Input Change
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Validation Function
  const validateForm = () => {
    let newErrors = {};

    // Email Validation
    if (email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email";
    }

    // Password Validation
    if (password.trim() === "") {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password should be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit
  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      console.log("Email :", email);
      console.log("Password :", password);
    }
  };

  return (
    <>
    <Login/>
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(to right, #74ebd5, #ACB6E5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
        }}
      >
        <Paper
          elevation={5}
          sx={{
            width: "90%",
            maxWidth: 900,
            borderRadius: 3,
            overflow: "hidden",
          }}
        >
          <Grid container>
            {/* Left Panel */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f5f5f5",
                padding: 3,
              }}
            >
              <img
                src={loginImage}
                alt="Login"
                style={{
                  width: "20%",
                  // maxWidth: "350px",
                }}
              />
            </Grid>

            {/* Right Panel */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                padding: 4,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h4"
                textAlign="center"
                fontWeight="bold"
                mb={3}
              >
                Login
              </Typography>

              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  label="Email"
                  fullWidth
                  margin="normal"
                  value={email}
                  onChange={handleEmailChange}
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                />

                <TextField
                  label="Password"
                  type="password"
                  fullWidth
                  margin="normal"
                  value={password}
                  onChange={handlePasswordChange}
                  error={Boolean(errors.password)}
                  helperText={errors.password}
                />

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 3,
                    backgroundColor: "green",
                    "&:hover": {
                      backgroundColor: "darkgreen",
                    },
                  }}
                >
                  Login
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
}

export default App;

// Create a responsive React login page using Material UI with email validation, password validation, loading state, and error handling.

// in react js using Material UI , i have to create a Create a responsive React login page
// could you guide over the steps without the code in short around 100-150 words in bullets
// Consider in steps as well the validation -simple validations

// okay understood, now can u give the code straucture so i can implement it
// keep it super simple component structure 
// Using App.jsx for login , so use App component itself for creating the login Page
// Create a responive design , login button with green color , use gradient as a background to the page
// Create right and left panel somrthing , left side should hold an image and right should be the login form
// Include the simple validations in the form and use a console statement for printing the details after the successful submission
// For error dispay beside the textfeild itself
// Dont use alert prompt anywhere 

// I am good with with this , now pls give the code for implemenatation