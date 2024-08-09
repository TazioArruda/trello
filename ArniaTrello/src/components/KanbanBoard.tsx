import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // useNavigate ao invés de useHistory

const KanbanBoard: React.FC = () => {
  const navigate = useNavigate(); // useNavigate ao invés de useHistory

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login'); // navegação com useNavigate
  };

  return (
    <Container>
      <Typography variant="h4">Kanban Board</Typography>
      <Button variant="contained" color="primary" onClick={handleLogout}>
        Logout
      </Button>
      {/* Adicione aqui o conteúdo da tela Kanban */}
    </Container>
  );
};

export default KanbanBoard;
