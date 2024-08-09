// src/styles/LoginStyles.ts
import styled from '@emotion/styled';
import { Paper, Typography, TextField, Button } from '@mui/material';

// Estilização do Container de Login
export const LoginContainer = styled(Paper)`
  width: 320px;  // Ajustar conforme necessário
  height: 500px; // Ajustar conforme necessário
  position: absolute;
  top: 200px;  // Mais próximo do topo
  left: 50%;
  transform: translateX(-50%); // Centralizar horizontalmente
  border-radius: 20px;
  background-color: #3A72F8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px; // Padding para melhor espaçamento
`;

// Estilização do Título
export const Title = styled(Typography)`
  font-family: 'Poppins', sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 72px;
  text-align: center;
  color: #FFFFFF;
`;

// Estilização dos Campos de Texto
export const StyledTextField = styled(TextField)`
  width: 100%; // Ajustar para preencher a largura disponível
  height: 50px; // Altura reduzida
  margin-bottom: 20px; // Ajustar o espaçamento entre os campos
  border-radius: 25px;
  font-family: 'Poppins', sans-serif;
  font-size: 240px;
  font-weight: 400;
  line-height: 36px;
  text-align: center; // Centralizar o texto
  background: #FFFFFF;
  & .MuiOutlinedInput-root {
    border-radius: 25px;
    & fieldset {
      border: none; // Remove a borda
    }
  }
  & .MuiInputLabel-root {
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    color: #3A72F8; // Cor inicial da label
    &.Mui-focused {
      color: #000; // Cor da label quando em foco
    }
  }
`;
export const StyledButton = styled(Button)`
  background-color: #0A2668;
  max-width: 200px; // Largura menor
  width: 100%; // Ajusta até o max-width
  height: 45px;
  border-radius: 20px;
  color: #FFFFFF;
  margin-top: 20px;
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  &:hover {
    background-color: #08204D;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center; // Centraliza o botão horizontalmente
  width: 100%; // Garante que o wrapper ocupe toda a largura do container pai
`;