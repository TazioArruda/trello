// src/styles/LoginStyles.ts
import  styled  from '@emotion/styled';
import { Container, TextField, Button } from '@mui/material';

// Estilização do Container
export const LoginContainer = styled(Container)({
  width: '567px',
  height: '961px',
  position: 'absolute',
  top: '32px',
  left: '437px',
  padding: '29px 318px 884px 25px',
  borderRadius: '20px 0 0 0',
  backgroundColor: '#FFFFFF', // Cor de fundo do formulário
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Sombra suave
});

// Estilização dos Campos de Texto
export const StyledTextField = styled(TextField)({
  width: '438px',
  height: '59px',
  marginBottom: '20px',
  borderRadius: '25px 0 0 0',
});

// Estilização do Botão
export const StyledButton = styled(Button)({
  width: '438px',
  height: '59px',
  borderRadius: '25px 0 0 0',
  backgroundColor: '#3A72F8', // Cor do botão
  color: '#FFFFFF',
  '&:hover': {
    backgroundColor: '#2a5bb6', // Cor do botão ao passar o mouse
  },
});
