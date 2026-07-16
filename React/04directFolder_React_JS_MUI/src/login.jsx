import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container, Paper } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    
    setError('');
    // Here you can handle the login logic, e.g., send a request to your backend
    console.log('Logging in with:', { email, password });
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          flexWrap: 'wrap',
        }}
      >
        <Paper elevation={3} sx={{ padding: 4, width: '100%' }}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center', mb: 3 }}>
            Login
          </Typography>
          
          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              variant="outlined"
            />
            
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              variant="outlined"
            />
            
            {error && (
              <Typography color="error" variant="body2">
                {error}
              </Typography>
            )}
            
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Login
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login;


//