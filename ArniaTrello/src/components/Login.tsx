// src/components/Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import axios from 'axios';
import { Typography, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { LoginContainer, StyledButton, StyledTextField } from './LoginStyles';


const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Usar useNavigate

  const handleLogin = async () => {
    try {
      const response = await axios.post('YOUR_API_ENDPOINT/login', {
        email,
        password,
      });
      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token); // Salvar token no localStorage
        navigate('/'); // Redirecionar para a tela do Kanban
      } else {
        // Trate o caso onde o token não está presente
        console.error('No token received');
      }
    } catch (error) {
      console.error('Login failed', error);
      // Trate os erros conforme necessário
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <LoginContainer component={Paper}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <form noValidate autoComplete="off">
        <StyledTextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={handleEmailChange}
        />
        <StyledTextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={handlePasswordChange}
        />
        <StyledButton variant="contained" onClick={handleLogin}>
          Login
        </StyledButton>
        <Typography>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </Typography>
      </form>
    </LoginContainer>
  );
};

export default Login;
