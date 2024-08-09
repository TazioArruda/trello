// src/styles/SignupStyles.ts
import styled from '@emotion/styled';
import { Container, ContainerProps, TextField, Button, Typography } from '@mui/material';


export const TitleH4 = styled.h4`
  font-family: 'Poppins', sans-serif;
  font-size: 48px;
  line-height: 72px;
  color: #FFFFFF;
  margin: 0; // Remove margem padrão
`;

export const TitleH6 = styled.h6`
  font-family: 'Poppins', sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  text-align: center; // Centraliza o texto
  color: #FFFFFF;
  margin: 0; // Remove margem padrão
`;
// Estilização do Container
export const SignupContainer = styled(Container)<ContainerProps>({
  width: '420px',
  height: '600px',
  position: 'absolute',
  top: '50%',  // Centralizar verticalmente
  left: '50%', // Centralizar horizontalmente
  transform: 'translate(-50%, -50%)', // Ajuste para centralizar exatamente
  padding: '40px', // Ajuste de padding para espaçamento interno
  borderRadius: '20px', // Bordas arredondadas no container principal
  backgroundColor: '#3A72F8', // Cor de fundo do container
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Sombra suave
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center', // Centraliza o conteúdo verticalmente
});

// Estilização do Título
export const Title = styled(Typography)`
  font-family: 'Poppins', sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 72px;
  margin-bottom: 30px; // Ajuste para aproximar do topo
  text-align: center;
`;

// Estilização dos Campos de Texto
export const StyledTextField = styled(TextField)({
  width: '100%',
  height: '59px',
  marginBottom: '20px',
  borderRadius: '25px', // Borda arredondada em todo o formulário
  backgroundColor: '#FFFFFF', // Cor de fundo dos inputs
  opacity: '1',
  '& .MuiOutlinedInput-root': {
    borderRadius: '25px', // Borda arredondada nos inputs
    '& fieldset': {
      border: 'none', // Remover bordas
    },
  },
  '& .MuiInputLabel-root': {
    fontFamily: 'Poppins',
    fontSize: '24px',
    fontWeight: '400',
    lineHeight: '36px',
    color: '#000', // Cor da label
    top: '-6px', // Ajuste do topo da label para fora do input
    left: '10px', // Posicionar a label corretamente dentro do input
  },
});

// Estilização do Botão
export const StyledButton = styled(Button)({
  width: '209px', // Largura do botão conforme solicitado
  height: '50px', // Altura do botão ajustada para ficar um pouco menor
  borderRadius: '25px', // Borda arredondada em todos os lados
  backgroundColor: '#0A2668', // Cor de fundo do botão
  color: '#FFFFFF', // Cor do texto do botão
  fontFamily: 'Poppins',
  fontSize: '24px',
  fontWeight: '700',
  lineHeight: '36px',
  textAlign: 'center',
  margin: '20px auto', // Espaçamento acima e abaixo do botão, e centralização horizontal
  display: 'block', // Faz com que o botão seja um bloco, permitindo centralização
  '&:hover': {
    backgroundColor: '#08204D', // Cor do botão ao passar o mouse
  },
});
