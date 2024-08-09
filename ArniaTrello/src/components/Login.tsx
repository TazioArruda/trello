import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { ButtonWrapper, LoginContainer, StyledButton, StyledTextField, Title } from './LoginStyles';
import { loginUser } from './userService';


const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await loginUser(email, password);
      if (response.token) {
        localStorage.setItem('authToken', response.token);
        navigate('/');
      } else {
        console.error('No token received');
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <LoginContainer>
      <Title variant="h4" gutterBottom>
        Arnia Trello
      </Title>
      <form noValidate autoComplete="off">
        <StyledTextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <StyledTextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ButtonWrapper>
          <StyledButton variant="contained" onClick={handleLogin}>
            Entrar
          </StyledButton>
        </ButtonWrapper>
        <Typography variant="body2" color="#FFFFFF" align="center" style={{ marginTop: '20px', cursor: 'pointer' }} onClick={() => navigate('/signup')}>
          Cadastre-se
        </Typography>
      </form>
    </LoginContainer>
  );
};

export default Login;
