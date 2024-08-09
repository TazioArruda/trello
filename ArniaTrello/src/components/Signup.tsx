import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignupContainer, StyledButton, StyledTextField, Title, TitleH4, TitleH6 } from './SignupStyles';
import { createUser } from './userService';


const Signup: React.FC = () => {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }
    try {
      const response = await createUser(fullName, email, password);
      if (response) {
        navigate('/login');
      } else {
        console.error('Failed to sign up');
      }
    } catch (error) {
      console.error('Signup failed', error);
    }
  };

  return (
    <SignupContainer>
      <Title>
        <TitleH4>Arnia Trello</TitleH4>
        <TitleH6>Cadastro</TitleH6>
      </Title>
      <form noValidate autoComplete="off">
        <StyledTextField
          label="Nome Completo"
          variant="outlined"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <StyledTextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <StyledTextField
          label="Senha"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <StyledTextField
          label="Repita a Senha"
          type="password"
          variant="outlined"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <StyledButton variant="contained" onClick={handleSignup}>
          CADASTRAR
        </StyledButton>
      </form>
    </SignupContainer>
  );
};

export default Signup;
