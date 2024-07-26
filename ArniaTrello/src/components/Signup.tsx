// src/components/Signup.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import axios from 'axios';
import { Typography, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { SignupContainer, StyledButton, StyledTextField } from './SignupStyles';


const Signup: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); // Usar useNavigate

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      // Trate o erro de senhas não coincidentes
      console.error('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('YOUR_API_ENDPOINT/signup', {
        fullName,
        email,
        password,
      });
      if (response.status === 201) {
        navigate('/login'); // Redirecionar para a tela de login
      } else {
        // Trate outros casos de resposta da API
        console.error('Failed to sign up');
      }
    } catch (error) {
      console.error('Signup failed', error);
      // Trate os erros conforme necessário
    }
  };

  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <SignupContainer component={Paper}>
      <Typography variant="h4" gutterBottom>
        Cadastro
      </Typography>
      <form noValidate autoComplete="off">
        <StyledTextField
          label="Nome Completo"
          variant="outlined"
          value={fullName}
          onChange={handleFullNameChange}
        />
        <StyledTextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={handleEmailChange}
        />
        <StyledTextField
          label="Senha"
          type="password"
          variant="outlined"
          value={password}
          onChange={handlePasswordChange}
        />
        <StyledTextField
          label="Repita a Senha"
          type="password"
          variant="outlined"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        <StyledButton variant="contained" onClick={handleSignup}>
          Cadastro
        </StyledButton>
        <Typography>
          Already have an account? <Link to="/login">Log in</Link>
        </Typography>
      </form>
    </SignupContainer>
  );
};

export default Signup;
